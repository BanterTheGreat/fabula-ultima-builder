<script setup lang="ts">
import ClassSelect from '@/components/class-select.vue';
import ClassJson from '@/data/json/class.json';



let ClassIds = Object.keys(ClassJson.Classes);
let ClassList: Record<string, string> = {};

console.log(ClassIds);

for (const classId of ClassIds) {
    ClassList[classId] = ClassJson["Classes"][classId]["Name"];
}

console.log(ClassList);

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