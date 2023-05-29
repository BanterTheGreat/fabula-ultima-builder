<script setup lang="ts">
import AttributeDisplayVue from '@/components/attribute-display.vue';
</script>

<template>
  <table>
    <tr>
      <th></th>
      <th class="uppercase">Base</th>
      <th class="uppercase">Current</th>
    </tr>
    <tr><AttributeDisplayVue name = "Dexterity" v-bind:selector="(char) => char.attributes.Dexterity"/></tr>
    <tr><AttributeDisplayVue name = "Insight" v-bind:selector="(char) => char.attributes.Insight"/></tr>
    <tr><AttributeDisplayVue name = "Might" v-bind:selector="(char) => char.attributes.Might"/></tr>
    <tr><AttributeDisplayVue name = "Willpower" v-bind:selector="(char) => char.attributes.Willpower"/></tr>
  </table>
</template>

<style>

</style>