import { DieSize } from "../die-size";

export class Attribute {
  constructor() {
    this.base = DieSize.D6;
    this._current = this.base;
  }

  public base: DieSize;

  private _current: DieSize;

  public set current(newValue: DieSize) {
    this._current = newValue;
  }

  public get current() {
    return this._current;
  }
}