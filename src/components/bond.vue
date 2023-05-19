<script setup lang="ts">
import type Bond from '@/models/character-data/bond';
import { state } from '@/singletons/character-state';

const props = defineProps<{
  bond: Bond,
  index: number,
}>()

function updateBondName(event: any) {
  const text: string = event.target.value;
  state.updateCharacterArrayPropertyValue<Bond, Bond, string>((c) => c.bonds, props.index, (bond) => bond, "name", text);
}

console.log(props.index);

</script>

<template>
      Bond
      <input id="trait-identity" v-model="props.bond.name" @change="updateBondName" />
</template>