<script setup lang="ts">
  import attributesVue from './views/attribute/attributes.vue';
  import Bonds from './views/bonds.vue';
  import SegmentBody from './components/segment-body.vue';
  import Segment from './views/segment.vue';
  import Statistic from './views/statistics.vue';
  import { CharacterCalculator } from './models/character-calculator';
import WeaponDisplay from './components/weapon-display.vue';

  // Initial Calculating of values.
  new CharacterCalculator().Recalculate("statistics");
</script>

<template>
  <Segment title="Attributes">
    <SegmentBody>
      <attributesVue />
    </SegmentBody>
  </Segment>

  <Segment title="Bonds">
      <SegmentBody>
        <Bonds />
      </SegmentBody>
  </Segment>

  <Segment title="Battle Statistics">
      <SegmentBody>
        <Statistic />
      </SegmentBody>
  </Segment>

  <Segment title="Equipped Items">
    <SegmentBody>
      <WeaponDisplay source="character" hand="main"/>
    </SegmentBody>
  </Segment>
</template>

<style scoped></style>