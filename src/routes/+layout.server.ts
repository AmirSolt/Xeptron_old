import {fetchProfile} from '$lib/funcs/server/database/index.js'
import type { Session } from "@supabase/supabase-js";


export const load = async ({ locals: { getSession } }) => {

  const session:Session|null = await getSession()

  const profile:Profile|null = await fetchProfile(session)


  return {
    session,
    profile
  }
}