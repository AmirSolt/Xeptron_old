import { error, fail, redirect } from '@sveltejs/kit'
import { verifyOTPSchema } from '$lib/utils/schema'


export const GET = async ({request, locals:{supabaseAuthServer}}) => {

	let input = await request.json()
    const email:string = input.email
    const token:string = input.token

	if(!verifyOTPSchema.tokenVerifySchema.safeParse({email, token}).success){
        throw error(400, "invalid credentials")
    }
	const { data, error: err } = await supabaseAuthServer.auth.verifyOtp({
		email,
		token,
		type:"email",
	})

	if(err != null) {
		throw error(err.status ?? 500, {
			message: err.message,
		})
	}

	throw redirect(302, '/auth/resetPassword/update')
};

