<script setup lang="ts">

import attributesVue from './views/attribute/attributes.vue';
import Bonds from './views/bonds.vue';
import LogStateVue from './views/Log-State.vue';
import TraitInfoVue from './views/traits/Trait-info.vue';
</script>

<template>

<SegmentHeader segmentHeader="Traits"/>

  <TraitInfoVue />

  <br />
  <LogStateVue />
  <attributesVue />
  <Bonds />
</template>

<style scoped>
</style>