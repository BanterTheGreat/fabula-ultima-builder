import type { CharacterAttribute } from "@/enums/character-attribute";
import type { Choice } from "./choice";
import { ChoiceType } from "@/enums/choice-type";

export class UpgradeAttributeChoice implements Choice {
  type = ChoiceType.UpgradeAttributes;
  attribute: CharacterAttribute | null = null;
}