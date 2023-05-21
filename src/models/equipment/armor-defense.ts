import type { ArmorDefenseType } from "@/enums/armor-defense-type";
import type { CharacterAttribute } from "@/enums/character-attribute";

export interface ArmorDefense {
  type: ArmorDefenseType,
  attribute?: CharacterAttribute,
  staticValue?: number,
  bonus: number,
}