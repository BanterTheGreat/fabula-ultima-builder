<script setup lang="ts">
import type { Character } from '@/models/character';
import { Attribute } from '@/models/character-data/attribute';
import { DieSize } from '@/models/die-size';
import { state } from '@/singletons/character-state';

  function onChange(event: any) {
      if (attribute != null) {
        state.UpdateCharacter().InProperty<Character, Attribute>(props.selector).UpdatePropertyKeyWithValue<Attribute, DieSize>("base", event.target.value).Run();
        return;
      }
    }

  const props = defineProps<{
    name: string,
    selector: (a: Character) => Attribute,
  }>();

  const attribute = props.selector(state.character);

  if (attribute == null) {
    throw "Error getting Attribute from Selector";
  }

  // We only display this value in our own Select. As such we don't need to actively update it past the first value.
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