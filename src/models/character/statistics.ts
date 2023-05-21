import type { CalculatedNumber } from "../calculated-number";
import type { CalculatedNumberMaximum } from "../calculated-number-maximum";

export interface Statistics {
  healthPoints: CalculatedNumberMaximum,
  mindPoints: CalculatedNumberMaximum,
  inventoryPoints: CalculatedNumberMaximum,
  defense: CalculatedNumber,
  magicDefense: CalculatedNumber,
  initiative: CalculatedNumber,
}