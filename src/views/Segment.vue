<script setup lang="ts">
import SegmentHeader from '@/components/Segment-header.vue';
import SegmentBody from '@/components/Segment-body.vue';

const props = defineProps({
  title: String
})

</script>

<template>
    <SegmentHeader v-bind:segmentHeader="props.title" />
    <SegmentBody>
        test
    </SegmentBody>
</template>