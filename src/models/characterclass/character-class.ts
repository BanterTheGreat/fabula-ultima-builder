import { ClassId } from "@/enums/class-id"
import { ClassSkillId } from "@/enums/class-skill-id"
import type { ClassSkill } from "./class-skill"

export interface CharacterClass<TClassId extends (ClassId | string)> {
  id: TClassId,
  passives: {
    modifiers: {
      mtat: "health" | "mind" | "inventory" | "meleeAccuracy" | "rangedAccuracy" | "defense" | "magicDefense" | "initiative" | "meleeDamage" | "rangedDamage" | "spellDamage" | "spellAccuracy",
      boost: Number,
    }
    equipment: Array<"martialMelee" | "martialRanged" | "martialArmor" | "martialShield" | "dualShield">
  },
  skills: Record<(string|ClassSkillId), ClassSkill>,
  views?: Array<{ NavHeader: string, RouterView: string }>,
};