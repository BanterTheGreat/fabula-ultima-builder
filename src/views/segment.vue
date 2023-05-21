<script setup lang="ts">
import SegmentHeader from '@/components/segment-header.vue';

const props = defineProps({
    title: String
})

</script>

<template>
    <div>
        <SegmentHeader v-bind:segmentHeader="props.title" />
        <slot></slot>
    </div>
</template>