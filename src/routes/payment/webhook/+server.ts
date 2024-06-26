import type { Stripe } from 'stripe'
import { stripe, getProductDescription } from '$lib/utils/stripeHelper.server.js'
import { PRIVATE_WEBHOOK_SECRET } from '$env/static/private';
import {packages} from '$lib/utils/config.server.js'
import {incrementCustomerCredit} from '$lib/funcs/server/database/index.js'


function toBuffer(ab: ArrayBuffer): Buffer {
    const buf = Buffer.alloc(ab.byteLength);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; i++) {
        buf[i] = view[i];
    }
    return buf;
}

export const POST = async ({ request }) => {
    let data: Stripe.Event.Data | null = null;
    let eventType: string | null = null;
    if (PRIVATE_WEBHOOK_SECRET) {

        const _rawBody = await request.arrayBuffer();
        const payload = toBuffer(_rawBody);

        // SvelteKit may sometimes modify the incoming request body
        // However, Stripe requires the exact body it sends to construct an Event
        // To avoid unintended SvelteKit modifications, we can use this workaround:
        // const payload = Buffer.from(req.rawBody);

        const signature: string | null = request.headers.get('stripe-signature');
        try {
            const event = stripe.webhooks.constructEvent(payload, signature ?? "", PRIVATE_WEBHOOK_SECRET);
            data = event.data;
            eventType = event.type;
        } catch (err) {
            return new Response(JSON.stringify({
                error: err
            }),
                {
                    status: 500,
                    headers: {},

                })
        }
    } else {
        eventType = (await request.formData()).get('type')?.toString() ?? null;
    }
    if (data == null || eventType == null) {
        return new Response(JSON.stringify({
            error: `No data or eventType was found. data: ${data} ||||| eventType: ${eventType}`
        }),
            {
                status: 500,
                headers: {},

            })
    }

    switch (eventType) {
        case 'checkout.session.completed':
            const customerId: string = data.object.customer
            const sessionId: string = data.object.id
            const session = await stripe.checkout.sessions.retrieve(
                sessionId,
                {
                    expand: ['line_items'],
                }
            );


            // Count how much credit was purchased
            let totalCredits:number = 0
            session.line_items?.data.forEach(item=>{
                const quantity = item.quantity
                const description = item.description
                if(description==null || quantity == null){
                    return;
                }
                console.log(">>>",description)
                const mpackage:Package|undefined = packages.find(mpackage=>{
                    return getProductDescription(mpackage.credits) == description
                })
                totalCredits+=mpackage?.credits??0 * quantity
            })

            // Update customer with credits
            if(totalCredits>0){
                await incrementCustomerCredit(customerId, totalCredits)
            }

            break;
        default:
    }


    return new Response(JSON.stringify({
        message: 'Success'
    }),
        {
            status: 200,
            headers: {},

        })
};

