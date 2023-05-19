import { DieSize } from "../die-size";

export class Attribute {
  constructor() {
    this._base = DieSize.D6;
    this._current = DieSize.D6;
  }

  private _base: DieSize;
  private _current: DieSize;

  public set base(value: DieSize) {
    this._base = value;
    this._current = value;
  };

  public get base() {
    return this._base;
  }

  public get current() {
    return this._current;
  }
}