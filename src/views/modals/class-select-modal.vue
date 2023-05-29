<script setup lang="ts">
  import { VueFinalModal } from 'vue-final-modal'

  

</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2">

    <div class="grid grid-cols-4">
      <div id="sidebar" class="a bg-white">
        <div class="text-center">
          Weaponmaster <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />FUCK <br />
        </div>
      </div>

      <div class="text-center class-description">
        Test
      </div>
    </div>

    <button class="mt-1 ml-auto px-2 border rounded-lg" @click="emit('confirm')">
      Confirm
    </button>
  </VueFinalModal>
</template>

<style scoped>
  #sidebar {
    /* position: fixed; */
    width: 10rem;
    overflow-y: scroll;
    max-height: 25rem;
    /* top: 3rem; */
    /* bottom: 0; */
  }

  .class-description {
    width: 30rem;
  }
</style>