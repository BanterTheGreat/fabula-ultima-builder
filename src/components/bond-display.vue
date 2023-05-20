<script setup lang="ts">
import { Emotion } from '@/enums/emotion';
import type { Character } from '@/models/character';
import type Bond from '@/models/character/bond';
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

let bondEmotionsPrevious = [props.bond.admirationEmotion, props.bond.affectionEmotion, props.bond.loyaltyEmotion].filter(x => x != Emotion.None);
let bondEmotionsCurrent = ref(bondEmotionsPrevious);

function updateEmotions(event: any) {
  let emotion = event.target.value;
  let key: keyof Bond = event.target.name;

  if (bondEmotionsPrevious.includes(emotion)) {
    // We already had this emotion. This means we want to remove it.
    new CharacterUpdater()
        .InProperty((c: Character) => c.bonds)
        .WithIndex(props.index)
        .UpdateProperty<Bond, Emotion>(key, Emotion.None);

    bondEmotionsCurrent.value = [props.bond.admirationEmotion, props.bond.affectionEmotion, props.bond.loyaltyEmotion].filter(x => x != Emotion.None || x != emotion);
    bondEmotionsPrevious = bondEmotionsCurrent.value;
    return;
  }

  new CharacterUpdater()
        .InProperty((c: Character) => c.bonds)
        .WithIndex(props.index)
        .UpdateProperty<Bond, Emotion>(key, emotion);

  bondEmotionsCurrent.value = [props.bond.admirationEmotion, props.bond.affectionEmotion, props.bond.loyaltyEmotion].filter(x => x != Emotion.None);
  bondEmotionsPrevious = bondEmotionsCurrent.value;
}
</script>

<template>
      Bond
      <input id="trait-identity" v-model="props.bond.name" @change="updateBondName" />

      <input type="checkbox" id="checkbox" name="admirationEmotion" v-bind:value="Emotion.Admiration" v-model="bondEmotionsCurrent" @change="updateEmotions" />
      <input type="checkbox" id="checkbox" name="admirationEmotion" v-bind:value="Emotion.Inferiority" v-model="bondEmotionsCurrent" @change="updateEmotions" />

      <input type="checkbox" id="checkbox" name="loyaltyEmotion" v-bind:value="Emotion.Loyalty" v-model="bondEmotionsCurrent" @change="updateEmotions" />
      <input type="checkbox" id="checkbox" name="loyaltyEmotion" v-bind:value="Emotion.Mistrust" v-model="bondEmotionsCurrent" @change="updateEmotions" />

      <input type="checkbox" id="checkbox" name="affectionEmotion" v-bind:value="Emotion.Affection" v-model="bondEmotionsCurrent" @change="updateEmotions" />
      <input type="checkbox" id="checkbox" name="affectionEmotion" v-bind:value="Emotion.Hatred" v-model="bondEmotionsCurrent" @change="updateEmotions" />
</template>