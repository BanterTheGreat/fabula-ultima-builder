import type { Shield } from "@/models/equipment/shield";
import { ShieldId } from "@/enums/shield-id";

export const ShieldData: Array<Shield> = [
  {
    id: ShieldId.BronzeShield,
    imageUrl: "",
    name: "Bronze Shield",
    cost: 100,
    defenseBonus: 2,
    magicDefenseBonus: 0,
    initiativeBonus: 0,
    quality: "",
    martial: false,
  },
  {
    id: ShieldId.SteelShield,
    imageUrl: "",
    name: "Runic Shield",
    cost: 150,
    defenseBonus: 2,
    magicDefenseBonus: 2,
    initiativeBonus: 0,
    quality: "",
    martial: true,
  }
]