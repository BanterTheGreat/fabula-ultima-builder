import type { Choices } from "@/types/choices";

export class CharacterChoice {
  constructor(choice: Choices) {
    this.choice = choice;
  }

  public choice: Choices;
}