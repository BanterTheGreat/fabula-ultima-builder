<script setup lang="ts">
import type { Character } from '@/models/character';
import type Bond from '@/models/character-data/bond';
import { CharacterUpdater } from '@/models/character-updater';
import { state } from '@/singletons/character-state';

const props = defineProps<{
  bond: Bond,
  index: number,
}>()

function updateBondName(event: any) {
  const name: string = event.target.value;
  new CharacterUpdater().InProperty((c: Character) => c.bonds).WithIndex(props.index).UpdateProperty<Bond, string>("name", name);
}

console.log(props.index);

</script>

<template>
      Bond
      <input id="trait-identity" v-model="props.bond.name" @change="updateBondName" />
</template>