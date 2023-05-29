<script setup lang="ts">
  import { ClassData } from '@/data/data';
  import type { ClassJson } from '@/models/class-json';
import { ref, type Ref } from 'vue';
  import { VueFinalModal } from 'vue-final-modal'
import TextWithBold from '../text-with-bold.vue';

  let selectedClassId: string = "";
  let selectedClass: Ref<ClassJson | undefined> = ref(undefined);
  
  function buttonClick(key: string) {
    selectedClassId = key;
    selectedClass.value = ClassData.class[selectedClassId];
    console.log(selectedClass)
  }
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2">

    <div class="grid grid-cols-4">
      <div id="sidebar" class="bg-white flex flex-col">
        <button v-for="(classObject, key, value) in ClassData.class" :key="key" class="text-center py-1" @click="() => buttonClick(key)">
          {{ classObject.name }}
        </button>
      </div>

      <div class="class-description">
        <div v-if="selectedClass != undefined">
          <div v-for="skill in selectedClass.skills">
            <div class="pt-5">
              {{ skill.name }} {{ skill.maxInvestment }}
            </div>

            <div class="font-fabula-header">
              <TextWithBold v-bind:style-class="'font-fabula-header'" v-bind:text="skill.description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>

<style scoped>
  #sidebar {
    /* position: fixed; */
    width: 10rem;
    overflow-y: scroll;
    height: 40rem;
  }

  .class-description {
    width: 40rem;
    overflow-y: scroll;
  }
</style>