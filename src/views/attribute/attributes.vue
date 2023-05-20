<script setup lang="ts">
import Attribute from '@/components/attribute.vue';
</script>

<template>
  <table>
    <tr>
      <th></th>
      <th class="uppercase">Base</th>
      <th class="uppercase">Current</th>
    </tr>
    <tr><Attribute name = "Dexterity" v-bind:selector="(char) => char.attributes.Dexterity"/></tr>
    <tr><Attribute name = "Insight" v-bind:selector="(char) => char.attributes.Insight"/></tr>
    <tr><Attribute name = "Might" v-bind:selector="(char) => char.attributes.Might"/></tr>
    <tr><Attribute name = "Willpower" v-bind:selector="(char) => char.attributes.Willpower"/></tr>
  </table>
</template>

<style>
</style>