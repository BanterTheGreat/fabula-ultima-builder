import { ClassId } from "@/enums/class-id"
import { ClassSkillId } from "@/enums/class-skill-id"
import type { ClassSkill } from "./class-skill"
import type { ClassView } from "./class-view"

export interface CharacterClass {
  id: string,
  name: string,
  passives: {
    modifier: {
      stat: "health" | "mind" | "inventory" | "meleeAccuracy" | "rangedAccuracy" | "defense" | "magicDefense" | "initiative" | "meleeDamage" | "rangedDamage" | "spellDamage" | "spellAccuracy",
      boost: number,
    }
    proficiency: Array<"martialMelee" | "martialRanged" | "martialArmor" | "martialShield" | "dualShield" | "ritualism">
  },
  skills: Record<string, ClassSkill>,
  views: Array<ClassView>,

};