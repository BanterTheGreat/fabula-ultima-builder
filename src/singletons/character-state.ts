import { CharacterState } from "@/models/characterState";
import { reactive } from "vue";

export const state = reactive<CharacterState>(
  new CharacterState(),
);