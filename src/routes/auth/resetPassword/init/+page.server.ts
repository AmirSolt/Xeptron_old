import { error, fail, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'

import { resetPassSchema } from '$lib/utils/schema'


export const load = async (event) => {
    const session = await event.locals.getSession()
    if (session) {
        throw redirect(302, '/')
    }
    const form = await superValidate(event, resetPassSchema)
    return { form }
}

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, resetPassSchema)
        console.log(form)
        if (!form.valid) {
            return fail(400, { form })
        }

        const { data: resetPassData, error: resetPassError } = await event.locals.supabaseAuthServer.auth.resetPasswordForEmail({
            email: form.data.email,
            options:{
                redirectTo: '/auth/resetPassword/otp'
            }
		})

        if(resetPassError != null) {
            throw error(resetPassError.status ?? 500, {
                message: resetPassError.message,
            })
		}

        throw redirect(302, '/auth/confirm')

	}
}