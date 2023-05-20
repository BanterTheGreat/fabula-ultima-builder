import type { CalculatedNumber } from "../calculated-number";

export interface Statistics {
  healthPoints: CalculatedNumber,
  mindPoints: CalculatedNumber,
  inventoryPoints: CalculatedNumber,
  defense: CalculatedNumber,
  magicDefense: CalculatedNumber,
  initiative: CalculatedNumber,
}