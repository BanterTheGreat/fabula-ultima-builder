import type { ArmorId } from "@/enums/armor-id";
import type { ArmorDefense } from "./armor-defense";

export interface Armor {
  id: ArmorId,
  imageUrl: string,
  name: string,
  cost: number,
  defense: ArmorDefense,
  magicDefense: ArmorDefense,
  initiativePenalty: number,
  quality: string,
  martial: boolean,
}