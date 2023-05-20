import { ArmorData } from "@/data/armor-data";
import { ShieldData } from "@/data/shield-data";
import { WeaponsData } from "@/data/weapons-data";

export class JsonHelper {
  public ExportFabulaDataToJson() {
    console.log(JSON.stringify(WeaponsData));
    console.log(JSON.stringify(ArmorData));
    console.log(JSON.stringify(ShieldData));
  }
}