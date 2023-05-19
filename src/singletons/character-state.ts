import { CharacterState } from "@/models/characterState";
import { reactive } from "vue";

export const state: CharacterState = reactive<CharacterState>(
  new CharacterState(),
);