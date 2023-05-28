import { Emotion } from "@/enums/emotion";
import type { Character } from "./character";
import { JsonHelper } from "../helpers/json-helper";
import { Attribute } from "./character/attribute";
import { InitialiseChoices } from "@/helpers/choice-builder";

export class CharacterState {
  constructor() {
    // We should load the character from cookies here.
    var tempCharacter: Character = {
      id: crypto.randomUUID(),
      general: { 
        name: "John", pronouns: "him", experience: 1, fabulaPoints: 1, level: 1, zenit: 300 
      }, 
      traits: {
        identity: "Unknown",
        theme: "Couragious",
        origin: "Sweden",
      },
      attributes: {
        Dexterity: new Attribute(),
        Insight: new Attribute(),
        Might: new Attribute(),
        Willpower: new Attribute(),
      },
      bonds: [
        { name: "", admirationEmotion: Emotion.Admiration, loyaltyEmotion: Emotion.None, affectionEmotion: Emotion.None },
      ],
      statistics: {
        healthPoints: { value: 0, calculatedValue: 0, currentValue: 0 },
        mindPoints: { value: 0, calculatedValue: 0,  currentValue: 0 },
        inventoryPoints: { value: 0, calculatedValue: 0, currentValue: 0 },
        defense: { value: 0, calculatedValue: 0 },
        magicDefense: { value: 0, calculatedValue: 0 },
        initiative: { value: 0, calculatedValue: 0 },
      },
      equipment: {
        equippedArmor: null,
        equippedOffHand: null,
        equippedweapon: null,
        storedWeapons: [],
        storedArmors: [],
        storedOffHand: [],
      },
      progression: InitialiseChoices(),
    }

    this._character = tempCharacter;

    console.log(this._character);
  }

  private _character: Character;

  public get character(): Character {
    console.log("Character Getter called!")
    return this._character;
  }
}