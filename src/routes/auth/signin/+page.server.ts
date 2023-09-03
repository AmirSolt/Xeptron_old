import { fail, redirect } from '@sveltejs/kit'
import { superValidate, setError } from 'sveltekit-superforms/server'

import { signinSchema } from '$lib/utils/schema'


export const load = async (event) => {
    const session = await event.locals.getSession()
    if (session) {
        throw redirect(302, '/')
    }

	// always return `form` in load and form actions
	const form = await superValidate(event, signinSchema)
	return { form }
}

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, signinSchema)
        console.log(form)
		if (!form.valid) {
			return fail(400, { form })
		}

        return {form }
    }
}