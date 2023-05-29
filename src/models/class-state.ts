import type { ClassId } from "@/enums/class-id";
import type { ClassJson } from "./class-json";

export interface ClassState {
  class: Record<ClassId | string, ClassJson>
}