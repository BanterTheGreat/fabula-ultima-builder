<script setup lang="ts">
import { state } from '@/singletons/state.js';
import type Bond from '@/models/character-data/bond';
import { CharacterUpdater } from '@/models/character-updater';
import type { Character } from '@/models/character';
import BondDisplayVue from '@/components/bond-display.vue';
import { Emotion } from '@/enums/emotion';

function AddBond() {
  let length = bondAmount();
  if (length < 6) {
    new CharacterUpdater()
      .InProperty((c: Character) => c.bonds)
      .UpdateIndex<Bond>(length, { name: "", admirationEmotion: Emotion.None, loyaltyEmotion: Emotion.None, affectionEmotion: Emotion.None })
  }
}

const bondAmount = () => state.character.bonds.length;
</script>

<template>
  <ul v-for="(bond, index) in state.character.bonds">
    <BondDisplayVue v-bind:bond="bond" v-bind:index="index"/>
  </ul>
  <button v-if="bondAmount() < 6" @click="AddBond" class="bg-black text-white">+</button>
</template>