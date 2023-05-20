<script setup lang="ts">
  import attributesVue from './views/attribute/attributes.vue';
  import Bonds from './views/bonds.vue';
  import SegmentBody from './components/Segment-body.vue';
  import Segment from './views/Segment.vue';
  import Statistic from './views/statistics.vue';
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

  <Segment title="Statistics">
      <SegmentBody>
        <Statistic />
      </SegmentBody>
  </Segment>
</template>

<style scoped></style>