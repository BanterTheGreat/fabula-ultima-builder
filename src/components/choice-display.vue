<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ChoiceType } from '@/enums/choice-type';
import type { CharacterChoice } from '@/models/character-builder/character-choice';
import ChoiceButton from './choice-button.vue';

// This will receive the choice it needs to display, and then create the according button to open modals.
const characterChoices = defineProps<{
  choices: CharacterChoice[],
  choiceLevel: number,
  characterLevel: number,
}>();

if (characterChoices.choices == undefined) {
  throw "Missing Data while displaying choice";
}

const InitialAttribute = computed(() => characterChoices.choices.filter(x => x.choice.type == ChoiceType.InitialAttributes));
const AttributeUpgrades = computed(() => characterChoices.choices.filter(x => x.choice.type == ChoiceType.UpgradeAttributes));
const Skill = computed(() => characterChoices.choices.filter(x => x.choice.type == ChoiceType.Skill));
const InitialSkills = computed(() => characterChoices.choices.filter(x => x.choice.type == ChoiceType.InitialSkills));

</script>

<template>
    <div v-for="choice in InitialAttribute">
      <ChoiceButton v-bind:character-choice="choice" v-bind:choice-level="choiceLevel" v-bind:character-level="characterLevel" />
    </div>

    <div v-for="choice in AttributeUpgrades">
      <ChoiceButton v-bind:character-choice="choice" v-bind:choice-level="choiceLevel" v-bind:character-level="characterLevel" />
    </div>

    <div v-for="choice in Skill">
      <ChoiceButton v-bind:character-choice="choice" v-bind:choice-level="choiceLevel" v-bind:character-level="characterLevel" />
    </div>

    <div v-for="choice in InitialSkills">
      <ChoiceButton v-bind:character-choice="choice" v-bind:choice-level="choiceLevel" v-bind:character-level="characterLevel" />
    </div>
</template>