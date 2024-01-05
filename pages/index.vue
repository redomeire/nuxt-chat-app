<script setup lang="ts">
useSeoMeta({
    title: 'chat app',
    description: 'The intuitive chat app',
})
</script>

<template>
    <main>
        <p>Go Chat</p>
        <UButton to="/chat">Click me</UButton>
    </main>
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
