import type { Character } from "./character";
import { Attribute } from "./character-data/attribute";
import { Emotions } from "./character-data/bond";

export class CharacterState {
  constructor() {
    // We should load the character from cookies here.
    var tempCharacter: Character = {
      id: crypto.randomUUID(),
      general: { 
        name: "john", pronouns: "him", experience: 1, fabulaPoints: 1, level: 1, zenit: 300 
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
        { name: "", admirationEmotion: Emotions.Admiration, loyaltyEmotion: Emotions.None, affectionEmotion: Emotions.None },
      ],
      statistics: {
        healthPoints: { current: 0, max: 0, calculatedMax: 0 },
        mindPoints: { current: 0, max: 0, calculatedMax: 0 },
        inventoryPoints: { current: 0, max: 0, calculatedMax: 0 },
        defense: { current: 0, max: 0, calculatedMax: 0 },
        magicDefense: { current: 0, max: 0, calculatedMax: 0 },
        initiative: { current: 0, max: 0, calculatedMax: 0 },
      }
    }

    this._character = tempCharacter;
  }

  private _character: Character;

  public get character(): Character {
    console.log("Character Getter called!")
    return this._character;
  }
}