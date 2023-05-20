<script setup lang="ts">
import type { Character } from '@/models/character';
import  { Emotions } from '@/models/character-data/bond';
import type Bond from '@/models/character-data/bond';
import { CharacterUpdater } from '@/models/character-updater';
import { ref } from 'vue';

const props = defineProps<{
  bond: Bond,
  index: number,
}>()

function updateBondName(event: any) {
  const name: string = event.target.value;
  new CharacterUpdater().InProperty((c: Character) => c.bonds).WithIndex(props.index).UpdateProperty<Bond, string>("name", name);
}

let bondEmotionsPrevious = [props.bond.admirationEmotion, props.bond.affectionEmotion, props.bond.loyaltyEmotion].filter(x => x != Emotions.None);
let bondEmotionsCurrent = ref(bondEmotionsPrevious);

function updateEmotions(event: any) {
  let emotion = event.target.value;
  let key: keyof Bond = event.target.name;

  if (bondEmotionsPrevious.includes(emotion)) {
    // We already had this emotion. This means we want to remove it.
    new CharacterUpdater()
        .InProperty((c: Character) => c.bonds)
        .WithIndex(props.index)
        .UpdateProperty<Bond, Emotions>(key, Emotions.None);

    bondEmotionsCurrent.value = [props.bond.admirationEmotion, props.bond.affectionEmotion, props.bond.loyaltyEmotion].filter(x => x != Emotions.None || x != emotion);
    bondEmotionsPrevious = bondEmotionsCurrent.value;
    return;
  }

  new CharacterUpdater()
        .InProperty((c: Character) => c.bonds)
        .WithIndex(props.index)
        .UpdateProperty<Bond, Emotions>(key, emotion);

  bondEmotionsCurrent.value = [props.bond.admirationEmotion, props.bond.affectionEmotion, props.bond.loyaltyEmotion].filter(x => x != Emotions.None);
  bondEmotionsPrevious = bondEmotionsCurrent.value;
}
</script>

<template>
      Bond
      <input id="trait-identity" v-model="props.bond.name" @change="updateBondName" />

      <input type="checkbox" id="checkbox" name="admirationEmotion" v-bind:value="Emotions.Admiration" v-model="bondEmotionsCurrent" @change="updateEmotions" />
      <input type="checkbox" id="checkbox" name="admirationEmotion" v-bind:value="Emotions.Inferiority" v-model="bondEmotionsCurrent" @change="updateEmotions" />

      <input type="checkbox" id="checkbox" name="loyaltyEmotion" v-bind:value="Emotions.Loyalty" v-model="bondEmotionsCurrent" @change="updateEmotions" />
      <input type="checkbox" id="checkbox" name="loyaltyEmotion" v-bind:value="Emotions.Mistrust" v-model="bondEmotionsCurrent" @change="updateEmotions" />

      <input type="checkbox" id="checkbox" name="affectionEmotion" v-bind:value="Emotions.Affection" v-model="bondEmotionsCurrent" @change="updateEmotions" />
      <input type="checkbox" id="checkbox" name="affectionEmotion" v-bind:value="Emotions.Hatred" v-model="bondEmotionsCurrent" @change="updateEmotions" />
</template>