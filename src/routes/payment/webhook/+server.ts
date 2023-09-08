import { error } from "@sveltejs/kit";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: "2023-08-16",
    typescript: true,
});

export const post = async (req) => {
    const buf = await getRawBody(req);

    let event;
    try {
        event = stripe.webhooks.constructEvent(buf, req.headers["stripe-signature"], process.env.STRIPE_WEBHOOK_SECRET || '');
    } catch (err) {
        // On error, log and return the error message
        console.log(`❌ Error message: ${err.message}`);
        return error(400, `Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        // Add your business logic here (e.g. record the purchase in your DB)
        console.log(`🥳 Payment received! ${session}`);
    }

    return {
        status: 200,
        body: { received: true }
    };
};

// utility function to read raw request body
async function getRawBody(req) {
    let body = "";
    // get request stream and decode buffer to string
    await req.body().then(val => {
        if(val.body) {
            body = Buffer.from(val.body,'base64').toString()
        }
    });

    return body;
}