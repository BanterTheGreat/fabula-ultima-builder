import { state } from "@/singletons/state";
import type { Character } from "./character";

export type CalculationOptions = "statistics";

export class CharacterCalculator {

  constructor() {
    this.character = state.character;
  }

  private character: Character;

  public RecalculateAll() {
    this.CalculateStatistics();
    
  } 

  public Recalculate(subject: CalculationOptions) {

  }

  private CalculateStatistics() {

  }
}