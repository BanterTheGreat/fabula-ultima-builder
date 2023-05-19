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

  public updateCharacter<TParentProperty, TValue extends TParentProperty[keyof TParentProperty]>(parentSelector: (c: Character) => TParentProperty, objectKey: keyof TParentProperty, value: TValue, recalculate: boolean = false) {
    console.log("Attempting to update the character");
    let property = parentSelector(this._character);

    if (typeof property[objectKey] != typeof value) {
      // This can only happen if we start throwing untyped variables in this. We shouldn't do that to begin with.
      throw "Trying to update with mismatched types between property to update and value";
    }

    property[objectKey] = value;

    if (parentSelector(this._character)[objectKey] != value) {
      throw "Something went wrong with updating the state, the value hasn't updated."
    }

    if (recalculate) {
      // Call Recalculate function here.
    }
  }
}