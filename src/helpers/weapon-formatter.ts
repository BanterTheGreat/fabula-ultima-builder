import { CharacterAttribute } from "@/enums/character-attribute";
import { WeaponRange } from "@/enums/weapon-range";
import type { Weapon } from "@/models/equipment/weapon";

export function FormatCost(weapon: Weapon): string {
  return weapon.cost == 0 ? "-" : weapon.cost + "z";
}

export function FormatHands(weapon: Weapon): string {
  return weapon.hands == 1 ? "One-handed" : "Two-handed";
}

export function FormatQuality(weapon: Weapon): string {
  return weapon.quality == "" ? "No Quality." : weapon.quality;
}

export function FormatRange(weapon: Weapon): string {
  return weapon.range == WeaponRange.Melee ? "Melee" : "Ranged";
}

export function FormatAccuracy(weapon: Weapon): string {
  let accuracy = `[${AttributeShortHand(weapon.accuracyAttribute1)} + ${AttributeShortHand(weapon.accuracyAttribute2)}]`

  if (weapon.accuracyBonus) {
    accuracy + ` + ${weapon.accuracyBonus}`
  }

  return accuracy;
}

export function FormatDamage(weapon: Weapon): string {
  return `[HR + ${weapon.damageBonus}] ${weapon.damageType}`;
}

function AttributeShortHand(attribute: CharacterAttribute) {
  switch(attribute) {
    case CharacterAttribute.Dexterity:
      return "DEX";
    case CharacterAttribute.Might:
      return "MIG";
    case CharacterAttribute.Insight:
      return "INS";
    case CharacterAttribute.Willpower:
      return "WIL"
  }
}

