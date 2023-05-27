import type { SpellId } from "@/enums/spell-id";
import type { Spell } from "./spell";

export interface SpellState {
  spells: Record<SpellId | string, Spell>,
}