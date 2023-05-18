<script setup lang="ts">
import { Attribute } from '@/models/character-data/attribute';
import type { CharacterAttributes } from '@/models/character-data/character-attributes';
import { DieSize } from '@/models/die-size';
import { state } from '@/singletons/character-state';
import { ref } from 'vue';

  function onChange(event: any) {
      if (attribute != null) {
        attribute.base = event.target.value;
        return;
      }
    }

  const props = defineProps<{
    name: string,
    selector: (a: CharacterAttributes) => Attribute,
  }>();

  const attribute = props.selector(state.character.attributes);

  if (attribute == null) {
    throw "Error getting Attribute from Selector";
  }

  const baseValue = attribute.base;
</script>

<template>
  <td>{{ name }}</td>
  <td>
    D<select v-model="baseValue" @change="event => onChange(event)">
      <option></option>
      <option v-bind:value="DieSize.D6">6</option>
      <option v-bind:value="DieSize.D8">8</option>  
      <option v-bind:value="DieSize.D10">10</option>
      <option v-bind:value="DieSize.D12">12</option>
    </select>
  </td>
  <td>D{{ attribute.current }}</td>
</template>