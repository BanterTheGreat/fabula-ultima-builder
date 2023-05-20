<script setup lang="ts">
  import statisticDisplay from '@/components/statistic-display.vue';
import StatisticProgressDisplay from '@/components/statistic-progress-display.vue';
  import type { Character } from '@/models/character';
</script>

<template>
  <ol>
    <li><statisticDisplay name="Defense" v-bind:selector="(c: Character) => c.statistics.defense"/></li>
    <li><statisticDisplay name="Magic Defense" v-bind:selector="(c: Character) => c.statistics.magicDefense"/></li>
    <li><statisticDisplay name="Initiative" v-bind:selector="(c: Character) => c.statistics.initiative"/></li>
  </ol>
  <ol>
    <li><StatisticProgressDisplay name="HP" v-bind:selector="(c: Character) => c.statistics.healthPoints" /></li>
    <li><StatisticProgressDisplay name="MP" v-bind:selector="(c: Character) => c.statistics.mindPoints" /></li>
    <li><StatisticProgressDisplay name="IP" v-bind:selector="(c: Character) => c.statistics.inventoryPoints" /></li>
  </ol>
</template>

<style>

</style>