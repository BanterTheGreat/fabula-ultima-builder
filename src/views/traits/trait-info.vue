<script setup lang="ts">
import TraitInput from './trait-input.vue'
</script>

<template>
  <div class="grid grid-cols-6 grid-rows-2 grid-flow-row">
    <div class="col-span-6 grid grid-cols-6 grid-rows-1 py-1">
      <TraitInput traitName="identity" :colspanLabel=1 :colspanInput=5 />
    </div>
    <div class="col-span-6 grid grid-cols-6 grid-rows-1 py-1">
      <TraitInput traitName="theme" :colspanLabel=1 :colspanInput=2 />
      <TraitInput traitName="origin" :colspanLabel=1 :colspanInput=2 />
    </div>
  </div>
</template>
