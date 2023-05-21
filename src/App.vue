<script setup lang="ts">
  import { CharacterCalculator } from './models/character-calculator';

  import SegmentBody from './components/segment-body.vue';

  import attributesVue from './views/attribute/attributes.vue';
  import Bonds from './views/bonds.vue';
  import Segment from './views/segment.vue';
  import Statistic from './views/statistics.vue';
  import TraitInfo from './views/traits/trait-info.vue';



  // Initial Calculating of values.
  new CharacterCalculator().Recalculate("statistics");
</script>

<template>
  <Segment title="Traits">
    <SegmentBody>
      <TraitInfo />
    </SegmentBody>
  </Segment>

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
</template>

<style scoped></style>