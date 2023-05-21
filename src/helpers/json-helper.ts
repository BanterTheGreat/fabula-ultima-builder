import { ArmorData } from "@/data/armor-data";
import { ShieldData } from "@/data/shield-data";
import { WeaponData } from "@/data/weapon-data";

export class JsonHelper {
  public ExportFabulaDataToJson() {
    console.log(JSON.stringify(WeaponData));
    console.log(JSON.stringify(ArmorData));
    console.log(JSON.stringify(ShieldData));
  }
}