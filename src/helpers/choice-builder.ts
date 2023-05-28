import { UpgradeAttributeChoice } from "@/models/character-builder/upgrade-attribute-choice";
import { CharacterChoice } from "@/models/character-builder/character-choice";
import type { ICharacterChoice } from "@/models/character-builder/character-choice-interface";
import { ClassChoice } from "@/models/character-builder/class-choice";
import { InitialAttributeChoice } from "@/models/character-builder/initial-attribute-choice";
import { InitialClassChoice } from "@/models/character-builder/initial-class-choice";

export function InitialiseChoices(): Record<number, Array<ICharacterChoice>> {
  const choices: Record<number, Array<ICharacterChoice>> = {};

  let firstLevelChoices: Array<ICharacterChoice> = [];

  firstLevelChoices.push(new CharacterChoice<InitialClassChoice>(new InitialClassChoice));
  firstLevelChoices.push(new CharacterChoice<InitialAttributeChoice>(new InitialAttributeChoice));

  choices[5] = firstLevelChoices;

  for (let index = 6; index < 51; index++) {
    let levelChoices: Array<ICharacterChoice> = [new CharacterChoice<ClassChoice>(new ClassChoice)];

    if (index == 20 || index == 40) {
      levelChoices.push(new CharacterChoice<UpgradeAttributeChoice>(new UpgradeAttributeChoice))
    }

    choices[index] = levelChoices;
  }

  return choices;
}