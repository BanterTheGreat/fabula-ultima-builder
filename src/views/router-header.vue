<script setup lang="ts">

import type { RouterTab } from '@/models/character/router-tab';
import { state } from '@/singletons/state';

let views: Array<RouterTab> = [];

state.character.classes.forEach(characterClass => {
    characterClass.views.forEach(classView => {
        views.push(classView);
    });
});
console.log(views);

</script>

<template>
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

                <div class="px-2">
                  <router-link to="/the-arcana">The Arcana</router-link>
                </div>
              </div>
            </nav>
          </header>
</template>