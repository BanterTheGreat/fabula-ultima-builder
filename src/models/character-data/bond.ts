export enum Emotions {
  None = "none",
  Admiration = "admiration",
  Inferiority = "inferiority",
  Loyalty = "loyalty",
  Mistrust = "mistrust",
  Affection = "affection",
  Hatred = "hatred"
}

export default interface Bond {
  name: string,
  admirationEmotion: Emotions.None | Emotions.Admiration | Emotions.Inferiority,
  loyaltyEmotion: Emotions.None | Emotions.Loyalty | Emotions.Mistrust,
  affectionEmotion: Emotions.None | Emotions.Affection | Emotions.Hatred
}