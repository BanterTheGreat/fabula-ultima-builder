<script setup lang="ts">
import type { Character } from '@/models/character';
import { Attribute } from '@/models/character/attribute';
import { CharacterUpdater } from '@/models/character-updater';
import { DieSize } from '@/models/die-size';
import { state } from '@/singletons/state';

  const props = defineProps<{
    name: string,
    selector: (a: Character) => Attribute,
  }>();

  const attribute = props.selector(state.character);

  if (attribute == null) {
    throw "Error getting Attribute from Selector";
  }
</script>

<template>
  <td class="uppercase" >{{ name }}</td>
  <td>D{{ attribute.base }}</td>
  <td>D{{ attribute.current }}</td>
</template>