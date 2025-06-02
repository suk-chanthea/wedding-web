<template>
    <button :class="[
        'rounded-md font-semibold transition duration-200 ease-in-out',
        colorClass,
        { 'opacity-50 cursor-not-allowed': disabled }
    ]" :disabled="disabled" @click="handleClick">
        <slot />
    </button>
</template>

<script setup lang="ts">
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
    if (!props.disabled) emit('click', event)
}
</script>

<style scoped>
button {
    outline: none;
}
</style>