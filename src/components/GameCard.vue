<script setup>
// eslint-disable-next-line
const props = defineProps({
    game: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <Card>
        <template #title> <span class="font-bold text-3xl">{{ props.game.match_date.toLocaleDateString() }}</span>
        </template>
        <template #content>
            {{ props.game }}
        </template>
    </Card>
</template>
