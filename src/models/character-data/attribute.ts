import { DieSize } from "../die-size";

export class Attribute {
  constructor() {
    this._base = DieSize.D6;
    this._current = DieSize.D6;
  }

  private _base: DieSize;
  private _current: DieSize;

  public set base(value: DieSize) {
    console.log("Set _base & _current");
    this._base = value;
    this._current = value;
  };

  public get base() {
    console.log("Get _Base")
    return this._base;
  }

  public get current() {
    console.log("Get _Current")
    return this._current;
  }
}