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
  <div class=" grid grid-cols-8 grid-rows-6 grid-flow-col">
    <!-- left side start -->
    <div class="col-span-2 row-span-1 mx-1">
      <Segment title="Personal info">
        <SegmentBody>
          Segment for personal info
        </SegmentBody>
      </Segment>
    </div>
    <div class="col-span-2 row-span-1 mx-1">
      <Segment title="Traits">
        <SegmentBody>
          <TraitInfo />
        </SegmentBody>
      </Segment>
    </div>
    <div class="col-span-2 row-span-2 mx-1">
      <Segment title="Bonds">
        <SegmentBody>
          <Bonds />
        </SegmentBody>
      </Segment>
    </div>
    <div class="col-span-2 row-span-2 mx-1">
      <Segment title="Attributes">
        <SegmentBody>
          <attributesVue />
        </SegmentBody>
      </Segment>
    </div>
    <!-- left side end -->

    <!-- right side start -->
    <div class="col-span-6 row-span-2 mx-1">
      <Segment title="Battle Statistics">
        <SegmentBody>
          <Statistic />
        </SegmentBody>
      </Segment>
    </div>
    <div class="col-span-6 row-span-4 mx-1">
      <Segment title="Battle Statistics">
        <SegmentBody>
          <Statistic />
        </SegmentBody>
      </Segment>
    </div>
    <!-- right side end -->
  </div>
</template>

<style scoped></style>