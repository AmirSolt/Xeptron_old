import { error, redirect, fail } from "@sveltejs/kit";
import {PUBLIC_DOMAIN} from '$env/static/public';
import { setError, superValidate } from 'sveltekit-superforms/server'
import { pricingSchema } from '$lib/utils/schema'
import {stripe, getProductDescription} from '$lib/utils/stripeHelper.server.js'
import {packages, chatInputCreditPerChar, chatOutCreditPerChar, detectorCreditPerChar, charPerCredit} from '$lib/utils/config.server.js'



export const load = async (event) => {
    const form = await superValidate(event, pricingSchema)
    return { form, packages, chatInputCreditPerChar, chatOutCreditPerChar, detectorCreditPerChar, charPerCredit}
}


export const actions = {
	default: async (event) => {

		
        const session = await event.locals.getSession()
        if (!session) {
            throw redirect(303, "/auth/signup");
        }

        const form = await superValidate(event, pricingSchema)
        if (!form.valid) {
			return fail(400, { form })
		}

        


        const chosenPackage:Package|undefined = packages.find(dpackage=>dpackage.id === form.data.id)
        

        if (chosenPackage == null) {
			return fail(400, { form })
		}

        const checkoutSession = await stripe.checkout.sessions.create({
            line_items: [
              {
                price_data:{
                    currency:chosenPackage.currency,
                    unit_amount:Math.round(chosenPackage.credits*chosenPackage.pricePerCredit*100),
                    product_data:{
                        name:getProductDescription(chosenPackage.credits),
                    },
                },
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