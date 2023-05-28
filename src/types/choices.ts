import type { SkillChoice } from "@/models/character-builder/skills-choice";
import type { InitialAttributeChoice } from "@/models/character-builder/initial-attribute-choice";
import type { InitialSkillChoice } from "@/models/character-builder/initial-class-choice";
import type { UpgradeAttributeChoice } from "@/models/character-builder/upgrade-attribute-choice";

export type Choices = InitialAttributeChoice | InitialSkillChoice | SkillChoice | UpgradeAttributeChoice;