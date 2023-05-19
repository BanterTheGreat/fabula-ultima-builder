export class UpdateBuilder<TPrimaryObject> {
  constructor(object: TPrimaryObject) {
    this.object = object;
  }
  public object: TPrimaryObject;

  public selectors: Array<(c: any) => any> = []; 

  public InProperty<TObject, TProperty>(selector: (c: TObject) => TProperty) {
    this.selectors.push(selector);
    return this;
  }

  public WithIndex<TArrayObject extends Array<TArrayObject>>(arrayIndex: number) {
    this.selectors.push((c: TArrayObject) => c[arrayIndex])
    return this;
  }

  public UpdatePropertyKeyWithValue<TObject, TValue extends TObject[keyof TObject]>(keyOf: keyof TObject, value: TValue) {
    this.selectors.push((c: TObject) => c[keyOf] = value);
    return this;
  }

  public Run() {
    console.log("Attempting to run character updates");
    for (let index = 0; index < this.selectors.length; index++) {
      const selector = this.selectors[index];
      this.object = selector(this.object);
    }
  }
}