<script setup lang="ts">
import { RouterView } from 'vue-router'
import UpdateInfo from './views/Update-Info.vue';
import attributesVue from './views/attribute/attributes.vue';
import LogStateVue from './views/Log-State.vue';
</script>

<template>
  <LogStateVue />
  <attributesVue />
</template>

<style scoped>
</style>