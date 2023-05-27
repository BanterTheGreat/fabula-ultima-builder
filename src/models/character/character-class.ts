import { ClassId } from "@/enums/class-id"
import { ClassSkillId } from "@/enums/class-skill-id"
import type { ClassSkill } from "./class-skill"
import type { ClassView } from "./class-view"

export interface CharacterClass<TClassId extends (ClassId | string)> {
  id: TClassId,
  passives: {
    modifiers: {
      stat: "health" | "mind" | "inventory" | "meleeAccuracy" | "rangedAccuracy" | "defense" | "magicDefense" | "initiative" | "meleeDamage" | "rangedDamage" | "spellDamage" | "spellAccuracy",
      boost: number,
    }
    equipment: Array<"martialMelee" | "martialRanged" | "martialArmor" | "martialShield" | "dualShield">
  },
  skills: Record<(ClassSkillId | string), ClassSkill>,
  views?: Array<ClassView>,
};