<script setup lang="ts">
import type { Character } from '@/models/character';
import type { Trait } from '@/models/character-data/traits.js';
import { state } from '@/singletons/character-state'

type TraitKey = keyof typeof state.character.traits

const props = defineProps({
  traitName: String
})

const traitName = props.traitName as TraitKey

let TraitInput: string = state.character.traits[traitName]

function updateTrait(event: any) {
  state.UpdateCharacter().InProperty<Character, Trait>((c) => c.traits).UpdatePropertyKeyWithValue(traitName, event.target.value).Run();
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
