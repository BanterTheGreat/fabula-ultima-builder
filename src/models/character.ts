import type { Trait } from "./character-data/traits";
import type { General } from "./character-data/general";
import type { CharacterAttributes } from "./character-data/character-attributes";

export interface Character {
  id: string,
  general: General,
  traits: Trait,
  attributes: CharacterAttributes,
}