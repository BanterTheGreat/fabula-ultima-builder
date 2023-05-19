<script setup lang="ts">
const props = defineProps({
  segmentHeader: String
})
</script>

<template>
  <div style="width: 500px">
    <div class="text-white text-center font-semibold bg-fabula-green rounded uppercase inline-block 
            w-fit px-5 font-fabula-header">
      {{ segmentHeader }}
    </div>
    <div class="divider"></div>
  </div>
</template>

<style scoped>
.w-fit {
  width: 'fit-content'
}

.divider {
  border-bottom: 1px solid;
  color: #2A4A41;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: -1px;
}
</style>