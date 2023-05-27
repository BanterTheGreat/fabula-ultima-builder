import type { WeaponId } from "@/enums/weapon-id";
import type { Weapon } from "./equipment/weapon";
import type { ArmorId } from "@/enums/armor-id";
import type { ShieldId } from "@/enums/shield-id";
import type { Armor } from "./equipment/armor";
import type { Shield } from "./equipment/shield";

export interface EquipmentState {
  weapons: Record<WeaponId | string, Weapon>,
  armors: Record<ArmorId | string, Armor>,
  shields: Record<ShieldId | string, Shield>,
}