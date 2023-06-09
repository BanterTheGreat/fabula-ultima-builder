import { reactive } from "vue";
import type { EquipmentState } from "@/models/equipment-state";
import type { SpellState } from "@/models/spell-state";

import weaponJson from "@/data/json/weapon.json";
import armorJson from "@/data/json/armor.json";
import shieldJson from "@/data/json/shield.json";
import spellsJson from "@/data/json/spell.json";

import type { Weapon } from "@/models/equipment/weapon";
import type { Armor } from "@/models/equipment/armor";
import type { Shield } from "@/models/equipment/shield";
import type { Spell } from "@/models/spell";

export const EquipmentData = reactive<EquipmentState>(
  {
    weapons: {},
    armors: {},
    shields: {},
  }
);

export const SpellData = reactive<SpellState>(
  {
    spells: {},
  }
);


export function InitialiseData() {
  const weaponsJson = weaponJson as Record<string, Weapon>;
  EquipmentData.weapons = weaponsJson;

  const armors = armorJson as Record<string, Armor>;
  EquipmentData.armors = armors;

  const shields = shieldJson as Record<string, Shield>;
  EquipmentData.shields = shields;

  const spells = spellsJson as Record<string, Spell>;
  SpellData.spells = spells;
}