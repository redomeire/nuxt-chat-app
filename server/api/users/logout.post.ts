import { navigateTo } from "nuxt/app"

export default defineEventHandler(async (event) => {
    try {
        deleteCookie(event, "token")

        navigateTo('/login')

        return {
            status: 200,
            message: 'success logout'
        }
    } catch (error) {
       console.error(error);
    }
})
