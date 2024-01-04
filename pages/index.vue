<script setup lang="ts">
const pathname = "root"
useSeoMeta({
    title: 'chat app',
    description: 'The intuitive chat app'
})

const firstName = "redo"
const lasstName = "meire"
</script>

<template>
    <p>This is {{ pathname }}</p>
    <div>
        <p>Hello, my name is {{ firstName }} {{ lasstName }}</p>
    </div>
</template>

<style scoped>
p {
    color: black;
}
div, p {
    color: red;
}
</style>
