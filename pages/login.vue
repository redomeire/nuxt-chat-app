<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

const user = reactive({
    email: '',
    password: ''
})

const isLoading = ref(false)

const toast = useToast()

const validate = (state: typeof user): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })

    return errors
}

const login = async (ev: FormSubmitEvent<any>) => {
    try {
        const response = await useFetch('/api/users/login', {
            method: 'post',
            body: {
                ...user
            },
            onRequest() {
               isLoading.value = true
            },
            onResponse({ response }) {
               if(response.status === 200) {
                toast.add({
                    title: response.statusText,
                    color: 'green'
                })
                console.log(response);
                
                return
               }
               console.log(response.statusText);
               toast.add({
                title: response.statusText,
                color: 'red'
               })
            }
        })
    } catch (error) {
        console.error(error)
    } finally {
        isLoading.value = false
    }
}

</script>

<template>
    <UForm title="Login" :state="user" :validate="validate" class="flex flex-col md:min-w-[400px] min-w-full shadow-lg p-5 rounded-xl" @submit="login">
        <p class="mb-5 font-bold text-2xl">Login</p>
        <UFormGroup label="Email" name="email" required class="my-2">
            <UInput type="text" id="email" color="primary" variant="outline" placeholder="email" v-model="user.email" />
        </UFormGroup>
        <UFormGroup label="Password" name="password" required class="my-2">
            <UInput type="password" id="password" color="primary" variant="outline" placeholder="password"
                v-model="user.password" />
        </UFormGroup>
        <UButton type="submit" class="mt-5 flex items-center justify-center" :loading="isLoading">
            Submit
        </UButton>
        <p class="text-sm mt-3">Don't have account yet? <ULink to="/register" class="text-primary">Sign up</ULink></p>
    </UForm>
</template>
