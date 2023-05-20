<script setup lang="ts">
  import statisticDisplay from '@/components/statistic-display.vue';
import StatisticProgressDisplay from '@/components/statistic-progress-display.vue';
  import type { Character } from '@/models/character';
</script>

<template>
  <div class="grid grid-rows-3 grid-cols-5 grid-flow-col">
    <div class="col-span-2">
        <statisticDisplay name="Defense" v-bind:selector="(c: Character) => c.statistics.defense"/>
    </div>

    <div class="col-span-2">
        <statisticDisplay name="M. Defense" v-bind:selector="(c: Character) => c.statistics.magicDefense"/>
    </div>

    <div class="col-span-2">
        <statisticDisplay name="Initiative" v-bind:selector="(c: Character) => c.statistics.initiative"/>
    </div>


    <div class="col-span-3">
      <StatisticProgressDisplay name="HP" v-bind:selector="(c: Character) => c.statistics.healthPoints" />
    </div>

    <div class="col-span-3">
      <StatisticProgressDisplay name="MP" v-bind:selector="(c: Character) => c.statistics.mindPoints" />
    </div>

    <div class="col-span-3">
      <StatisticProgressDisplay name="IP" v-bind:selector="(c: Character) => c.statistics.inventoryPoints" />
    </div>

  </div>
</template>

<style>

</style>