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
  <div class=" grid grid-cols-8 grid-rows-3 grid-flow-col">
    <div class="col-span-4 mx-1">
      <Segment title="Traits">
        <SegmentBody>
          <TraitInfo />
        </SegmentBody>
      </Segment>
    </div>
    <div class="col-span-4 mx-1">
      <Segment title="Attributes">
        <SegmentBody>
          <attributesVue />
        </SegmentBody>
      </Segment>
    </div>
    <div class="col-span-4 mx-1">
      <Segment title="Bonds">
        <SegmentBody>
          <Bonds />
        </SegmentBody>
      </Segment>
    </div>
    <div class="col-span-4 mx-1">
      <Segment title="Battle Statistics">
        <SegmentBody>
          <Statistic />
        </SegmentBody>
      </Segment>
    </div>
  </div>
</template>

<style scoped></style>