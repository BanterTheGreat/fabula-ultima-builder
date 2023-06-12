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
import characterBuilderVue from './views/character-builder.vue';
import { ModalsContainer } from 'vue-final-modal';

import router from './router';

// Initial Calculating of values.
new CharacterCalculator().Recalculate("statistics");
</script>

<template>
  <!-- Support Modals -->
  <ModalsContainer />

  <!-- Header -->
  <HeaderVue />

  <characterBuilderVue />

  <!-- Grid. -->
  <div class="grid grid-cols-8 grid-rows-6 grid-flow-col auto-rows-auto test">
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
        <!-- removed the padding on this segment to make the header look nice -->
        <SegmentBody style="padding: 0 !important;">
          <header class="bg-fabula-header-green text-white ">
            <nav class="x py-3 p-5">
              <div class="flex flex-row">

                <!-- todo dynamically add tabs based on selected classes "views" property -->
                <!-- todo maybe move this into it's own view, idk tho -->
                <!-- todo needs better styling -->
                <!-- todo write a home page with explanation -->

                <div class="px-2">
                  <router-link to="/">Home</router-link>
                </div>

                <div class="px-2">
                  <router-link to="/about">About</router-link>
                </div>
              </div>


            </nav>
          </header>
          
          <div class="p-[1%]">
            <router-view></router-view>
          </div>

        </SegmentBody>
      </Segment>
    </div>
    <!-- right side end -->
  </div>
</template>

<style scoped>
.test {
  margin-left: 22rem;
}
</style>