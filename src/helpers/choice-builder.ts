import { UpgradeAttributeChoice } from "@/models/character-builder/upgrade-attribute-choice";
import { CharacterChoice } from "@/models/character-builder/character-choice";
import { SkillChoice } from "@/models/character-builder/skills-choice";
import { InitialAttributeChoice } from "@/models/character-builder/initial-attribute-choice";
import { InitialSkillChoice } from "@/models/character-builder/initial-class-choice";

export function InitialiseChoices(): Record<number, Array<CharacterChoice>> {
  const choices: Record<number, Array<CharacterChoice>> = {};

  let firstLevelChoices: Array<CharacterChoice> = [];

  firstLevelChoices.push(new CharacterChoice(new InitialSkillChoice));
  firstLevelChoices.push(new CharacterChoice(new InitialAttributeChoice));

  choices[5] = firstLevelChoices;

  for (let index = 6; index < 51; index++) {
    let levelChoices: Array<CharacterChoice> = [new CharacterChoice(new SkillChoice)];

    if (index == 20 || index == 40) {
      levelChoices.push(new CharacterChoice(new UpgradeAttributeChoice))
    }

    choices[index] = levelChoices;
  }

  return choices;
}