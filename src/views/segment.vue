<script setup lang="ts">
import SegmentHeader from '@/components/segment-header.vue';

const props = defineProps({
    title: String
})

</script>

<template>
    <div class="min-h-0 h-full p-3">
        <div class="h-full p-1 segment-wrapper">
            <SegmentHeader v-bind:segmentHeader="props.title" />
            <slot></slot>
        </div>
    </div>
</template>