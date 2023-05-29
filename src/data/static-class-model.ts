import type { ClassSkillId } from "@/enums/class-skill-id"
import type { ClassView } from "@/models/character/class-view"

export interface ClassJsonModel {
    name: string,
    passives: {
        modifier: {
            stat: "health" | "mind" | "inventory" | "meleeAccuracy" | "rangedAccuracy" | "defense" | "magicDefense" | "initiative" | "meleeDamage" | "rangedDamage" | "spellDamage" | "spellAccuracy",
            boost: number
        },
        proficiency: Array<"martialMelee" | "martialRanged" | "martialArmor" | "martialShield" | "dualShield" | "ritualism">
    },
    skills: Record<string|ClassSkillId, {
        name:string,
        maxInvestment:number,
        description:string
    }>,
    views: Array<ClassView>
}