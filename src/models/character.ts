import type { Trait } from "./character-data/traits";
import type { General } from "./character-data/general";

export interface Character {
  general: General,
  traits: Trait,
}