import { ChoiceType } from "@/enums/choice-type"
import type { Choice } from "./choice"

export interface InitialSkills {
  classId?: string,
  skills: Array<string>,
}

export class InitialClassChoice implements Choice {
  type = ChoiceType.InitialSkills
  class1: InitialSkills = { skills: [] }
  class2: InitialSkills = { skills: [] }
  class3: InitialSkills = { skills: [] }
}