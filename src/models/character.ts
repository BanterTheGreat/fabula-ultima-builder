import type { Trait } from "./character-data/traits";
import type { General } from "./character-data/general";
import type { CharacterAttributes } from "./character-data/character-attributes";
import type Bond from "./character-data/bond";

export interface Character {
  id: string,
  general: General,
  traits: Trait,
  attributes: CharacterAttributes,
  bonds: Array<Bond>,
}