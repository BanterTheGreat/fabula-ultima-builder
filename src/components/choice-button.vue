<script setup lang="ts">
import type { CharacterChoice } from '@/models/character-builder/character-choice';
import SegmentBody from './segment-body.vue';
import { ChoiceType } from '@/enums/choice-type';
import { useModal } from 'vue-final-modal';

import ModalTest from '@/views/modals/attribute-modal.vue';

import { CharacterBuilderButtonHelper } from '@/helpers/character-builder-button-helper';

import { computed } from '@vue/reactivity';
import type { InitialAttributeChoice } from '@/models/character-builder/initial-attribute-choice';

  let defaultButtonText: string;
  let modalToOpen: any;

  const props = defineProps<{
    characterChoice: CharacterChoice,
    choiceLevel: number,
    characterLevel: number,
  }>();

  let buttonText = computed(() => getButtonText());

  // Depending on the Type, we will load the proper modal and use it to edit the choice.
  function getButtonText() {
    const choiceData = props.characterChoice?.choice;

    switch(choiceData.type) {
    case ChoiceType.InitialAttributes:
      return CharacterBuilderButtonHelper.GetInitialAttributeButtonText(choiceData as InitialAttributeChoice);
    case ChoiceType.UpgradeAttributes:
      return "Increase Attribute die size";
    case ChoiceType.Spell:
      return "Choose a Spell";
    case ChoiceType.Skill:
      return "Choose a Skill";
    case ChoiceType.InitialSkills:
      return "Choose your initial Skills";
    }
  }

  function getButtonStyle(): string {
    if (props.choiceLevel > props.characterLevel) {
      return "border-gray-600 text-gray-600";
    }

    return CharacterBuilderButtonHelper.GetButtonCss(props.characterChoice?.choice);
  }

  function openModal() {
    const { open, close } = useModal({
        component: ModalTest,
        attrs: {
          choice: props.characterChoice.choice as any,
        },
      })
    open();    
  }

</script>

<template>
  <SegmentBody v-bind:class="getButtonStyle()">
    <button @click="() => openModal()"> {{getButtonText()}} </button>
  </SegmentBody>
</template>

<style scoped>
button {
  width:max-content
} 

</style>