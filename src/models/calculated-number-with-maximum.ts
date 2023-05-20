import type { CalculatedNumber } from "./calculated-number";

export interface CalculatedNumberWithMaximum extends CalculatedNumber {
  maxValue: number,
  calculatedMaxValue: number,
}