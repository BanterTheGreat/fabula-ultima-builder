<script setup lang="ts">

import attributesVue from './views/attribute/attributes.vue';
import LogStateVue from './views/Log-State.vue';
import TraitInfoVue from './views/traits/Trait-info.vue';
import SegmentHeader from './components/Segment-header.vue';
import SegmentBody from './components/Segment-body.vue';

</script>

<template>
  <SegmentHeader segmentHeader="Traits" />
  <SegmentBody/>

  <TraitInfoVue />

  <br />
  <LogStateVue />
  <attributesVue />
</template>

<style scoped></style>