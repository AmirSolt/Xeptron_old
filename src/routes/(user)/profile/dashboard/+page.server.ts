/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    // const user = await db.getUserFromSession(cookies.get('sessionid'));
    // return { user };
}

/** @type {import('./$types').Actions} */
export const actions = {
    test: async ({ cookies, request }) => {
        console.log("test")
        return { success: true };
    },
};