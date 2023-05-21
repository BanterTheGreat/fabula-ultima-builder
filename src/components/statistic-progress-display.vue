<script setup lang="ts">
import type { CalculatedNumberMaximum } from '@/models/calculated-number-maximum';
import type { Character } from '@/models/character';
import { state } from '@/singletons/state';

const props = defineProps<{
  selector: (c: Character) => CalculatedNumberMaximum,
  name: string,
}>()

const statistic = props.selector(state.character);
</script>

<template>
  {{ name }} {{ statistic.calculatedValue }}/{{ statistic.calculatedValue }}
</template>