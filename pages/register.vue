<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

definePageMeta({
    middleware: ['auth']
})

const user = reactive({
    fullname: '',
    email: '',
    password: ''
})

const isLoading = ref(false)

const toast = useToast()

const validate = (state: typeof user): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ path: 'email', message: 'Required' })
    if (!state.password) errors.push({ path: 'password', message: 'Required' })
    if (!state.fullname) errors.push({ path: 'fullname', message: 'Required' })

    return errors
}

const register = async (ev: FormSubmitEvent<any>) => {
    try {
        const response = await useFetch('/api/users/register', {
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
    <UForm title="Register" :state="user" :validate="validate" class="flex flex-col md:min-w-[400px] min-w-full shadow-lg p-5 rounded-xl" @submit="register">
        <p class="mb-5 font-bold text-2xl">Register</p>
        <UFormGroup label="Full Name" name="fullname" required class="my-2">
            <UInput type="text" id="fullname" color="primary" variant="outline" placeholder="fullname"
                v-model="user.fullname" />
        </UFormGroup>
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
        <p class="text-sm mt-3">Already has account? <ULink to="/login" class="text-primary">Sign in</ULink></p>
    </UForm>
</template>
