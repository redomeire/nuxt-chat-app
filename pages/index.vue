<script setup lang="ts">
const pathname = "root"
useSeoMeta({
    title: 'chat app',
    description: 'The intuitive chat app',
})

const isLoading = ref(false)

definePageMeta({
    middleware: ['protected']
})

const logout = async () => {
    try {
        isLoading.value = true
        await useFetch('/api/users/logout', {
            method: 'post',
            onResponse({ response }) {
                if (response.status === 200) {
                    console.log(response);
                    setTimeout(() => {
                        window.location.reload()
                    }, 500);
                }
            }
        })
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false
    }
}
</script>

<template>
    <p>This is {{ pathname }}</p>
    <div>
        <p>Hello, my name is</p>
    </div>
    <UButton @click="logout" :loading="isLoading">Logout</UButton>
</template>

<style scoped>
p {
    color: black;
}

div,
p {
    color: red;
}
</style>
