<script setup lang="ts">
import { state } from '@/singletons/character-state'

type TraitKey = keyof typeof state.character.traits

const props = defineProps({
  traitName: String
})

const traitName = props.traitName as TraitKey

let TraitInput: string = state.character.traits[traitName]
</script>

<template>
  <div>
    <label>
      {{ traitName }}:
      <input id="trait-identity" v-model="TraitInput" />
    </label>
  </div>
</template>
