<script setup lang="ts">
import ChoiceDisplay from '@/components/choice-display.vue';
import { state } from '@/singletons/state';
</script>

<template>
    <div id="sidebar">
      <div class="text-center mx-5">
        <div v-for="(value, key, index) in state.character.progression" class="my-5">
          <div> Level {{ key }}</div>
          <ChoiceDisplay v-bind:choices="value" v-bind:choice-level="key" v-bind:character-level="state.character.general.level" />
        </div>
      </div>
    </div>
</template>

<style scoped>

#sidebar {
    position: fixed;
    width: 22rem;
    overflow-y: scroll;
    top: 3rem;
    bottom: 0;
}
</style>