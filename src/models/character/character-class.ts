import type { Modifier } from "@/enums/modifier"
import type { ClassSkill } from "./class-skill"
import type { RouterTab } from "./router-tab"
import type { Proficiency } from "@/enums/proficiency"
import type { Router } from "vue-router"

export interface CharacterClass {
  id: string,
  name: string,
  passives: {
    modifier: {
      stat: Modifier,
      boost: number,
    }
    proficiency: Array<Proficiency>
  },
  skills: Record<string, ClassSkill>,
  views: Array<RouterTab>,
};