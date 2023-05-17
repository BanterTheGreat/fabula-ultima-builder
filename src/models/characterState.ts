import type { Character } from "./character";

export class CharacterState {
  constructor() {
    // We should load the character from cookies here.
    var tempCharacter: Character = {
      general: { 
        name: "john", pronouns: "him", experience: 1, fabulaPoints: 1, level: 1, zenit: 300 
      }, 
      traits: {
        identity: "Unknown",
        theme: "Couragious",
        origin: "Sweden",
      }}

    this._character = tempCharacter;
  }

  private _character: Character;

  public set character(newCharacter: Character) {
    // Verification Logic + Other logic here.
    console.log("Character Setter called!")
    this._character = newCharacter;
  }

  public get character(): Character {
    console.log("Character Getter called!")
    return this._character;
  }
}