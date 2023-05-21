<script setup lang="ts">
import TraitInput from './trait-input.vue'
</script>

<template>
  <div class="grid grid-cols-6 grid-rows-2 grid-flow-row">
    <div class="col-span-6 grid grid-cols-6 grid-rows-1" style="width: inherit !important;">
      <!-- colspan cannot be higher than 3 because then it breaks all layouts for some reason, will update to newest tailwind and try again -->
      <TraitInput traitName="identity" :colspanLabel=1 :colspanInput=3 />
    </div>
    <div class="col-span-6 grid grid-cols-6 grid-rows-1" style="width: inherit !important;">
      <TraitInput traitName="theme" :colspanLabel=1 :colspanInput=2 />
      <TraitInput traitName="origin" :colspanLabel=1 :colspanInput=2 />
    </div>
  </div>
</template>
