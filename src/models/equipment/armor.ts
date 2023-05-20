import type { ArmorDefense } from "./armor-defense";

export interface Armor {
  imageUrl: string,
  name: string,
  cost: number,
  defense: ArmorDefense,
  magicDefense: ArmorDefense,
  initiativePenalty: number,
  quality: string,
  martial: boolean,
}