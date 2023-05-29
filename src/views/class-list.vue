<script setup lang="ts">
//todo this file is worthless after the character builder menu is ready, remove after

import ClassSelect from '@/components/class-select.vue';
import ClassJson from '@/data/json/class.json';



let ClassIds = Object.keys(ClassJson);
let ClassList: Record<string, string> = {};

console.log(ClassIds);

for (const classId of ClassIds) {
    ClassList[classId] = ClassJson[classId]["name"] as string;
}
</script>

<template>
  <ClassSelect :index=0 :classList=ClassList></ClassSelect>
  <ClassSelect :index=1 :classList=ClassList></ClassSelect>
  <ClassSelect :index=2 :classList=ClassList></ClassSelect>
  <ClassSelect :index=3 :classList=ClassList></ClassSelect>
  <ClassSelect :index=4 :classList=ClassList></ClassSelect>
  <ClassSelect :index=5 :classList=ClassList></ClassSelect>
  <ClassSelect :index=6 :classList=ClassList></ClassSelect>
  <ClassSelect :index=7 :classList=ClassList></ClassSelect>
</template>