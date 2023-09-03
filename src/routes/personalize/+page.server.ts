import { personality } from '$lib/funcs/server/database/index.js';
import { superValidate, setError } from 'sveltekit-superforms/server'
import { personalizationSchema } from '$lib/utils/schema'
import { fail, error } from '@sveltejs/kit';

export async function load(event) {
	const form = await superValidate(event, personalizationSchema)
    return {
        form,
        personality
    }
}


export const actions = {
	default: async (event) => {
		const form = await superValidate(event, personalizationSchema)
        console.log(form)
		if (!form.valid) {
			return fail(400, { form })
		}

		// database

		// if(personError!=null){
		// 	throw error(personError.status??500, {
		// 		message: personError.message,
		// 	})
		// }

        return {form}
    }
}