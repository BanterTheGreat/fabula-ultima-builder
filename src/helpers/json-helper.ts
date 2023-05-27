import { StaticArmorData } from "@/data/static-armor-data";
import { StaticShieldData } from "@/data/static-shield-data";
import { StaticWeaponData } from "@/data/static-weapon-data";

export class JsonHelper {
  public PrintFabulaDataToConsoleAsJson() {
    console.log("ARMOR DATA");
    console.log(JSON.stringify(StaticArmorData));

    console.log("SHIELD DATA");
    console.log(JSON.stringify(StaticShieldData));

    console.log("WEAPON DATA");
    console.log(JSON.stringify(StaticWeaponData));
  }
}