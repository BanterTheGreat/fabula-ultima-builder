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
        { name: "", admirationEmotion: Emotions.None, loyaltyEmotion: Emotions.None, affectionEmotion: Emotions.None },
      ]
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

  public updateCharacterArrayField<TProperty, TValue extends TProperty>(arraySelector: (c: Character) => Array<TProperty>, arrayIndex: number, value: TValue, recalculate: boolean = false) {
    console.log("Attempting to update the character");
    let property = arraySelector(this._character);

    if (property[arrayIndex] != undefined && typeof property[arrayIndex] != typeof value) {
      // This can only happen if we start throwing untyped variables in this. We shouldn't do that to begin with.
      throw "Trying to update with mismatched types between property to update and value";
    }

    property[arrayIndex] = value;

    console.log(this._character);

    if (arraySelector(this._character)[arrayIndex] != value) {
      throw "Something went wrong with updating the state, the value hasn't updated."
    }

    if (recalculate) {
      // Call Recalculate function here.
    }
  }

  public updateCharacterArrayPropertyValue<TPropertyOfArray, TProperty, TValue extends TProperty[keyof TProperty]>(arraySelector: (c: Character) => Array<TPropertyOfArray>, arrayIndex: number, selector: (c: TPropertyOfArray) => TProperty, objectKey: keyof TProperty, value: TValue, recalculate: boolean = false) {
    console.log("Attempting to update the character");

    let array: TPropertyOfArray[] = arraySelector(this._character);

    let propertyToUpdate: TProperty = selector(array[arrayIndex]);

    if (typeof propertyToUpdate[objectKey] != typeof value) {
      // This can only happen if we start throwing untyped variables in this. We shouldn't do that to begin with.
      throw "Trying to update with mismatched types between property to update and value";
    }

    propertyToUpdate[objectKey] = value;

    if (selector(arraySelector(this._character)[arrayIndex])[objectKey] != value) {
      throw "Something went wrong with updating the state, the value hasn't updated."
    }

    console.log(this._character);

    if (recalculate) {
      // Call Recalculate function here.
    }
  }
}