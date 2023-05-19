<script setup lang="ts">
import type { Character } from '@/models/character';
import type { Trait } from '@/models/character-data/traits.js';
import { CharacterUpdater } from '@/models/character-updater';
import { state } from '@/singletons/character-state'

type TraitKey = keyof typeof state.character.traits

const props = defineProps({
  traitName: String
})

const traitName = props.traitName as TraitKey

let TraitInput: string = state.character.traits[traitName]

function updateTrait(event: any) {
  new CharacterUpdater().InProperty((c: Character) => c.traits).UpdatePropertyKeyWithValue(traitName, event.target.value);
}

</script>

<template>
  <div>
    <label>
      {{ traitName }}:
      <input id="trait-identity" v-model="TraitInput" @change="updateTrait" />
    </label>
  </div>
</template>
