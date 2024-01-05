<script setup lang="ts">
const state = reactive({
    value: ''
})
</script>
<template>
    <nav class="w-full bg-white p-2 px-5 sticky top-0 z-20 h-[10%] flex items-center justify-between">
        <div class="flex items-center gap-3">
            <UAvatar chip-color="primary" chip-text="" chip-position="top-right"
                src="https://avatars.githubusercontent.com/u/739984?v=4" size="md" alt="Avatar" />
            <div>
                <p class="font-semibold text-sm">Guide Hawkinsz</p>
                <p class="text-xs">Online</p>
            </div>
        </div>
        <UForm :state="state">
            <UFormGroup name="value">
                <UInput size="lg" type="text" v-model="state.value" placeholder="Search"
                    :ui="{ icon: { trailing: { pointer: '' } } }">
                    <template #trailing>
                        <div>
                            <UButton icon="i-material-symbols-search" color="gray" variant="link"
                                class="text-gray-500 dark:text-gray-400 text-xs"></UButton>
                        </div>
                    </template>
                </UInput>
            </UFormGroup>
        </UForm>
    </nav>
</template>
