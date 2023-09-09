import type {Stripe} from 'stripe'
import { stripe } from '$lib/utils/stripeHelper.server.js'
import { PRIVATE_WEBHOOK_SECRET } from '$env/static/private';



function toBuffer(ab: ArrayBuffer): Buffer {
    const buf = Buffer.alloc(ab.byteLength);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; i++) {
        buf[i] = view[i];
    }
    return buf;
}

export const POST = async ({ request }) => {
    let data:Stripe.Event.Data|null=null;
    let eventType: string|null=null;
    if (PRIVATE_WEBHOOK_SECRET) {

        const _rawBody = await request.arrayBuffer();
        const payload = toBuffer(_rawBody);

        // SvelteKit may sometimes modify the incoming request body
        // However, Stripe requires the exact body it sends to construct an Event
        // To avoid unintended SvelteKit modifications, we can use this workaround:
        // const payload = Buffer.from(req.rawBody);

        const signature:string|null = request.headers.get('stripe-signature');
        try {
            const event = stripe.webhooks.constructEvent(payload, signature??"", PRIVATE_WEBHOOK_SECRET);
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
        eventType = (await request.formData()).get('type')?.toString()??null;
    }
    if(data==null || eventType==null){
        return new Response(JSON.stringify({
            error: `No data or eventType was found. data: ${data} ||||| eventType: ${eventType}`
            }),
            {
                status: 500,
                headers: {},
    
        })
    }



    // charge.succeeded
    // checkout.session.completed
    // payment_intent.succeeded
    // payment_intent.created
    console.log(eventType)
    // switch (eventType) {
    //     case 'checkout.session.completed':
    //         // Payment is successful and the subscription is created.
    //         // You should provision the subscription and save the customer ID to your database.
    //         console.log(data.object)
    //         break;
    //     case 'invoice.paid':
    //         // Continue to provision the subscription as payments continue to be made.
    //         // Store the status in your database and check when a user accesses your service.
    //         // This approach helps you avoid hitting rate limits.
    //         console.log('Event: invoice.paid');
    //         break;
    //     case 'invoice.payment_failed':
    //         // The payment failed or the customer does not have a valid payment method.
    //         // The subscription becomes past_due. Notify your customer and send them to the
    //         // customer portal to update their payment information.
    //         console.log('Event: invoice.payment_failed');
    //         break;
    //     default:
    //     // Unhandled event type
    // }


    return new Response(JSON.stringify({
        message: 'Success'
        }),
        {
            status: 200,
            headers: {},

    })
};

