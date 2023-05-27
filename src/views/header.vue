<script setup lang="ts">
import type { General } from '@/models/character/general';
import { state } from '@/singletons/state';


const characterInfo: General = state.character.general;

function openSwitchCharacterModal() {
  throw "IMPLEMENT ME"
}

</script>

<template>
<header class="bg-fabula-header-green text-white h-12">
  <nav class="x py-3 p-5">
    <div class="flex flex-row">
      <div class="font-center">
        *Menu*
      </div>
      <div class="font-center pl-4">
        <button class="a hover:text-cyan-600" @click="openSwitchCharacterModal()">Switch Character</button>
      </div>
      <div class="font-center pl-2">
        |
      </div>
      <div class="font-center pl-2">
        {{ characterInfo.name }} - Level {{ characterInfo.level }}
      </div>
    </div>
  </nav>
</header>
</template>

<style>

</style>