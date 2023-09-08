import { error, redirect, fail } from "@sveltejs/kit";
import {PUBLIC_DOMAIN} from '$env/static/public';
import { superValidate } from 'sveltekit-superforms/server'
import { pricingSchema } from '$lib/utils/schema'

import {PRIVATE_STRIPE_KEY} from '$env/static/private';
import Stripe from 'stripe';

const stripe = new Stripe(PRIVATE_STRIPE_KEY, {
    apiVersion: '2023-08-16',
});



export const load = async (event) => {
    const form = await superValidate(event, pricingSchema)
    return { form }
}


export const actions = {
	default: async (event) => {

        console.log("AYYY")

        const session = await event.locals.getSession()
        if (!session) {
            throw error(400, {
                message: "You are not logged in!",
            })
        }

		const form = await superValidate(event, pricingSchema)
        console.log(form)
		if (!form.valid) {
			return fail(400, { form })
		}
		
        console.log("======== ",PUBLIC_DOMAIN)

        const checkoutSession = await stripe.checkout.sessions.create({
            line_items: [
              {
                price: form.data.priceId,
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
    }
}