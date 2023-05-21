import type { ShieldId } from "@/enums/shield-id";

export interface Shield {
  id: ShieldId,
  imageUrl: string,
  name: string,
  cost: number,
  defenseBonus: number,
  magicDefenseBonus: number,
  initiativeBonus: number,
  quality: string,
  martial: boolean,
}