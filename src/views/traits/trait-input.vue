<script setup lang="ts">
import type { Character } from '@/models/character';
import { CharacterUpdater } from '@/models/character-updater';
import { state } from '@/singletons/state.js'

type TraitKey = keyof typeof state.character.traits

const props = defineProps({
  traitName: String,
  colspanLabel: Number,
  colspanInput: Number,
})

const traitName = props.traitName as TraitKey
const colspanLabel = 'col-span-' + props.colspanLabel;
const colspanInput = 'col-span-' + props.colspanInput;

let TraitInput: string = state.character.traits[traitName]

function updateTrait(event: any) {
  new CharacterUpdater()
    .InProperty((c: Character) => c.traits)
    .UpdateProperty(traitName, event.target.value);
}

</script>

<template>
  <div class="text-center" :class=colspanLabel>
    {{ traitName }}:
  </div>
  <div :class=colspanInput>
    <input class="w-full" id="trait-identity" v-model="TraitInput" @change="updateTrait" />
  </div>
</template>
