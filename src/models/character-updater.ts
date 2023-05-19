import { state } from "@/singletons/character-state";

export class CharacterUpdater {
  constructor() {
    this.object = state.character;
  }

  public object: any;

  public InProperty<TObject, TProperty>(selector: (c: TObject) => TProperty) {
    this.object = selector(this.object);
    return this;
  }

  public WithIndex<TArrayObject extends Array<TArrayObject>>(arrayIndex: number) {
    const selector = (c: TArrayObject) => c[arrayIndex];
    this.object = selector(this.object);
    return this;
  }

  public UpdatePropertyKeyWithValue<TObject, TValue extends TObject[keyof TObject]>(keyOf: keyof TObject, value: TValue) {
    const selector = (c: TObject) => c[keyOf] = value;
    this.object = selector(this.object);
    return this;
  }

  public RecalculateValues() {
    // This should run the calculator, which would calculate all modifers and values that depend on others.
  }
}