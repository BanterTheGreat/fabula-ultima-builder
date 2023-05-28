<script setup lang="ts">
import type { CharacterChoice } from '@/models/character-builder/character-choice';
import SegmentBody from './segment-body.vue';
import { ChoiceType } from '@/enums/choice-type';
import { VueFinalModal, useModal } from 'vue-final-modal';

  let defaultButtonText: string;
  let modalToOpen: any;

  const props = defineProps<{
    choice: CharacterChoice,
  }>();

  // Depending on the Type, we will load the proper model and use it to edit the choice.
  switch(props.choice.choice.type) {
    case ChoiceType.InitialAttributes:
      defaultButtonText = "Choose your Attribute die size";
      break;
    case ChoiceType.UpgradeAttributes:
      defaultButtonText = "Increase Attribute die size";
      break;
    case ChoiceType.Spell:
      defaultButtonText = "Choose a Spell";
      break;
    case ChoiceType.Skill:
      defaultButtonText = "Choose a Skill";
      break;
    case ChoiceType.InitialSkills:
      defaultButtonText = "Choose your initial Skills";
      break;
  }

  
const { open, close } = useModal({
      component: VueFinalModal,
      attrs: {
        title: "Test!",
        onBeforeClose() {
          console.log("Closing?")
        }
      },
      slots: {
        default: "Nobody Came"
      }
    })
</script>

<template>
  <SegmentBody>
    <button @click="() => open()"> {{defaultButtonText}} </button>
  </SegmentBody>
</template>

<style scoped>
button {
  width:max-content
} 

</style>