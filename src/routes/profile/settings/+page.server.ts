import { deleteUserSchema } from '$lib/utils/schema'
import { error, fail, redirect } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'
import {deletePrompt} from '$lib/utils/config'



export const load = async (event) => {
    const session = await event.locals.getSession()
	if (!session) {
		throw redirect(302, '/auth/noGo')
	}
    const form = await superValidate(event, deleteUserSchema)
    return { form }
}



export const actions = {
    default: async (event) => {

        event.locals.getSession

        const user_id = (await event.locals.getSession())?.user.id

        if(!user_id){
            throw error(400, "Something went wrong.")
        }

        const form = await superValidate(event, deleteUserSchema)
        console.log(form)
        if (!form.valid) {
            return fail(400, { form })
        }

        if(form.data.prompt !== deletePrompt){
            throw error(400, "Does not match.")
        }

        const { data, error:err } = await event.locals.supabaseAuthServer.auth.admin.deleteUser(
            user_id,
            true
        )

        if(err != null) {
            throw error(err.status ?? 500, {
                message: err.message,
            })
		}

        throw redirect(302, '/')

	}
}

