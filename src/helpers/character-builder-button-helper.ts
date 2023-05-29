import { ChoiceType } from "@/enums/choice-type";
import type { Choice } from "@/models/character-builder/choice";
import type { SkillChoice } from "@/models/character-builder/skills-choice";
import type { InitialAttributeChoice } from "@/models/character-builder/initial-attribute-choice";
import type { UpgradeAttributeChoice } from "@/models/character-builder/upgrade-attribute-choice";
import type { Choices } from "@/types/choices";
import type { InitialSkillChoice } from "@/models/character-builder/initial-class-choice";

export class CharacterBuilderButtonHelper {
  public static GetInitialAttributeButtonText(choice: InitialAttributeChoice) {
    if (choice.dexterity != null) {
      // There should never be a moment where a stat is null yet others are.
      return `DEX: D${choice.dexterity} INS: D${choice.insight} MIG: D${choice.might} WIL: D${choice.willpower}`
    }

    return "Choose your Attribute die size";
  }

  public static GetButtonCss(choice: Choices) {
    let notUsed;

    switch(choice.type) {
      case ChoiceType.InitialAttributes:
        notUsed = (choice as InitialAttributeChoice).dexterity == null;
        break;
      case ChoiceType.UpgradeAttributes:
        notUsed = (choice as UpgradeAttributeChoice).attribute == null;
        break;
      case ChoiceType.Spell:
        // Not Implemented
      case ChoiceType.Skill:
        notUsed = (choice as SkillChoice).classId == null;
        break;
      case ChoiceType.InitialSkills:
        notUsed = (choice as InitialSkillChoice).class1?.classId == null;
        break;
    }

    return notUsed ? "border-rose-600" : "";
  }
}