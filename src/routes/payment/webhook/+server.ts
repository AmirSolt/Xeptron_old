import { fail } from "@sveltejs/kit";
import type Stripe from 'stripe';
import {stripe} from '$lib/utils/stripeHelper.server.js'

export const post = async ({request}) => {
    const body = await request.json();

    let event:Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(body, request.headers["stripe-signature"], PRIVATE_WEBHOOK_SECRET);
    } catch (err) {
        throw fail(400, {
            message: "Could not construct stripe event",
        })
    }

    const dataObject = event.data.object;
    console.log(`🥳 Payment received! ${dataObject}`);

    // if (event.type === 'checkout.session.completed') {
    //     console.log(`🥳 Payment received! ${dataObject}`);
    // }

    return {
        status: 200,
        body: { received: true }
    };
};

