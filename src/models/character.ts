import type { Trait } from "./character/traits";
import type { General } from "./character/general";
import type { CharacterAttributes } from "./character/character-attributes";
import type Bond from "./character/bond";
import type { Statistics } from "./character/statistics";

export interface Character {
  id: string,
  statistics: Statistics,
  general: General,
  traits: Trait,
  attributes: CharacterAttributes,
  bonds: Array<Bond>,
}