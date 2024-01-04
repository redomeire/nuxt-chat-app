export default defineNuxtRouteMiddleware(async () => {    
    try {
        const token = useCookie("token")
        
        if (token.value === undefined) return navigateTo('/login')
    } catch (error) {
        console.error(error);
    }

    return
})
