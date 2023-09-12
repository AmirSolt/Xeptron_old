import type { Session } from "@supabase/supabase-js";


export const load = async ({ locals: { getSession } }) => {

  const session:Session|null = await getSession()

  return {
    session,
  }
}