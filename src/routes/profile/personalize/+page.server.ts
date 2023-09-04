import { superValidate } from 'sveltekit-superforms/server'
import { personalizationSchema } from '$lib/utils/schema'
import { fail, error } from '@sveltejs/kit';
import { fetchProfileData, updatePersonality } from '$lib/funcs/server/database/index.js';



    
export async function load(event) {
	const session = await event.locals.getSession()
    const profileData = await fetchProfileData(session,
        `
        personalities(writingStyle, useCase, name)
        `
   )
   let personality:Personality|null=profileData["personalities"]

	const form = await superValidate(event, personalizationSchema)
    return {
        form,
        personality
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
			name:form.data.name??null,
			useCase:form.data.useCase??null,
			writingStyle:form.data.writingStyle??null,
		}
		await updatePersonality(session, personality)

        return {form}
    }
}