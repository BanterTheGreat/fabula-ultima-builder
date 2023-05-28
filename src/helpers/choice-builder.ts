import { UpgradeAttributeChoice } from "@/models/character-builder/upgrade-attribute-choice";
import { CharacterChoice } from "@/models/character-builder/character-choice";
import { ClassChoice } from "@/models/character-builder/class-choice";
import { InitialAttributeChoice } from "@/models/character-builder/initial-attribute-choice";
import { InitialClassChoice } from "@/models/character-builder/initial-class-choice";

export function InitialiseChoices(): Record<number, Array<CharacterChoice>> {
  const choices: Record<number, Array<CharacterChoice>> = {};

  let firstLevelChoices: Array<CharacterChoice> = [];

  firstLevelChoices.push(new CharacterChoice(new InitialClassChoice));
  firstLevelChoices.push(new CharacterChoice(new InitialAttributeChoice));

  choices[5] = firstLevelChoices;

  for (let index = 6; index < 51; index++) {
    let levelChoices: Array<CharacterChoice> = [new CharacterChoice(new ClassChoice)];

    if (index == 20 || index == 40) {
      levelChoices.push(new CharacterChoice(new UpgradeAttributeChoice))
    }

    choices[index] = levelChoices;
  }

  return choices;
}