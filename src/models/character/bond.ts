import type { Emotion } from "@/enums/emotion";

export default interface Bond {
  name: string,
  admirationEmotion: Emotion.None | Emotion.Admiration | Emotion.Inferiority,
  loyaltyEmotion: Emotion.None | Emotion.Loyalty | Emotion.Mistrust,
  affectionEmotion: Emotion.None | Emotion.Affection | Emotion.Hatred
}