<script setup lang="ts">
import type { CalculatedNumber } from '@/models/calculated-number.js';
import type { Character } from '@/models/character';
import { state } from '@/singletons/state';

const props = defineProps<{
  selector: (c: Character) => CalculatedNumber,
  name: string,
}>()

const statistic = props.selector(state.character);
</script>

<template>
  <div class="grid grid-cols-4">
    <div class="col-span-3">
    {{ name }}
    </div>

    <div>
    {{ statistic.calculatedValue }}
    </div>
  </div>
</template>