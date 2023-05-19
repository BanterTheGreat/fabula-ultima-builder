<script setup lang="ts">
import { RouterView } from 'vue-router'
import UpdateInfo from './views/Update-Info.vue';
import SegmentHeader from './views/Segment-header.vue'
</script>

<template>
  <SegmentHeader segmentHeader="Traits"/>
  <UpdateInfo />
  <RouterView />
</template>

<style scoped>
</style>