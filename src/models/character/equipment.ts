import type { ArmorId } from "@/enums/armor-id";
import type { ShieldId } from "@/enums/shield-id";
import type { WeaponId } from "@/enums/weapon-id";
import type { Weapon } from "../equipment/weapon";

export interface Equipment<TEquipmentId extends (WeaponId | ArmorId | ShieldId | string)> {
  // We might want to support custom entries in the future. As such, I keep the door open for custom types.
  id: TEquipmentId,
  homebrew: boolean,
}