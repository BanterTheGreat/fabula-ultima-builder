<script setup lang="ts">
import { Attribute } from '@/models/character-data/attribute';
import { DieSize } from '@/models/die-size';
import { state } from '@/singletons/character-state';
import { ref } from 'vue';
  const props = defineProps({
    name: String,
    attribute: Attribute,
  });
  const base = ref(props.attribute?.base);
  const current = props.attribute?.current;

  function onChange(event: any) {
    if (!!props.attribute) {
      props.attribute.base = event.target.value;
      return;
    }

    throw "Missing attribute while updating."
  }
</script>

<template>
  base = {{ base }}
  <td>{{ name }}</td>
  <td>
    D<select v-model="base" @change="event => onChange(event)">
      <option></option>
      <option v-bind:value="DieSize.D6">6</option>
      <option v-bind:value="DieSize.D8">8</option>  
      <option v-bind:value="DieSize.D10">10</option>
      <option v-bind:value="DieSize.D12">12</option>
    </select>
  </td>
  <td>D{{ current }}</td>
</template>