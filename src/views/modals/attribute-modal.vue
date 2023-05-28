<script setup lang="ts">
import ChoiceButton from '@/components/choice-button.vue';
import type { Character } from '@/models/character';
import type { InitialAttributeChoice } from '@/models/character-builder/initial-attribute-choice';
import { CharacterUpdater } from '@/models/character-updater';
import type { Attribute } from '@/models/character/attribute';
import { DieSize } from '@/models/die-size';
import { VueFinalModal, useVfm } from 'vue-final-modal'

const props = defineProps<{
  choice: InitialAttributeChoice
}>();

let Dexterity = props.choice.dexterity ?? DieSize.D6;
let Might = props.choice.might ?? DieSize.D6;
let Insight = props.choice.insight ?? DieSize.D6;
let Willpower = props.choice.willpower ?? DieSize.D6;

function confirm() {
  // Update Choice Object.
  props.choice.dexterity = Dexterity;
  props.choice.might = Might;
  props.choice.insight = Insight;
  props.choice.willpower = Willpower;

  // Update Character.
  new CharacterUpdater().InProperty((c: Character) => c.attributes.Dexterity).UpdateProperty<Attribute, DieSize>("base", Dexterity)
  new CharacterUpdater().InProperty((c: Character) => c.attributes.Might).UpdateProperty<Attribute, DieSize>("base", Might)
  new CharacterUpdater().InProperty((c: Character) => c.attributes.Insight).UpdateProperty<Attribute, DieSize>("base", Insight)
  new CharacterUpdater().InProperty((c: Character) => c.attributes.Willpower).UpdateProperty<Attribute, DieSize>("base", Willpower)
  new CharacterUpdater().RecalculateValues();

  useVfm().closeAll(); // We should be the only modal on the screen.
}

</script>

<template>
  <VueFinalModal class="flex justify-center items-center"
                 content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2 w-1/4">
    <div class="grid grid-rows-4 grid-cols-2 gap-x-12">
      <div class="uppercase">
        Dexterity:
      </div>
      <div>
        <select v-model="Dexterity"
                class="border">
          <option></option>
          <option v-bind:value="DieSize.D6">D6</option>
          <option v-bind:value="DieSize.D8">D8</option>
          <option v-bind:value="DieSize.D10">D10</option>
          <option v-bind:value="DieSize.D12">D12</option>
        </select>
      </div>
      <div class="uppercase">
        Insight:
      </div>
      <div>
        <select v-model="Insight">
          <option></option>
          <option v-bind:value="DieSize.D6">D6</option>
          <option v-bind:value="DieSize.D8">D8</option>
          <option v-bind:value="DieSize.D10">D10</option>
          <option v-bind:value="DieSize.D12">D12</option>
        </select>
      </div>
      <div class="uppercase">
        Might:
      </div>
      <div>
        <select v-model="Might">
          <option></option>
          <option v-bind:value="DieSize.D6">D6</option>
          <option v-bind:value="DieSize.D8">D8</option>
          <option v-bind:value="DieSize.D10">D10</option>
          <option v-bind:value="DieSize.D12">D12</option>
        </select>
      </div>
      <div class="uppercase">
        Willpower:
      </div>
      <div>
        <select v-model="Willpower">
          <option></option>
          <option v-bind:value="DieSize.D6">D6</option>
          <option v-bind:value="DieSize.D8">D8</option>
          <option v-bind:value="DieSize.D10">D10</option>
          <option v-bind:value="DieSize.D12">D12</option>
        </select>
      </div>
    </div>
    <div class="border-t border-t-gray-300">
      Please follow one of the following profiles:
    </div>
    <div class="grid grid-rows-3 grid-cols-2">
      <div><b>Jack of All Trades</b></div>
      <div>D8, D8, D8, D8</div>

      <div><b>Average</b></div>
      <div>D10, D8, D8, D6</div>

      <div><b>Specialized</b></div>
      <div>D10, D10, D6, D6</div>
    </div>
    <button class="mt-1 ml-auto px-2 border rounded-lg"
            @click="confirm">
      Confirm
    </button>
  </VueFinalModal>
</template>

<style scoped></style>
  