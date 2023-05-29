import type { Trait } from "./character/traits";
import type { General } from "./character/general";
import type { CharacterAttributes } from "./character/character-attributes";
import type Bond from "./character/bond";
import type { Statistics } from "./character/statistics";
import type { CharacterEquipment } from "./character/character-equipment";
import type { CharacterClass } from "./character/character-class";
import type { ClassId } from "@/enums/class-id";
import type { CharacterChoice } from "./character-builder/character-choice";
import type { Choice } from "./character-builder/choice";
import type { ICharacterChoice } from "./character-builder/character-choice-interface";

export interface Character {
  id: string,
  statistics: Statistics,
  general: General,
  traits: Trait,
  attributes: CharacterAttributes,
  bonds: Array<Bond>,
  equipment: CharacterEquipment,
  classes: Array<CharacterClass>
  progression: Record<number, Array<ICharacterChoice>>
}