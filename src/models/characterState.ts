import type { Character } from "./character";
import { Attribute } from "./character-data/attribute";

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
    }

    this._character = tempCharacter;
  }

  private _character: Character;

  public get character(): Character {
    console.log("Character Getter called!")
    return this._character;
  }

  public updateCharacter<Type>(selector: (c: Character) => Type, value: Type, recalculate: boolean = false) {
    console.log("Attempting to update the character");
    let property = selector(this._character);

    if (typeof property != typeof value) {
      throw "Trying to update with mismatched types between selected property and value";
    }
    property = value;
    
    if (recalculate) {
      // Recalculate here.
    }
  }
}