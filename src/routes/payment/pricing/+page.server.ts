import { error, redirect, fail } from "@sveltejs/kit";
import {PUBLIC_DOMAIN} from '$env/static/public';
import { setError, superValidate } from 'sveltekit-superforms/server'
import { pricingSchema } from '$lib/utils/schema'
import {stripe} from '$lib/utils/stripeHelper.server.js'



export const load = async (event) => {
    const form = await superValidate(event, pricingSchema)
    return { form }
}


export const actions = {
	default: async (event) => {

		
        const session = await event.locals.getSession()
        if (!session) {
            throw error(400, {
                message: "You are not logged in!",
            })
        }

        const form = await superValidate(event, pricingSchema)
        if (!form.valid) {
			return fail(400, { form })
		}

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
            customer:session.user.user_metadata["customer_id"],
        });
        if (checkoutSession.url==null) {
            throw error(400, {
                message: "Sorry there was an issue",
            })
        }
    
        throw redirect(303, checkoutSession.url);
    }
}