<script setup lang="ts">
import { CharacterCalculator } from './models/character-calculator';

import SegmentBody from './components/segment-body.vue';

import HeaderVue from './views/header.vue';
import attributesVue from './views/attribute/attributes.vue';
import Bonds from './views/bonds.vue';
import Segment from './views/segment.vue';
import Statistic from './views/statistics.vue';
import TraitInfo from './views/traits/trait-info.vue';
import textWithBoldVue from './views/text-with-bold.vue';
import ClassList from './views/class-list.vue';

// Initial Calculating of values.
new CharacterCalculator().Recalculate("statistics");
</script>

<template>
  
  <!-- Header -->
  <HeaderVue />
  <!-- Grid. -->
  <div class=" grid grid-cols-8 grid-rows-6 grid-flow-col auto-rows-auto">
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
      <Segment title="Big info panel">
        <SegmentBody>
          <textWithBoldVue text="You weave magical energy and protect the targets from the fury of the elements. \n Choose a damage type: __air__, __bolt__, __earth__, __fire__, __water__ or __ice__. Until this spell ends, each target gains Resistance against the chosen damage type." />
          <ClassList/>
        </SegmentBody>
      </Segment>
    </div>
    <!-- right side end -->
  </div>

</template>

<style scoped></style>