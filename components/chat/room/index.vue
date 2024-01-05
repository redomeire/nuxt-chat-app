<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

const state = reactive({
    value: ""
})

const messages = reactive([
    {
        text: 'Halo ges',
        time: '13.00'
    },
    {
        text: 'Iya halo',
        time: '14.00'
    }
])

const form = ref<HTMLFormElement>()

const onSubmit = (event: FormSubmitEvent<any>) => {
    messages.push({ text: state.value, time: '10.00' })
    form.value?.reset()

}
</script>

<template>
    <section class="chat-room w-2/3 h-screen">
        <ChatRoomNav />
        <div class="p-3 h-[90%] bg-[url('~/assets/images/doodle.jpg')] bg-center bg-contain relative">
            <div class="chat-bubble-container relative h-[90%] overflow-auto flex flex-col gap-3">
                <div v-for="message of messages">
                    <ChatRoomBubble :text="message.text" :time="message.time"/>
                </div>
            </div>
            <UForm 
                @submit="onSubmit"
                :state="state"
                ref="form"
                class="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 z-50 gap-3 bg-white h-[10%]">
                <UFormGroup name="value" class="w-full">
                    <UInput 
                        size="lg" 
                        type="text" 
                        class="pr-20"
                        variant="none"
                        v-model="state.value" 
                        placeholder="Enter your message..."
                        :ui="{ icon: { trailing: { pointer: '' } } }">
                        <template #trailing>
                            <div>
                                <UButton type="button" icon="i-material-symbols-emoji-nature" color="gray" variant="link"
                                    class="text-gray-500 dark:text-gray-400 text-xs"></UButton>
                                <UButton type="button" icon="i-material-symbols-attach-file" color="gray" variant="link"
                                    class="text-gray-500 dark:text-gray-400 text-xs"></UButton>
                                <UButton type="button" icon="i-material-symbols-mic-rounded" color="gray" variant="link"
                                    class="text-gray-500 dark:text-gray-400 text-xs"></UButton>
                            </div>
                        </template>
                    </UInput>
                </UFormGroup>
                <UButton 
                    type="submit" 
                    class="flex items-center justify-center" 
                    size="lg" 
                    variant="solid" 
                    color="primary"
                    icon="i-material-symbols-send"
                />
            </UForm>
        </div>
    </section>
</template>
