<script setup lang="ts">
import SegmentBody from '@/components/segment-body.vue';
import ChoiceDisplay from '@/components/choice-display.vue';
import { state } from '@/singletons/state';
</script>

<template>
    <div id="sidebar">
      <div class="text-center pt-2 mx-2">
        <div v-for="choice in state.character.progression" class="my-5">
            <SegmentBody>
              <ChoiceDisplay />
            </SegmentBody>
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