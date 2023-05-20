import type { Trait } from "./character-data/traits";
import type { General } from "./character-data/general";
import type { CharacterAttributes } from "./character-data/character-attributes";
import type Bond from "./character-data/bond";
import type { Statistics } from "./character-data/statistics";

export interface Character {
  id: string,
  statistics: Statistics,
  general: General,
  traits: Trait,
  attributes: CharacterAttributes,
  bonds: Array<Bond>,
}