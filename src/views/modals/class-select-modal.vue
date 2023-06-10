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
  <VueFinalModal class="flex justify-center items-center"
    content-class="flex p-4 pl-0 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg">

    <div class="flex">
      <div id="sidebar" class="bg-white flex flex-col ml-0">
        <div v-for="(classObject, key, value) in ClassData.class" class="w-full h-[200%] hover:fabula-modal-button">
          <button  :key="key" class="w-full h-full text-left transition ease-in-out hover:text-center"
            @click="() => buttonClick(key)">
            {{ classObject.name }}
          </button>
        </div>
      </div>

      <div class="class-description flex-1 p-2">
        <div v-if="selectedClass != undefined">
          <div v-for="skill in selectedClass.skills" class="py-5">
            <div>
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
  width: 70rem;
  overflow-y: scroll;
}
</style>