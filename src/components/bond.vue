<script setup lang="ts">
import type { Character } from '@/models/character';
import  { Emotions } from '@/models/character-data/bond';
import type Bond from '@/models/character-data/bond';
import { CharacterUpdater } from '@/models/character-updater';
import { state } from '@/singletons/character-state';
import { ref } from 'vue';

const props = defineProps<{
  bond: Bond,
  index: number,
}>()

function updateBondName(event: any) {
  const name: string = event.target.value;
  new CharacterUpdater().InProperty((c: Character) => c.bonds).WithIndex(props.index).UpdateProperty<Bond, string>("name", name);
}

const bondEmotions = [props.bond.admirationEmotion, props.bond.affectionEmotion, props.bond.loyaltyEmotion].filter(x => x != Emotions.None);
const bondEmotionsRef = ref(bondEmotions);

function bondHasEmotion(emotion: Emotions): boolean {
  return bondEmotions.includes(emotion);
}

function updateEmotions(event: any) {
  console.log(bondEmotionsRef.value);
}

</script>

<template>
      Bond
      <input id="trait-identity" v-model="props.bond.name" @change="updateBondName" />

      <input type="checkbox" id="checkbox" v-bind:checked="bondHasEmotion(Emotions.Admiration)" v-bind:value="Emotions.Admiration" v-model="bondEmotionsRef" @change="updateEmotions" />
      <input type="checkbox" id="checkbox" v-bind:value="Emotions.Inferiority" v-model="bondEmotionsRef" @change="updateEmotions" />

      <input type="checkbox" id="checkbox" v-bind:value="Emotions.Loyalty" v-model="bondEmotionsRef" @change="updateEmotions" />
      <input type="checkbox" id="checkbox" v-bind:value="Emotions.Mistrust" v-model="bondEmotionsRef" @change="updateEmotions" />

      <input type="checkbox" id="checkbox" v-bind:value="Emotions.Affection" v-model="bondEmotionsRef" @change="updateEmotions" />
      <input type="checkbox" id="checkbox" v-bind:value="Emotions.Hatred" v-model="bondEmotionsRef" @change="updateEmotions" />
</template>