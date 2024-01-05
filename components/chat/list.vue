<script setup lang="ts">
const dropdownItems = [
    [{
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }]
]
</script>

<template>
    <UCard class="w-1/3 max-h-screen overflow-auto rounded-none">
        <div class="p-3 py-5 sticky top-0 z-20 bg-white shadow">
            <div class="flex items-center justify-between">
                <p class="font-extrabold text-xl">Message</p>
                <UButton variant="solid" color="primary">
                    <UIcon name="i-material-symbols-edit"></UIcon>
                </UButton>
            </div>
            <div class="flex items-center justify-between mt-5">
                <div class="flex items-center gap-3">
                    <UButton variant="ghost" icon="i-material-symbols-groups" color="transparent"></UButton>
                    <p class="text-sm">All</p>
                    <UBadge>52</UBadge>
                    <UDropdown :items="dropdownItems" :popper="{ placement: 'right-start' }">
                        <UButton icon="i-material-symbols-chevron-right-rounded" variant="ghost"></UButton>
                    </UDropdown>
                </div>
                <UButton color="black" icon="i-material-symbols-home-max-dots"></UButton>
            </div>
        </div>

        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
       
    </UCard>
</template>
