<script setup lang="ts">
import SegmentHeader from '@/components/segment-header.vue';

const props = defineProps({
    title: String
})

</script>

<template>
    <div class="min-h-0 h-full">
        <SegmentHeader v-bind:segmentHeader="props.title" />
        <div class="h-3/4 p-1 segment-wrapper">
            <slot></slot>
        </div>
    </div>
</template>