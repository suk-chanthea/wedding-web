<template>
    <button class="w-[50%] md:max-w-[30vw] h-auto" :class="{ 'animate-pop': animating }">
        <img class="w-full h-full" src="/assets/image/demo/btn/open.png" alt="">
    </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const animating = ref(true)
let intervalId

onMounted(() => {
    intervalId = setInterval(() => {
        animating.value = true
        setTimeout(() => {
            animating.value = true
        }, 2000)
    }, 4000) // every 2 seconds
})

onBeforeUnmount(() => {
    clearInterval(intervalId)
})
</script>

<style scoped>
@keyframes pop {
    0% {
    transform: scale(1, 1);
    }
    50% {
        transform: scale(1.1, 1.1);
    }
    100% {
        transform: scale(1, 1);
    }
}

.animate-pop {
    animation: pop 2s ease infinite;
}
</style>