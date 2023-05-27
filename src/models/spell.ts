import type { SpellType } from "@/enums/spell-type"

export interface Spell {
  type: SpellType,
  name: string,
  mind: number | string, // String is for the unorthodox amounts. Such as 'up to 20'. '20 x T' will count as just 20.
  targets: 1 | 2 | 3 | string // String type will be the unorthodox targets, such as 'one equipped weapon'.
  offensive: boolean // Display an icon + filter option.
  duration: "instantaneous" | "scene",
  description: string,
}