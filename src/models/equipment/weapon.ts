import type { CharacterAttribute } from "@/enums/character-attribute";
import type { DamageType } from "@/enums/damage-type";
import type { WeaponCategory } from "@/enums/weapon-category";
import type { WeaponRange } from "@/enums/weapon-range";

export interface Weapon {
  imageUrl?: string,
  name: string,
  cost: number,
  damageType: DamageType,
  damageBonus: number,
  accuracyBonus: number,
  hands: 1 | 2,
  category: WeaponCategory,
  range: WeaponRange,
  accuracyAttribute1: CharacterAttribute,
  accuracyAttribute2: CharacterAttribute,
  quality: string,
  martial: boolean,
}
