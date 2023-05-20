import { CharacterState } from "@/models/character-state";
import { reactive } from "vue";

export const state: CharacterState = reactive<CharacterState>(
  new CharacterState(),
);