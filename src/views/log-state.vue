<script setup lang="ts">
import { state } from '@/singletons/state.js';
function logState() {
  console.log(state);
}
</script>

<template>
  <button @click="logState">Log the State</button>
</template>