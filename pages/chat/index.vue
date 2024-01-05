<script setup lang="ts">
definePageMeta({
    middleware: ['protected'],
    layout: 'chat'
})
</script>

<template>
    <div class="flex items-start">
        <ChatList />
        <ChatRoom />
    </div>
</template>
