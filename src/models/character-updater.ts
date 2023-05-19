import { state } from "@/singletons/character-state";

export class CharacterUpdater {
  constructor() {
    this.object = state.character;
  }

  private object: any;

  /**
   * Selects a property within the object.
   * @param selector The method to get the correct property.
   */
  public InProperty<TObject, TProperty>(selector: (c: TObject) => TProperty) {
    this.object = selector(this.object);
    return this;
  }

  /**
   * Grabs a value of the array of a previously chosen property.
   * @param arrayIndex The index to get the value from.
   */
  public WithIndex<TObject>(arrayIndex: number) {
    const selector = (c: Array<TObject>) => c[arrayIndex];
    this.object = selector(this.object);
    return this;
  }

  /**
   * Overwrites/Replaces an entire value in the array of a previously chosen property.
   * @param arrayIndex The index to get the value from.
   * @param value The value to overwrite the index with.
   */
  public UpdateIndex<TObject>(arrayIndex: number, value: TObject) {
    const selector = (c: TObject[]) => c[arrayIndex] = value;
    this.object = selector(this.object);
    return this;
  }

  /**
   * Updates a value in a key of a previously chosen property.
   * @param keyOf The key of the property to update.
   * @param value The value to update the property with.
   */
  public UpdateProperty<TObject, TValue extends TObject[keyof TObject]>(keyOf: keyof TObject, value: TValue) {
    const selector = (c: TObject) => c[keyOf] = value;
    this.object = selector(this.object);
    return this;
  }

  /**
   * Triggers an recalculation of every automated field in the character model.
   */
  public RecalculateValues() {
    // This should run the calculator, which would calculate all modifers and values that depend on others.
  }
}