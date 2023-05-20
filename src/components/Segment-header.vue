<script setup lang="ts">
const props = defineProps({
  segmentHeader: String
})
</script>

<template>
  <div class="text-white text-center font-semibold bg-fabula-green rounded uppercase inline-block 
              w-fit px-5 font-fabula-header">
    {{ segmentHeader }}
  </div>
  <div class="divider"></div>
</template>

<style scoped>
.w-fit {
  width: 'fit-content'
}
</style>