import { ChoiceType } from "@/enums/choice-type"
import type { Choice } from "./choice"
import { DieSize } from "../die-size";

export class InitialAttributeChoice implements Choice {
  type = ChoiceType.InitialAttributes;
  dexterity: DieSize | null = null;
  might: DieSize | null = null;
  insight: DieSize | null = null;
  willpower: DieSize | null = null;
}