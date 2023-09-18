import { superValidate } from 'sveltekit-superforms/server'
import { personalizationSchema } from '$lib/utils/schema'
import { fail, error } from '@sveltejs/kit';
import { updatePersonality } from '$lib/funcs/server/database/index.js';



    
export async function load(event) {
	const form = await superValidate(event, personalizationSchema)
    return {
        form,
    }
}


export const actions = {
	default: async (event) => {

		const session = await event.locals.getSession()
		if (!session) {
			throw error(400, {
				message: "You are not logged in!",
			})
		}


		const form = await superValidate(event, personalizationSchema)
        console.log(form)
		if (!form.valid) {
			return fail(400, { form })
		}

		const personality:Personality = {
			first_name:form.data.first_name??null,
			last_name:form.data.last_name??null,
			occupation:form.data.occupation??null,
		}
		await updatePersonality(session, personality)

        return {form}
    }
}