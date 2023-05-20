import type { CalculatedNumber } from "../calculated-number";
import type { CalculatedNumberWithMaximum } from "../calculated-number-with-maximum";

export interface Statistics {
  healthPoints: CalculatedNumberWithMaximum,
  mindPoints: CalculatedNumberWithMaximum,
  inventoryPoints: CalculatedNumberWithMaximum,
  defense: CalculatedNumber,
  magicDefense: CalculatedNumber,
  initiative: CalculatedNumber,
}