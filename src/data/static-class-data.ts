import { ClassId } from "@/enums/class-id";
import type { ClassJson } from "../models/class-json";
import { Modifier } from "@/enums/modifier";
import { Proficiency } from "@/enums/proficiency";

export const StaticClassData: Record<ClassId|string, ClassJson> = {

    class_arcanist: {
        name: "Arcanist",
        passives: {
            modifier: {
                stat: Modifier.Mind,
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
                stat: Modifier.Mind,
                boost: 5
            },
            proficiency: [Proficiency.Ritualism]
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
                stat: Modifier.Health,
                boost: 5
            },
            proficiency: [Proficiency.MartialMelee, Proficiency.MartialArmor]
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
                stat: Modifier.Mind,
                boost: 5
            },
            proficiency: [Proficiency.Ritualism]
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
    },
    class_entropist: {
        name: "Entropist",
        passives: {
            modifier: {
                stat: Modifier.Mind,
                boost: 5
            },
            proficiency: [Proficiency.Ritualism]
        },
        skills: {
            skl_luckyseven: {
                name: "Lucky seven",
                maxInvestment: 0,
                description: "You have a __lucky number__; at the beginning of each session, that number is 7. Once per scene after you perform a Check, you may replace the value shown on one of the dice you rolled with your lucky number (even if this would give an impossible Result, such as a value of 7 on a d6). If you do, the replaced value becomes your __new__ lucky number"
            },
            skl_ritualentropism: {
                name: "Ritual entropism",
                maxInvestment: 0,
                description: "You may perform Rituals whose effects fall within the __Entropism__ discipline. Entropism Rituals use __【INS + WLP】__ for the Magic Check."
            },
            skl_stolentime: {
                name: "Stolen time",
                maxInvestment: 4,
                description: "During a conflict, you may use an action to interfere with the flow of time by spending up to __【SL × 5】__ Mind Points. For every 5 Mind Points you spend this way, choose one option: one creature you can see suffers __slow__; __or__ one creature you can see recovers from __slow__; or one creature you can see may immediately perform the __Equipment__ action for free; __or__ choose one ally you can see who has yet to take a turn during this round: that ally may take their turn immediately after yours during this round. \n Each option can only be chosen once per use of this Skill."
            },
            skl_absorbmp: {
                name: "Absorb mp",
                maxInvestment: 5,
                description: "After you suffer damage, you may immediately recover __【SL × 2】__ Mind Points."
            },
            skl_entropicmagic: {
                name: "Entropic magic",
                maxInvestment: 10,
                description: "Each time you acquire this Skill, learn one Entropist spell (see next two pages). Offensive Entropist spells use __【INS + WLP】__ for the Magic Check."
            }
        },
        views: []
    },
    class_fury: {
        name: "Fury",
        passives: {
            modifier: {
                stat: Modifier.Health,
                boost: 5
            },
            proficiency: [Proficiency.MartialMelee, Proficiency.MartialArmor]
        },
        skills: {
            skl_frenzy: {
                name: "Frenzy",
                maxInvestment: 0,
                description: "Your Accuracy Checks with __brawling__, __dagger__, __flail__ and __thrown__ weapons trigger a __critical success__ if both dice show the same number (and the Check is not a __fumble__)."
            },
            skl_indomitablespirit: {
                name: "Indomidable Spirit",
                maxInvestment: 4,
                description: "When you spend one or more Fabula Points, you get an additional benefit — choose one option: you recover __【SL × 5】__ Hit Points; or you recover __【SL × 5】__ Mind Points; __or__ you recover from a single status effect of your choice."
            },
            skl_adrenaline: {
                name: "Adrenaline",
                maxInvestment: 5,
                description: "As long as you are in __Crisis__, you deal __【SL × 2】__ extra damage (be it with attacks, spells, Arcana, items or any other method)."
            },
            skl_provoke: {
                name: "Provoke",
                maxInvestment: 5,
                description: "You may use an action and spend 5 Mind Points to perform an Opposed __【MIG + WLP】__Check against a creature you can see — describe how you taunt them! If you succeed, the target suffers __enraged__ and is compelled to focus their attention on you (their attacks and offensive spells must include you among the targets if possible). This compulsion ends if you fall unconscious or leave the scene, if the creature is no longer __enraged__, or if they are successfully __provoked__ by someone else. You gain a bonus equal to __【SL】__ to your __【MIG + WLP】__ Checks for this Skill."
            },
            skl_withstand: {
                name: "Withstand",
                maxInvestment: 5,
                description: "When you perform the __Guard__ action, if you choose __not__ to provide cover to another creature, you recover Hit Points equal to __【SL, multiplied by the highest strength among your Bonds】__ and choose __Might__ or __Willpower__: you treat the chosen Attribute as being one die size higher (up to a maximum of __d12__) until the end of your next turn"
            }
        },
        views: []
    },
    class_guardian: {
        name: "Guardian",
        passives: {
            modifier: {
                stat: Modifier.Health,
                boost: 5
            },
            proficiency: [Proficiency.MartialArmor, Proficiency.MartialShield, Proficiency.DualShield]
        },
        skills: {
            skl_bodyguard: {
                name: "Bodyguard",
                maxInvestment: 0,
                description: "If you perform the __Guard__ action and choose to provide cover to another creature, that creature gains Resistance to all damage types until the start of your next turn."
            },
            skl_dualshieldbearer: {
                name: "Dual shieldbearer",
                maxInvestment: 0,
                description: "You may now equip a __shield__ in your __main hand__ slot. As long as you have two shields equipped, you gain the benefits of both items and may treat them as the following combined two-handed melee __brawling__ weapon: \n Twin shields: \n Accuracy: __【MIG + MIG】__ Damage: __【HR + 5】 physical__ \n Deals extra damage equal to your __【SL】__ in __defensive mastery__ (above)."
            },
            skl_protect: {
                name: "Protect",
                maxInvestment: 0,
                description: "When another creature is threatened by an __attack__, __spell__ or other __danger__, you may take their place (any Checks that are part of the danger will be performed against you; you may declare the use of this Skill __before or after__ the Checks have been made). If the danger already affected you, it affects you __twice__ (resolve both instances separately); you also cannot protect multiple creatures from the same danger. If you use this Skill during a conflict, you cannot use it again until the start of your next turn."
            },
            skl_defensivemastery: {
                name: "Defensive mastery",
                maxInvestment: 5,
                description: "As long as you have a __shield__ or a __martial armor__ equipped, all damage you suffer is reduced by __【SL】__ (applied __before__ damage Affinities)."
            },
            skl_fortress: {
                name: "Fortress",
                maxInvestment: 5,
                description: "Permanently increase your maximum Hit Points by __【SL × 3】__."
            }
        },
        views: []
    },
    class_loremaster: {
        name: "Loremaster",
        passives: {
            modifier: {
                stat: Modifier.Mind,
                boost: 5
            },
            proficiency: []
        },
        skills: {
            skl_knowledgeispower: {
                name: "Knowledge is power",
                maxInvestment: 0,
                description: "When you perform an Accuracy Check, you may replace __one__ of the Attribute dice with __Insight__ (such as __【INS + INS】__ for a __pistol__ or __【INS + MIG】__ for a __waraxe__)."
            },
            skl_trainedmemory: {
                name: "Trained memory",
                maxInvestment: 0,
                description: "You may perfectly recall the details of any scene you have visited within the past week. You can \"go back in time\" within your mind in order to examine and investigate such scenes again — your __Flash of Insight__ Skill will apply to these memories as well."
            },
            skl_flashofinsight: {
                name: "Flash of insight",
                maxInvestment: 3,
                description: "When you roll a __13 or higher__ on a Check performed to investigate a creature, item or location — this includes using the __Study__ action during a conflict — you may ask the Game Master up to __【SL】__ questions concerning the subject of your investigation. You may ask these questions immediately or save them for later; whenever you ask one of these questions, the Game Master will answer truthfully and you will describe your character's deductive process. \n This Skill may only be used once on the same creature, item or location."
            },
            skl_focused: {
                name: "Focused",
                maxInvestment: 5,
                description: "Permanently increase your maximum Mind Points by __【SL × 3】__. \n When you perform an Open Check using __【INS + INS】__, you gain a bonus equal to __【SL】__ on that Check (this __only__ applies to Open Checks)"
            },
            skl_quickassessment: {
                name: "Quick assessment",
                maxInvestment: 6,
                description: "At the start of a conflict, you may spend up to __【SL × 5】__ Mind Points. For every 5 Mind Points you spend this way, choose one option: choose a creature you can see and the GM reveals one of their __Traits__; __or__ name a damage type and choose a creature  you can see, and the GM reveals that creature's __Affinity__ towards that damage type."
            }
        },
        views: []
    },
    class_orator: {
        name: "Orator",
        passives: {
            modifier: {
                stat: Modifier.Mind,
                boost: 5
            },
            proficiency: []
        },
        skills: {
            skl_unexpectedally: {
                name: "Unexpected ally",
                maxInvestment: 0,
                description: "You may use an action and spend 1 Fabula Point to choose a __non-hostile__ creature able to hear and understand you. If you do, that creature becomes helpful towards you so long as you are kind and respectful to them and your requests are reasonable."
            },
            skl_mytrustinyou: {
                name: "My trust in you",
                maxInvestment: 2,
                description: "After another Player Character who is able to hear you performs a Check, you may spend 1 Fabula Point and invoke one of their __Traits__ or __Bonds__ in order to let them reroll dice or improve the Result of the Check (following the normal rules). Then, if you have a __Bond__ towards that character, they recover __【SL × 10】__ Mind Points."
            },
            skl_persuasive: {
                name: "Persuasive",
                maxInvestment: 2,
                description: "When you successfully perform a Check to fill or erase sections of a Clock, if your approach relied on __charm__, __diplomacy__, __deception__ or __intimidation__, you may spend up to __【SL × 20】__ Mind Points. If you do, fill or erase an additional section of that Clock for every 20 Mind Points you spend this way"
            },
            skl_condemn: {
                name: "Condemn",
                maxInvestment: 4,
                description: "You may use an action and spend 5 Mind Points to perform an Opposed __【INS + WLP】__ Check against a creature that can hear and understand you — describe your accusations! If you succeed, the target loses __【SL × 10】__ Mind Points and suffers __dazed__ or __shaken__ (your choice). \n You gain a bonus equal to __【SL】__ to your __【INS + WLP】__ Checks for this Skill."
            },
            skl_encourage: {
                name: "Encourage",
                maxInvestment: 6,
                description: "During a conflict, you may use an action and spend 5 Mind Points to choose another creature that can hear and understand you. That creature recovers __【SL × 5】__ Hit Points and chooses __Dexterity__, __Insight__, __Might__, or __Willpower__: they treat the chosen Attribute as being one die size higher (up to a maximum of __d12__) until the start of your next turn."
            }
        },
        views: []
    },
    class_rogue: {
        name: "Rogue",
        passives: {
            modifier: {
                stat: Modifier.Inventory,
                boost: 2
            },
            proficiency: []
        },
        skills: {
            skl_seeyoulater: {
                name: "See you later",
                maxInvestment: 0,
                description: "You may use an action and spend 1 Fabula Point to vanish from the current scene, reappearing whenever you want during a __different__ scene in which another Player Character is present. Describe how you escaped and miraculously got here!"
            },
            skl_dodge: {
                name: "Dodge",
                maxInvestment: 3,
                description: "As long as you have no __shields__ and no __martial armor__ equipped, your Defense score is increased by __【SL】__."
            },
            skl_highspeed: {
                name: "High speed",
                maxInvestment: 3,
                description: "At the start of a conflict, you may spend 10 Mind Points. If you do, choose one option and apply it before the start of the first round: perform a __free attack__ with a weapon you have equipped; __or__ perform a __Hinder__ or __Objective__ action. You also gain a bonus equal to __【SL】__ to all Checks you perform as part of the chosen option."
            },
            skl_cheapshot: {
                name: "Cheap shot",
                maxInvestment: 5,
                description: "When you hit a creature with an attack, if the attack __only__ targeted that creature and they are suffering from __one or more status effects__, you may have it deal extra damage equal to __【SL + the number of status effects on the creature】__."
            },
            skl_soulsteal: {
                name: "Soul steal",
                maxInvestment: 5,
                description: "You may use an action to perform a __【DEX + WLP】__ Check against the Magic Defense of a creature you can see. If you succeed and the target is a __soldier__, you recover __【SL】__ Inventory Points; if they are an __elite__ or __champion__, the GM gives you the target’s __soul treasure__, an item worth an amount of zenit __equal to or lower than【the target's level multiplied by 30, or by 50 if they are a Villain】__. This __soul treasure__ will appear inside your __backpack__; a creature can be successfully stolen from with this Skill only once. You gain a bonus equal to __【SL】__ to your __【DEX + WLP】__ Checks for this Skill."
            }
        },
        views: []
    },
    class_sharpshooter: {
        name: "Sharpshooter",
        passives: {
            modifier: {
                stat: Modifier.Health,
                boost: 5
            },
            proficiency: [Proficiency.MartialRanged, Proficiency.MartialShield]
        },
        skills: {
            skl_barrage: {
                name: "Barrage",
                maxInvestment: 0,
                description: "When you perform a __ranged__ attack, you may spend 10 Mind Points to choose one option: the attack gains __multi (2)__; __or__ you increase the attack's __multi__ property by one, up to a maximum of__ multi (3)__"
            },
            skl_crossfire: {
                name: "Crossfire",
                maxInvestment: 0,
                description: "After a creature you can see performs a __ranged__ attack, you may spend an amount of Mind Points equal to the total Result of their Accuracy Check in order to have the attack fail automatically against all targets. You can only use this Skill if you have a __ranged__ weapon equipped, and it has no effect if the Accuracy Check was a __critical success__."
            },
            skl_rangedweaponmastery: {
                name: "Ranged weapon mastery",
                maxInvestment: 4,
                description: "You gain a bonus equal to __【SL】__ to all Accuracy Checks with __ranged__ weapons."
            },
            skl_warningshot: {
                name: "Warning shot",
                maxInvestment: 4,
                description: "When you hit one or more targets with a __ranged__ attack that would deal damage, you may have the attack deal no damage. If you do, choose one option: inflict __shaken__ on each target hit by the attack; __or__ inflict __slow__ on each target hit by the attack; __or__ each target hit by the attack loses __【SL × 10】__ Mind Points. Describe your maneuver!"
            },
            skl_hawkeye: {
                name: "Hawkeye",
                maxInvestment: 5,
                description: "When you perform the __Guard__ action, if you choose __not__ to provide cover to another creature, you may choose one option: the next __ranged__ attack you perform before the end of the current scene will deal __【SL × 2】__ extra damage; __or__ you may immediately perform a __free attack__ with a __bow__ or __firearm__ you have equipped, treating your __High Roll (HR)__ as 0 when calculating damage dealt by this attack."
            }
        },
        views: []
    },
    class_spiritist: {
        name: "Spiritist",
        passives: {
            modifier: {
                stat: Modifier.Mind,
                boost: 5
            },
            proficiency: [Proficiency.Ritualism]
        },
        skills: {
            skl_ritualspiritism: {
                name: "Ritual spiritism",
                maxInvestment: 0,
                description: "You may perform Rituals whose effects fall within the Spiritism discipline. __Spiritism__ Rituals use __【INS + WLP】__ for the Magic Check."
            },
            skl_supportmagic: {
                name: "Support magic",
                maxInvestment: 0,
                description: "When you cast a spell that targets one or more allies, if you have an __arcane__ weapon equipped, you may choose one of those allies you have a __Bond__ towards. If you do, that ally gains a bonus to the next Check they perform during the current scene; this bonus is equal to the __strength__ of your Bond towards them."
            },
            skl_vismagus: {
                name: "Vismagus",
                maxInvestment: 0,
                description: "When you cast a spell, if you don't have enough Mind Points to pay for its total cost, you may choose to spend __twice as many__ Hit Points instead. You cannot use this Skill if doing so would reduce you to 0 Hit Points. If a spell cast this way would cause you to recover Hit Points, you instead recover no Hit Points (the spell functions normally on any other target)."
            },
            skl_healingpower: {
                name: "Healing power",
                maxInvestment: 2,
                description: "When you cast a spell that targets one or more allies, if you have an __arcane__ weapon equipped, you may have each of those allies recover an amount of Hit Points equal to __【SL, multiplied by the number of Bonds you have】__. \n This healing is separate from any healing caused by the effects of the spell."
            },
            skl_spiritualmagic: {
                name: "spiritual magic",
                maxInvestment: 10,
                description: "Each time you acquire this Skill, learn one Spiritist spell (see next two pages). Offensive Spiritist spells use __【INS + WLP】__ for the Magic Check."
            }
        },
        views: []
    },
    class_tinkerer: {
        name: "Tinkerer",
        passives: {
            modifier: {
                stat: Modifier.Inventory,
                boost: 2
            },
            proficiency: []
        },
        skills: {
            skl_emergencyitem: {
                name: "Emergency item",
                maxInvestment: 0,
                description: "Once per conflict scene, if you are in __Crisis__, you may perform an additional action on your turn. This action __must__ be the __Inventory__ action."
            },
            skl_potionrain: {
                name: "Potion rain",
                maxInvestment: 2,
                description: "When you create a __potion__ that restores a __single__ creature's HP and/or MP, you may have it affect up to __【SL】__ additional creatures. If you do, the potion only restores half the normal amount of HP and MP to each creature."
            },
            skl_gadgets: {
                name: "Gadgets",
                maxInvestment: 5,
                description: "When you first acquire this Skill, choose a gadget type: __alchemy__, __infusions__ or __magitech__ (see next four pages). You gain its __basic benefits__. \n Whenever you take this Skill again, choose one option: you gain the __basic benefits__ of a new gadget type; __or__ you gain the __advanced benefits__ of a gadget type whose __basic benefits__ you already obtained; __or__ you gain the __superior benefits__ of a gadget type whose __advanced benefits__ you already obtained."
            },
            skl_secretformula: {
                name: "Secret formula",
                maxInvestment: 5,
                description: "When you create a __potion__ or __magisphere__ whose effects restore HP and/or MP, each restored amount is increased by __【SL × 5】__. When you create an __elemental shard__, __potion__ or __magisphere__ that deals damage, that item deals __【SL】__ extra damage."
            },
            skl_visionary: {
                name: "Visionary",
                maxInvestment: 5,
                description: "When you work on a __Project__, up to __【SL × 100】__ zenit of material costs are automatically paid; additionally, you generate an additional __【SL】progress__ every day. If multiplecharacters with this Skill work on the same Project, the effects will be cumulative."
            }
        },
        views: [
            {
                navHeader: "Invention types",
                routerView: "invention-types"
            }
        ]
    },
    class_wayfarer: {
        name: "Wayfarer",
        passives: {
            modifier: {
                stat: Modifier.Inventory,
                boost: 2
            },
            proficiency: []
        },
        skills: {
            skl_welltraveled: {
                name: "Well traveled",
                maxInvestment: 0,
                description: "You reduce the die rolled for your __travel rolls__ by one size (to a minimum of __d6__).If multiple characters have this Skill, the effects are __not__ cumulative."
            },
            skl_treasurehunter: {
                name: "Treasure hunter",
                maxInvestment: 2,
                description: "When your group journeys on the world map, you will make a __discovery __on a roll of __【SL + 1】__ or lower on the travel roll (instead of only on a __1__)."
            },
            skl_taverntalk: {
                name: "Tavern talk",
                maxInvestment: 3,
                description: "When you __rest__ inside an inn or tavern, you may ask the Game Master up to __【SL】__ questions about your surroundings and the people who live here; the Game Master will answer truthfully and you describe how you gathered the information."
            },
            skl_resourceful: {
                name: "Resourceful",
                maxInvestment: 4,
                description: "You recover __【SL】__ Inventory Points after each __travel roll__ (see page __106__)."
            },
            skl_faithfulcompanion: {
                name: "Faithful companion",
                maxInvestment: 5,
                description: "Together with the rest of your group, design a __level 5 beast__, __construct__, __elemental__ or __plant__ creature (see page __302__) that becomes your __companion__. This creature has __no Initiative score__ and __does not level up__, can have__ up to two basic attacks__, gains a bonus equal to __【SL】__ to Accuracy Checks and Magic Checks, and their maximum Hit Points are equal to __【(SL multiplied by the companion's base Might die size) + half your level】__. \n Your companion doesn't get a turn during conflicts, but on your turn you can use an action to have the companion perform an action (only once per turn). If you leave a scene, your companion leaves with you. \n If your companion falls to 0 Hit Points, they flee and rejoin you at the start of the next scene in which you are present, with HP equal to their __Crisis score__. \n When you __rest__, your companion also gains the full benefits of resting."
            }
        },
        views: []
    },
    class_weaponmaster: {
        name: "Weaponmaster",
        passives: {
            modifier: {
                stat: Modifier.Health,
                boost: 5
            },
            proficiency: [Proficiency.MartialMelee, Proficiency.MartialShield]
        },
        skills: {
            skl_bladestorm: {
                name: "Bladestorm",
                maxInvestment: 0,
                description: "When you perform a __melee__ attack, you may spend 10 Mind Points to choose one option: the attack gains __multi (2)__; __or__ you increase the attack's __multi__ property by one, up to a maximum of __multi (3)__."
            },
            skl_counterattack: {
                name: "Counterattack",
                maxInvestment: 0,
                description: "After an enemy __hits or misses you with a melee attack__, if the Result of their Accuracy Check was an __even number__, you may perform a __free attack__ against that enemy (after their attack has been fully resolved). This attack must be a __melee__ attack and must have that enemy as its __only__ target; treat your __High Roll (HR)__ as 0 when calculating damage dealt by this attack."
            },
            skl_breach: {
                name: "Breach",
                maxInvestment: 3,
                description: "You may use an action and spend 5 Mind Points to perform a ___free attack__ with a __melee__ weapon you have equipped. This attack must target a __single creature__. If the attack is successful, it deals no damage and you choose one option: you destroy one shield equipped by the target; __or__ you destroy the target's equipped armor; __or__ whenever the target suffers damage from a source before the start of your next turn, that source deals __【SL × 2】__ extra damage to them."
            },
            skl_bonecrusher: {
                name: "Bone crusher",
                maxInvestment: 4,
                description: "When you hit one or more targets with a __melee__ attack that would deal damage, you may have the attack deal no damage. If you do, choose one option: inflict __dazed__ on each target hit by the attack; __or__ inflict __weak__ on each target hit by the attack; __or__ each target hit by the attack loses __【SL × 10】__ Mind Points. Describe your maneuver!"
            },
            skl_meleeweaponmastery: {
                name: "Melee weapon mastery",
                maxInvestment: 4,
                description: "You gain a bonus equal to __【SL】__ to all Accuracy Checks with __melee__ weapons."
            }
        },
        views: []
    }
}