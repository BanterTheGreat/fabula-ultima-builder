<script setup lang="ts">
import { WeaponData } from '@/data/weapon-data';
import type { Weapon } from '@/models/equipment/weapon';
import { state } from '@/singletons/state';
import { WeaponId } from '@/enums/weapon-id';

const props = defineProps<{
  source: "character" | "data",
  hand: "main" | "off",
}>();

if (props.source == "character") {
  let equippedweapon = state.character.equipment.equippedweapon;
  let weapon: Weapon;

  if (equippedweapon == null) {
    WeaponData.find(x => x.id == WeaponId.)
  }

  if (equippedweapon?.homebrew) {

  }

  weapon = WeaponData.find(x => x.id == WeaponId.Unarmed) ?? ;
  
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