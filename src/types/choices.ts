import type { ClassChoice } from "@/models/character-builder/class-choice";
import type { InitialAttributeChoice } from "@/models/character-builder/initial-attribute-choice";
import type { InitialClassChoice } from "@/models/character-builder/initial-class-choice";
import type { UpgradeAttributeChoice } from "@/models/character-builder/upgrade-attribute-choice";

export type Choices = InitialAttributeChoice | InitialClassChoice | ClassChoice | UpgradeAttributeChoice;