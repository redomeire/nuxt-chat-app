<script setup lang="ts">
    defineProps({
        text: String,
        time: String
    })
</script>

<template>
    <div class="rounded-xl w-fit rounded-bl-none p-2 bg-white z-40 relative min-w-[100px] max-w-[200px] transition duration-200 translate-y-10">
        <p class="text-sm font-semibold">{{ text }}</p>
        <p class="text-[10px]">{{ time }}</p>
    </div>
</template>
