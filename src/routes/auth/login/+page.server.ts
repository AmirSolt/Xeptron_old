import { fail } from '@sveltejs/kit'

// src/routes/login/+page.server.ts
export const actions = {
    signup: async ({ request, url, locals: { supabase } }) => {
      const formData = await request.formData()
      const email = formData.get('email') as string
      const password = formData.get('password') as string


      console.log(email)
      console.log(password)
  
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${url.origin}/auth/callback`,
        },
      })
      console.log(error?.message)
      if (error) {
        return fail(500, { message: 'Server error. Try again later.', success: false, email })
      }
  
      return {
        message: 'Please check your email for a magic link to log into the website.',
        success: true,
      }
    },
  }