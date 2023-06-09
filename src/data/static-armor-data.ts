import { ArmorDefenseType } from "@/enums/armor-defense-type";
import { ArmorId } from "@/enums/armor-id";
import { CharacterAttribute } from "@/enums/character-attribute";
import type { Armor } from "@/models/equipment/armor";

export const StaticArmorData: Record<ArmorId | string, Armor> = {
  amr_none: {
    id: ArmorId.NoArmor,
    imageUrl: "",
    name: "No Armor",
    cost: 0,
    defense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Dexterity, bonus: 0 },
    magicDefense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Insight, bonus: 0 },
    initiativePenalty: 0,
    quality: "",
    martial: false,
  },

  amr_silk: {
    id: ArmorId.SilkShirt,
    imageUrl: "",
    name: "Silk Shirt",
    cost: 100,
    defense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Dexterity, bonus: 0 },
    magicDefense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Insight, bonus: 2 },
    initiativePenalty: 1,
    quality: "",
    martial: false,
  },

  amr_garb: {
    id: ArmorId.TravelGarb,
    imageUrl: "",
    name: "Travel Garb",
    cost: 100,
    defense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Dexterity, bonus: 1 },
    magicDefense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Insight, bonus: 1 },
    initiativePenalty: 1,
    quality: "",
    martial: false,
  },

  amr_tunic: {
      id: ArmorId.CombatTunic,
      imageUrl: "",
      name: "Combat Tunic",
      cost: 150,
      defense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Dexterity, bonus: 1 },
      magicDefense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Insight, bonus: 1 },
      initiativePenalty: 0,
      quality: "",
      martial: false,
  },

  amr_robe: {
      id: ArmorId.SageRobe,
      imageUrl: "",
      name: "Sage Robe",
      cost: 200,
      defense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Dexterity, bonus: 1 },
      magicDefense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Insight, bonus: 2 },
      initiativePenalty: 2,
      quality: "",
      martial: false,
  },

  amr_brigandine: {
    id: ArmorId.Brigandine,
    imageUrl: "",
    name: "Brigandine",
    cost: 150,
    defense: { type: ArmorDefenseType.Static, staticValue: 10, bonus: 0 },
    magicDefense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Insight, bonus: 0 },
    initiativePenalty: 2,
    quality: "",
    martial: true,
  },

  amr_bronze_plate: {
    id: ArmorId.BronzePlate,
    imageUrl: "",
    name: "Bronze Plate",
    cost: 200,
    defense: { type: ArmorDefenseType.Static, staticValue: 10, bonus: 11 },
    magicDefense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Insight, bonus: 0 },
    initiativePenalty: 3,
    quality: "",
    martial: true,
  },

  amr_runic_plate:  {
    id: ArmorId.RunicPlate,
    imageUrl: "",
    name: "Runic Plate",
    cost: 250,
    defense: { type: ArmorDefenseType.Static, staticValue: 10, bonus: 11 },
    magicDefense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Insight, bonus: 1 },
    initiativePenalty: 3,
    quality: "",
    martial: true,
  },

  amr_steel_plate:  {
    id: ArmorId.SteelPlate,
    imageUrl: "",
    name: "Steel Plate",
    cost: 300,
    defense: { type: ArmorDefenseType.Static, staticValue: 10, bonus: 12 },
    magicDefense: { type: ArmorDefenseType.Attribute, attribute: CharacterAttribute.Insight, bonus: 0 },
    initiativePenalty: 4,
    quality: "",
    martial: true,
  },
};
