<script setup lang="ts">
import { state } from '@/singletons/state.js';
function updateName(): void {
  let character = state.character;
  character.general.name += "Test";
  // state.character = character;
}
</script>

<template>
  <button @click="updateName">Update The Name</button>
</template>