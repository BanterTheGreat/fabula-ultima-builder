<script setup lang="ts">
import { state } from '@/singletons/character-state';
import Attribute from '@/components/attribute.vue';
import type { CharacterAttributes } from '@/models/character-data/character-attributes';
const attributes: CharacterAttributes = state.character.attributes;
</script>

<template>
  State is {{ attributes.Dexterity.base }}
  State is {{ attributes.Dexterity.current }}
  <table>
    <tr>
      <th></th>
      <th>Base</th>
      <th>Current</th>
    </tr>
    <tr><Attribute name = "Dexterity" v-bind:attribute="attributes.Dexterity"/></tr>
    <tr><Attribute name = "Insight" v-bind:attribute="attributes.Insight"/></tr>
    <tr><Attribute name = "Might" v-bind:attribute="attributes.Might"/></tr>
    <tr><Attribute name = "Willpower" v-bind:attribute="attributes.Willpower"/></tr>
  </table>
</template>

<style>
</style>