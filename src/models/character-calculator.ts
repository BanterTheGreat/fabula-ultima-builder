import { state } from "@/singletons/state";
import type { Character } from "./character";

export type CalculationOptions = "statistics";

export class CharacterCalculator {

  constructor() {
    this.character = state.character;
  }

  private character: Character;

  public RecalculateAll() {
    this.CalculateBaseStatistics();
    // Preferrably, I would just like a big Array<Modifier> or something. That we read out and use to decide what needs updating where.
  } 

  public Recalculate(subject: CalculationOptions) {
    switch (subject) {
      case "statistics":
        this.CalculateBaseStatistics();
        break;
    }
  }

  private CalculateBaseStatistics() {
    this.character.statistics.healthPoints = (this.character.attributes.Might * 5) + this.character.general.level;
    this.character.statistics.mindPoints = (this.character.attributes.Willpower * 5) + this.character.general.level;
    // Calculate Initiative from ??? and armor.
    // Calculate Defense from Equipment.
    // Calculate MagicDefense from Equipment.
  }
}