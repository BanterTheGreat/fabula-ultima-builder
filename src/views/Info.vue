<script setup lang="ts">
  import { state } from '@/singletons/character-state';
  const generalinfo = state.character.general;
</script>

<template>
  <p>  Name: {{ generalinfo.name }}</p>
  <p>  Pronouns: {{ generalinfo.pronouns }}</p>
  <p>  Zenit: {{ generalinfo.zenit }}</p>
</template>