<script setup lang="ts">
import { state } from '@/singletons/character-state';
function updateName(): void {
  let character = state.character;
  character.general.name += "Test";
  state.character = character;
}
</script>

<template>
  <button @click="updateName">Update The Name</button>
</template>