<script setup lang="ts">
import SegmentBody from './segment-body.vue';
import { computed } from '@vue/reactivity';
import { ChoiceType } from '@/enums/choice-type';
import type { CharacterChoice } from '@/models/character-builder/character-choice';

// This will receive the choice it needs to display, and then create the according button to open modals.
const characterChoices = defineProps<{
  choices: CharacterChoice[]
}>();

if (characterChoices.choices == undefined) {
  throw "Missing Data while displaying choice";
}

const InitialAttribute = computed(() => characterChoices.choices.filter(x => x.choice.type == ChoiceType.InitialAttributes));
const AttributeUpgrades = computed(() => characterChoices.choices.filter(x => x.choice.type == ChoiceType.UpgradeAttributes));
const Skill = computed(() => characterChoices.choices.filter(x => x.choice.type == ChoiceType.Skill));
const InitialSkills = computed(() => characterChoices.choices.filter(x => x.choice.type == ChoiceType.InitialAttributes));

</script>

<template>
  <SegmentBody>
    <div v-for="choice in characterChoices.choices">
      Test;
    </div>
  </SegmentBody>
</template>

<style></style>
