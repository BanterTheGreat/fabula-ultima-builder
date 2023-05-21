<script setup lang="ts">
import { WeaponData } from '@/data/weapon-data';
import { state } from '@/singletons/state';

const props = defineProps<{
  source: "character" | "data",
  hand: "main" | "off",
}>();

if (props.source == "character") {
  let weaponId = state.character.equipment.equippedweapon?.id
  let weapon = WeaponData.find(x => x.id == weaponId);
}

</script>

<template>
<div class="grid grid-rows-2 grid-cols-7">
  <div class="row-span-2 col-span-2">
    <!-- Image -->
    <!-- We need a method that converts a weapon with a certain Id to the specific filename. -->
    <img src="@/assets/rapier.webp" alt="rapier">
  </div>

  <div class=""

</div>
</template>