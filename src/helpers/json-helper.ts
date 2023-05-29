import { StaticArmorData } from "@/data/static-armor-data";
import { StaticShieldData } from "@/data/static-shield-data";
import { StaticSpellData } from "@/data/static-spell-data";
import { StaticWeaponData } from "@/data/static-weapon-data";

import { StaticClassData } from "@/data/static-class-data";

export class JsonHelper {
  public static PrintFabulaDataToConsoleAsJson() {
    console.log("ARMOR DATA");
    console.log(JSON.stringify(StaticArmorData));

    console.log("SHIELD DATA");
    console.log(JSON.stringify(StaticShieldData));

    console.log("WEAPON DATA");
    console.log(JSON.stringify(StaticWeaponData));

    console.log("CLASS DATA");
    console.log(JSON.stringify(StaticClassData));

    console.log("SPELL DATA");
    console.log(JSON.stringify(StaticSpellData));
  }
}