import { ClassId } from "@/enums/class-id";
import type { ClassJsonModel } from "./static-class-model";

export const StaticClassData: Record<ClassId|string, ClassJsonModel> = {

    class_arcanist: {
        name: "Arcanist",
        passives: {
            modifier: {
                stat: "mind",
                boost: 5
            },
            proficiency: []
        },
        skills: {
            skl_bindandsummon: {
                name: "Bind and summon",
                maxInvestment: 0,
                description:"You may __bind__ Arcana to your soul and __summon__ them later. The Game Master will tell you the details of each binding process when you first encounter the Arcanum in question. \n You may use an action and spend 40 Mind Points to __summon__ an Arcanum you have bound: the details of this process are explained on the next page. \n If you take this Skill at character creation, you begin play with one Arcanum of your choice already bound to you, chosen from the list on the next pages. Other than that, you may only obtain new Arcana through exploration and story progression."
            },
            skl_ritualarcanism: {
                name: "Ritual arcanism",
                maxInvestment: 0,
                description: "You may perform Rituals of the __Arcanism__ discipline, as long as their effects fall within the __domains__ of one or more Arcana you have bound (see next pages). \n Arcanism Rituals use __【WLP + WLP】__ for the Magic Check."
            },
            skl_arcaneregeneration: {
                name: "Arcane regeneration",
                maxInvestment: 2,
                description: "When you summon an Arcanum, you immediately recover __【SL × 5】__ Hit Points"
            },
            skl_arcanecircle: {
                name: "Arcane circle",
                maxInvestment: 4,
                description: "After you willingly __dismiss__ an Arcanum on your turn during a conflict (see next page), if that Arcanum had not been __summoned__ during this same turn and you have an __arcane__ weapon equipped, you may immediately perform the __Spell__ action for free. The spell you cast this way must have a __total Mind Point cost of 【SL × 5】or lower__ (you must still pay the spell's MP cost)."
            },
            skl_emergencyarcanum: {
                name: "Emergency arcanum",
                maxInvestment: 6,
                description: "As long as you are in __Crisis__, the cost for summoning your Arcana is reduced by __【SL × 5】__ Mind Points."
            }
        },
        views: [
            {
                navHeader: "The arcana",
                routerView: "the-arcana"
            }
        ]
    },

    class_chimerist: {
        name: "Chimerist",
        passives: {
            modifier: {
                stat: "mind",
                boost: 5
            },
            proficiency: ["ritualism"]
        },
        skills: {
            skl_feralspeech: {
                name: "Feral speech",
                maxInvestment: 0,
                description: "You can communicate with creatures of the __beast__, __monster__ and __plant__ Species."
            },
            skl_pathogenesis: {
                name: "Pathogenesis",
                maxInvestment: 0,
                description: "When you deal damage to one or more creatures with one of your Chimerist spells, each of those creatures that share their __Species__ with the creature you originally learned that spell from suffers __poisoned__."
            },
            skl_ritualchimerism: {
                name: "Ritual chimerism",
                maxInvestment: 0,
                description: "You may perform Rituals whose effects fall within the __Chimerism__ discipline. When you acquire this Skill, choose __【INS + WLP】or【MIG + WLP】__. From now on, your Chimerism Rituals will use the chosen Attributes for the Magic Check."
            },
            skl_consume: {
                name: "Consume",
                maxInvestment: 5,
                description: "After you deal damage to one or more creatures with a spell, if you have an __arcane__, __dagger__ or __flail__ weapon equipped, you recover __【SL × 2】__ Mind Points."
            },
            skl_spellmimic: {
                name: "Spell mimic",
                maxInvestment: 10,
                description: "When you see a creature belonging to the __beast__, __monster__ or __plant__ Species cast a spell, you may immediately choose to learn that spell as a Chimerist spell of your own: if you do, record the __Species__ of the creature you learned it from. \n When you first acquire this Skill, choose __【INS + WLP】or【MIG + WLP】__. From now on, your offensive Chimerist spells will use the chosen Attributes for the Magic Check, regardless of the Attributes used by the creature you learned the spell from. \n You may have __up to 【SL + 2】 different Chimerist spells__ memorized this way. If you want to memorize a new Chimerist spell but are already at your limit, you must forget one of your old spells and replace it with the new spell."
            }
        },
        views: [
            {
                navHeader: "Chimerism",
                routerView: "chimerism"
            }
        ]
    },
    class_darkblade: {
        name: "Darkblade",
        passives: {
            modifier: {
                stat: "health",
                boost: 5
            },
            proficiency: ["martialMelee", "martialArmor"]
        },
        skills: {
            skl_darkblood: {
                name: "Dark blood",
                maxInvestment: 0,
                description: "As long as you are in __Crisis__, you have Resistance to __dark__ damage and __poison__ damage"
            },
            skl_heartofdarkness: {
                name: "Heart of darkness",
                maxInvestment: 0,
                description: "Once per scene upon entering __Crisis__, you may choose a specific creature you can see that you don't have a __Bond__ towards. If you do, create a __Bond__ of __hatred__ towards that creature."
            },
            skl_painfullession: {
                name: "Painful lesson",
                maxInvestment: 3,
                description: "After another creature causes you to lose Hit Points (with an attack, a spell or any other method), you may immediately perform the __Study__ action on that creature (see page __74__) for free. If you do, gain a bonus equal to __【SL】__ to your Check. \n Remember, you can study the same aspect of a creature only once."
            },
            skl_shadowstrike: {
                name: "Shadow strike",
                maxInvestment: 5,
                description: "You have learned to channel your vital force into your attacks. You may use an action to perform a __Shadow Strike__: roll your current __Might__ die and lose an amount of Hit Points equal to __【the number rolled on your Might die】__. If this didn't reduce your Hit Points to 0, you may perform a __free attack__ with a weapon you have equipped: if this attack hits one or more targets, it deals extra damage equal to __【SL + the number rolled on your Might die】__. However, all damage dealt by this attack becomes __dark__ and its damage type cannot be changed."
            },
            skl_agony: {
                name: "Agony",
                maxInvestment: 5,
                description: "After you deal damage to one or more creatures, if you have a __Bond__ towards at least one of those creatures, you may recover __【SL × 2】__ Hit Points and __【SL × 2】__ Mind Points."
            }
        },
        views: []
    },
    class_elementalist: {
        name: "Elementalist",
        passives: {
            modifier: {
                stat: "mind",
                boost: 5
            },
            proficiency: ["ritualism"]
        },
        skills: {
            skl_ritualelementalism: {
                name: "Ritual elementalism",
                maxInvestment: 0,
                description: "You may perform Rituals whose effects fall within the __Elementalism__ discipline. Elementalism Rituals use __【INS + WLP】__ for the Magic Check."
            },
            skl_cataclysm: {
                name: "Cataclysm",
                maxInvestment: 3,
                description: "When you cast an __instantaneous__ spell, if you have an __arcane__ weapon equipped, you may __increase the spell's total MP cost__ by up to __【SL × 10】__ Mind Points. If you do so and the spell deals damage to one or more creatures, it will deal 5 extra damage to each creature for every 10 Mind Points by which you increased its total MP cost."
            },
            skl_magicalartillery: {
                name: "Magical artillery",
                maxInvestment: 3,
                description: "When you cast an offensive spell, if you have an __arcane__ weapon equipped, you gain a bonus to your Magic Check equal to __【SL × 2】__."
            },
            skl_spellblade: {
                name: "Spellblade",
                maxInvestment: 4,
                description: "When you cast an offensive spell targeting a __single creature__, if the spell has a __total Mind Point cost of 【SL × 10】 or lower__ and you have one or more __bow__, __brawling__, __dagger__, __flail__, __spear__ or __sword__ weapons equipped, you may choose one of those weapons. If you do, your Magic Check for the spell will use the chosen weapon's Accuracy Check formula; for instance, the Magic Check for an Elementalist spell cast through a __bronze sword__ (page 131) will be __【DEX + MIG】 +1__ instead of __【INS + WLP】__."
            },
            skl_elementalmagic: {
                name: "Elemental magic",
                maxInvestment: 10,
                description: "Each time you acquire this Skill, learn one Elementalist spell (see next two pages). Offensive Elementalist spells use __【INS + WLP】__ for the Magic Check."
            }
        },
        views: []
    }

}