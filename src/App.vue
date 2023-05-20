<script setup lang="ts">

import attributesVue from './views/attribute/attributes.vue';
import LogStateVue from './views/Log-State.vue';
import TraitInfoVue from './views/traits/Trait-info.vue';
import SegmentHeader from './components/Segment-header.vue';
import SegmentBody from './components/Segment-body.vue';
import Segment from './views/Segment.vue';

</script>

<template>
  <Segment title="Traits">
    <SegmentBody>
      testqewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
    </SegmentBody>
  </Segment>

  <Segment title="very long name for testing">
      <SegmentBody>
        hellohello
      </SegmentBody>
  </Segment>
</template>

<style scoped></style>