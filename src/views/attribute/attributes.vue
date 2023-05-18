<script setup lang="ts">
import { state } from '@/singletons/character-state';
import Attribute from '@/components/attribute.vue';
import type { CharacterAttributes } from '@/models/character-data/character-attributes';
const attributes: CharacterAttributes = state.character.attributes;
</script>

<template>
  <table>
    <tr>
      <th></th>
      <th>Base</th>
      <th>Current</th>
    </tr>
    <tr><Attribute name = "Dexterity" v-bind:selector="(a: CharacterAttributes) => attributes.Dexterity"/></tr>
    <tr><Attribute name = "Insight" v-bind:selector="(a: CharacterAttributes) => attributes.Insight"/></tr>
    <tr><Attribute name = "Might" v-bind:selector="(a: CharacterAttributes) => attributes.Might"/></tr>
    <tr><Attribute name = "Willpower" v-bind:selector="(a: CharacterAttributes) => attributes.Willpower"/></tr>
  </table>
</template>

<style>
</style>