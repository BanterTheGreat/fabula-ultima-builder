import type { SpellId } from "@/enums/spell-id";
import { SpellType } from "@/enums/spell-type";
import type { Spell } from "@/models/spell";

export const StaticSpellData: Record<SpellId, Spell> = {
  spl_elementalshroud: {
    type: SpellType.Elementalist,
    name: "Elemental Shroud",
    mind: 5,
    targets: 3,
    offensive: false,
    duration: "scene",
    description: "You weave magical energy and protect the targets from the fury of the elements. Choose a damage type: __air__, __bolt__, __earth__, __fire__, __water__ or __ice__. Until this spell ends, each target gains Resistance against the chosen damage type."
  },

  spl_elementalweapon: {
    type: SpellType.Elementalist,
    name: "Elemental Weapon",
    mind: 10,
    targets: "One weapon",
    offensive: false,
    duration: "scene",
    description: "You imbue a weapon with elemental energy. Choose a damage type: __air__, __bolt__, __earth__, __fire__, __water__ or __ice__. Until this spell ends, all damage dealt by the weapon becomes the chosen damage type. If you have that weapon equipped while you cast this spell, you may perform a __free attack__ with it as part of the same action. \n\nThis spell can only be cast on a weapon equipped by a willing creature"
  },

  spl_flare: {
    type: SpellType.Elementalist,
    name: "Flare",
    mind: 20,
    targets: 1,
    offensive: true,
    duration: "instantaneous",
    description: "You channel a single ray of fire towards your foe, its temperature so high that it will pierce through most defenses. The target suffers __【 HR + 25 】 fire__ damage. Damage dealt by this spell ignores Resistances."
  },

  spl_fulgur: {
    type: SpellType.Elementalist,
    name: "Fulgur",
    mind: 10,
    targets: 3,
    offensive: true,
    duration: "instantaneous",
    description: "You weave electricity into a wave of crackling bolts. Each target hit by this spell suffers __【 HR + 15 】bolt__ damage, and if you spend an __Opportunity__ also suffers __dazed__."
  },

  spl_glacies: {
    type: SpellType.Elementalist,
    name: "Fulgur",
    mind: 10,
    targets: 3,
    offensive: true,
    duration: "instantaneous",
    description: "You coat your foes under a thick layer of frost. Each target hit by this spell suffers __【 HR+ 15 】 ice__ damage, and if you spend an Opportunity also suffers slow."
  },

  spl_iceberg: {
    type: SpellType.Elementalist,
    name: "Iceberg",
    mind: 20,
    targets: 1,
    offensive: true,
    duration: "instantaneous",
    description: "A pillar of ice magic envelops your foe, suddenly dropping their body temperature to a critical level. The target suffers __【 HR + 25 】 ice__ damage. Damage dealt by this spell ignores Resistances."
  },

  spl_ignis: {
    type: SpellType.Elementalist,
    name: "Ignis",
    mind: 10,
    targets: 3,
    offensive: true,
    duration: "instantaneous",
    description: "You unleash a searing barrage against your foes, conjuring flames out of thin air. Each target hit by this spell suffers __【 HR + 15 】 fire__ damage, and if you spend an __Opportunity__ also suffers __shaken__."
  },

  spl_soaringstrike: {
    type: SpellType.Elementalist,
    name: "Soaring Strike",
    mind: 10,
    targets: "Self",
    offensive: false,
    duration: "instantaneous",
    description: "The wind carries your strikes across the battlefield. You may immediately perform a __free attack__ with a __melee__ weapon you have equipped. This attack may target creatures that can only be targeted by ranged attacks. If you used a weapon belonging to the __brawling__ or __spear__ Category for this attack, it deals 5 extra damage. If you hit a flying target with this attack, you may force them to land immediately."
  },
};