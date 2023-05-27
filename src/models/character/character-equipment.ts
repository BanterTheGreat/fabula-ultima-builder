import type { ArmorId } from "@/enums/armor-id";
import type { ShieldId } from "@/enums/shield-id";
import type { WeaponId } from "@/enums/weapon-id";
import type { Equipment } from "./equipment";

export interface CharacterEquipment {
  equippedweapon: Equipment<WeaponId> | null,
  equippedOffHand: Equipment<WeaponId> | Equipment<ShieldId> | null,
  equippedArmor: Equipment<ArmorId> | null,
  storedWeapons: Array<Equipment<WeaponId>>,
  storedOffHand: Array<Equipment<WeaponId> | Equipment<ShieldId>>,
  storedArmors: Array<Equipment<ArmorId>>,
}