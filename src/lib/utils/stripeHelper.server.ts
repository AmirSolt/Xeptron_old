import type { User, Session } from '@supabase/supabase-js';

import {PRIVATE_STRIPE_KEY} from '$env/static/private';
import Stripe from 'stripe';
export const stripe = new Stripe(PRIVATE_STRIPE_KEY, {
    apiVersion: '2023-08-16',
});

export async function createStripeCustomer(email:string, first_name:string|null, last_name:string|null):Promise<string|null>{
	
	const name:string|undefined = first_name!=null || last_name!=null? `${first_name??""} ${last_name??""}`.trim() : undefined
	const customer = await stripe.customers.create({
		name:name,
		email:email??undefined,
	})
	if(customer==null){
		return null
	}
	return customer.id
}