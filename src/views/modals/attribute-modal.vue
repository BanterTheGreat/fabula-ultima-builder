<script setup lang="ts">
import ChoiceButton from '@/components/choice-button.vue';
import type { InitialAttributeChoice } from '@/models/character-builder/initial-attribute-choice';
import { DieSize } from '@/models/die-size';
import { VueFinalModal } from 'vue-final-modal'

const props = defineProps<{
  choice: InitialAttributeChoice
}>();

let Dexterity = props.choice.dexterity ?? DieSize.D6;
let Might = props.choice.might ?? DieSize.D6;
let Insight = props.choice.insight ?? DieSize.D6;
let Willpower = props.choice.willpower ?? DieSize.D6;

function log() {
  props.choice.dexterity = Dexterity;
  props.choice.might = Might;
  props.choice.insight = Insight;
  props.choice.willpower = Willpower;
}

</script>

<template>
  <VueFinalModal class="flex justify-center items-center"
                 content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2 w-1/4">
    <div class="grid grid-rows-4 grid-cols-2 gap-x-12">
      <div class="uppercase">
        Dexterity:
      </div>
      <div>D
         <select v-model="Dexterity">
          <option></option>
          <option v-bind:value="DieSize.D6">6</option>
          <option v-bind:value="DieSize.D8">8</option>
          <option v-bind:value="DieSize.D10">10</option>
          <option v-bind:value="DieSize.D12">12</option>
        </select>
      </div>
      <div class="uppercase">
        Insight:
      </div>
      <div>D
         <select v-model="Insight">
          <option></option>
          <option v-bind:value="DieSize.D6">6</option>
          <option v-bind:value="DieSize.D8">8</option>
          <option v-bind:value="DieSize.D10">10</option>
          <option v-bind:value="DieSize.D12">12</option>
        </select>
      </div>
      <div class="uppercase">
        Might:
      </div>
      <div>D
         <select v-model="Might">
          <option></option>
          <option v-bind:value="DieSize.D6">6</option>
          <option v-bind:value="DieSize.D8">8</option>
          <option v-bind:value="DieSize.D10">10</option>
          <option v-bind:value="DieSize.D12">12</option>
        </select>
      </div>
      <div class="uppercase">
        Willpower:
      </div>
      <div>D
         <select v-model="Willpower">
          <option></option>
          <option v-bind:value="DieSize.D6">6</option>
          <option v-bind:value="DieSize.D8">8</option>
          <option v-bind:value="DieSize.D10">10</option>
          <option v-bind:value="DieSize.D12">12</option>
        </select>
      </div>
    </div>
    <button class="mt-1 ml-auto px-2 border rounded-lg" @click="log">
        Confirm
    </button>
  </VueFinalModal>
</template>
  