<script setup lang="ts">
import type { CalculatedNumberWithMaximum } from '@/models/calculated-number-with-maximum';
import type { Character } from '@/models/character';
import { state } from '@/singletons/state';

const props = defineProps<{
  selector: (c: Character) => CalculatedNumberWithMaximum,
  name: string,
}>()

const statistic = props.selector(state.character);
</script>

<template>
  {{ name }} {{ statistic.calculatedValue }}/{{ statistic.calculatedMaxValue }}
</template>