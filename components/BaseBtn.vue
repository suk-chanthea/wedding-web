<template>
    <button :class="[
        'rounded-md font-semibold transition duration-200 ease-in-out animate-pop',
        colorClass,
        { 'opacity-50 cursor-not-allowed': disabled },
        { 'animate-fade-out': isClicked }
    ]" :disabled="disabled" @click="handleClick">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isClicked = ref(false)

const props = defineProps<{
    variant?: 'primary' | 'secondary' | 'danger' | 'transparent'
    disabled?: boolean
}>()

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
}>()

const colorClass = computed(() => {
    switch (props.variant) {
        case 'primary':
            return 'bg-blue-600 text-white hover:bg-blue-700'
        case 'secondary':
            return 'bg-gray-500 text-white hover:bg-gray-600'
        case 'danger':
            return 'bg-red-600 text-white hover:bg-red-700'
        default:
            return 'bg-transparent'
    }
})

function handleClick(event: MouseEvent) {
    if (!props.disabled) {
        isClicked.value = true
        emit('click', event)
    }
}
</script>

<style scoped>
button {
    outline: none;
}

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
    animation: pop 2s infinite;
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.animate-fade-out {
    animation: fadeOut 3s forwards;
}
</style>