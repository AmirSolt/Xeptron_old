import type { Session } from "@supabase/supabase-js";
import {newUserBonusDollars} from '$lib/utils/config.server'


export const load = async ({ locals: { getSession } }) => {

  const session:Session|null = await getSession()

  return {
    session,
    newUserBonusDollars
  }
}

