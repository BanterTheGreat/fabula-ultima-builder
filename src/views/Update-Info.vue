<script lang="ts">
  import { state } from '@/singletons/character-state';

  export default {
    data() {
      return {
        state,
      
      }
    },
    methods: {
      updateName() {
        let character = state.character;
        character.general.name += "Test";

        state.character = character;
      }
    }
  }
</script>

<template>
  <button @click="updateName">Update The Name</button>
</template>