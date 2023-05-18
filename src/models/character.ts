import type { Trait } from "./character-data/traits";
import type { General } from "./character-data/general";

export interface Character {
  id: string,
  general: General,
  traits: Trait,
}