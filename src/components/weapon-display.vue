<script setup lang="ts">
import { StaticWeaponData } from '@/data/static-weapon-data';
import type { Weapon } from '@/models/equipment/weapon';
import { state } from '@/singletons/state';
import { WeaponId } from '@/enums/weapon-id';
import { computed, type ComputedRef } from '@vue/reactivity';
import { FormatAccuracy, FormatCost, FormatDamage, FormatHands, FormatQuality, FormatRange } from '@/helpers/weapon-formatter';

const props = defineProps<{
  source: "character" | "data",
  hand: "main" | "off",
  id?: WeaponId,
}>();

const weapon: ComputedRef<Weapon> = computed(() => GetWeapon())
const weaponCost = computed(() => weapon.value.cost == 0 ? "-" : weapon.value.cost + "z");

function GetWeapon(): Weapon {
  if (props.source == "character") {
    let equippedweapon = state.character.equipment.equippedweapon;

    if (equippedweapon == null) {
      return WeaponData[WeaponId.Unarmed];
    }

    if (equippedweapon?.homebrew) {
      // Grab it from the homebrew section instead.
    }

    return WeaponData[equippedweapon.id];
  }

  // If this returns unarmed, it means we wanted to grab from the data but without an ID to grab it with.
  return WeaponData[props.id ?? WeaponId.Unarmed];
}

</script>

<template>
<div class="grid grid-rows-2 grid-cols-7">
  <div class="row-span-2 bg-white items-center justify-center flex border-fabula-green border-r-2">
    <!-- Image -->
    <!-- We need a method that converts a weapon with a certain Id to the specific filename. -->
    <img id="weapon_image" class="object-fill" src="@/assets/rapier.webp" alt="rapier">
  </div>

  <div class="font-bold col-span-2 items-center justify-center flex font-fabula-header">
    {{ weapon.name }}
  </div>

  <div class="items-center justify-center flex font-fabula-header">
    {{ weaponCost }}
  </div>

  <div class="font-bold items-center justify-center flex font-fabula-header">
    {{ FormatAccuracy(weapon) }}
  </div>

  <div class="font-bold col-span-2 items-center justify-center flex font-fabula-header">
    {{ FormatDamage(weapon) }}
  </div>

  <div class="col-span-2 items-center justify-center flex font-fabula-header text-sm bg-white border-fabula-green border-t-2">
    {{ FormatHands(weapon) }}
  </div>

  <div class="col-span-1 items-center justify-center flex font-fabula-header text-sm bg-white border-fabula-green border-t-2">
    {{ FormatRange(weapon) }}
  </div>

  <div class="col-span-3 items-center justify-center flex font-fabula-header text-sm bg-white border-fabula-green border-t-2">
    {{ FormatQuality(weapon) }}
  </div>

</div>
</template>

<style scoped>
  #weapon_image {
    image-rendering: pixelated;
    width: 50%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
  }
</style>