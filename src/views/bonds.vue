<script setup lang="ts">
import { state } from '@/singletons/character-state';
import BondVue from '@/components/bond.vue';
import type Bond from '@/models/character-data/bond';
import { Emotions } from '@/models/character-data/bond';
import { CharacterUpdater } from '@/models/character-updater';
import type { Character } from '@/models/character';

function AddBond() {
  let length = bondAmount();
  if (length < 6) {
    new CharacterUpdater()
      .InProperty((c: Character) => c.bonds)
      .UpdateIndex<Bond>(length, { name: "", admirationEmotion: Emotions.None, loyaltyEmotion: Emotions.None, affectionEmotion: Emotions.None })
  }
}

const bondAmount = () => state.character.bonds.length;
</script>

<template>
  <ul v-for="(bond, index) in state.character.bonds">
    <BondVue v-bind:bond="bond" v-bind:index="index"/>
  </ul>
  <button v-if="bondAmount() < 6" @click="AddBond" class="bg-black text-white">+</button>
</template>