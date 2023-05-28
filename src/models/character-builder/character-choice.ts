import type { ICharacterChoice } from "./character-choice-interface";
import type { Choice } from "./choice";

export class CharacterChoice<T extends Choice> implements ICharacterChoice {
  /**
   *
   */
  constructor(choice: T) {
    this.choice = choice;
  }

  public choice: T;
}