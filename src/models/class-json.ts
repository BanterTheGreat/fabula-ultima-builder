import type { ClassSkillId } from "@/enums/class-skill-id"
import type { Modifier } from "@/enums/modifier"
import type { Proficiency } from "@/enums/proficiency"
import type { RouterTab } from "@/models/character/router-tab"

export interface ClassJson {
    name: string,
    passives: {
        modifier: {
            stat: Modifier,
            boost: number
        },
        proficiency: Array<Proficiency>
    },
    skills: Record<string|ClassSkillId, {
        name:string,
        maxInvestment:number,
        description:string
    }>,
    views: Array<RouterTab>
}