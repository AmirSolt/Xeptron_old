import { error, redirect } from "@sveltejs/kit";
import {PUBLIC_DOMAIN} from '$env/static/public';
import {PRIVATE_STRIPE_KEY} from '$env/static/private';
import Stripe from 'stripe';

const stripe = new Stripe(PRIVATE_STRIPE_KEY, {
    apiVersion: '2023-08-16',
});

export const POST = async ({request, locals:{getSession}}) => {
    let input = await request.json()
    const priceId:string = input.priceId
    
    const session = await getSession()
	if (!session) {
		throw error(400, {
            message: "You are not logged in!",
        })
	}

    console.log("======== ",PUBLIC_DOMAIN)

    const checkoutSession = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${PUBLIC_DOMAIN}/payment/success`,
        cancel_url: `${PUBLIC_DOMAIN}/payment/pricing`,
        customer_email:session.user.email,
    });

    if (checkoutSession.url==null) {
		throw error(400, {
            message: "Sorry there was an issue",
        })
	}

    throw redirect(303, checkoutSession.url);

};
