<script setup lang="ts">
import SegmentHeader from '@/components/Segment-header.vue';

const props = defineProps({
    title: String
})

</script>

<template>
    <div class="">
        <SegmentHeader v-bind:segmentHeader="props.title" />
        <slot></slot>
    </div>
</template>