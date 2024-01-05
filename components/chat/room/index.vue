<script setup lang="ts">
const state = reactive({
    value: ""
})
</script>

<template>
    <section class="chat-room w-2/3 h-screen">
        <ChatRoomNav />
        <div class="p-3 h-[90%] bg-[url('~/assets/images/doodle.jpg')] bg-center bg-contain relative">
            <UForm :state="state" class="absolute bottom-10 left-0 right-0 flex items-stretch justify-between px-5 z-50 gap-3">
                <UFormGroup name="value" class="w-full">
                    <UInput size="lg" type="text" v-model="state.value" placeholder="Enter your message..."
                        :ui="{ icon: { trailing: { pointer: '' } } }">
                        <template #trailing>
                            <div>
                                <UButton icon="i-material-symbols-emoji-nature" color="gray" variant="link"
                                    class="text-gray-500 dark:text-gray-400 text-xs"></UButton>
                                <UButton icon="i-material-symbols-attach-file" color="gray" variant="link"
                                    class="text-gray-500 dark:text-gray-400 text-xs"></UButton>
                                <UButton icon="i-material-symbols-mic-rounded" color="gray" variant="link"
                                    class="text-gray-500 dark:text-gray-400 text-xs"></UButton>
                            </div>
                        </template>
                    </UInput>
                </UFormGroup>
                <UButton class="flex items-center justify-center" variant="solid" color="primary"
                    icon="i-material-symbols-send"></UButton>
            </UForm>
        </div>
    </section>
</template>
