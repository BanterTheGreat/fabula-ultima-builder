import { ChoiceType } from "@/enums/choice-type"
import type { Choice } from "./choice"

export class ClassChoice implements Choice {
  type = ChoiceType.Skill
  classId: string | null = null;
  skillId: string | null = null;
}