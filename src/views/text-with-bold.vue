<script setup lang="ts">

const props = defineProps<{
  text: string,
}>();

function getTextParts(): { text?: string, bold: boolean, newLine: boolean }[] {

  if (props.text == "" || props.text == undefined || props.text == null) {
    return [];
  }

  var input: string = props.text;

  const amountOfBoldTagsIsEven = (input.match(/__/g) || []).length % 2 == 0;

  if (!amountOfBoldTagsIsEven) {
    return [{ text: input, bold: false, newLine: false }]
  }

  const result: Array<{
    text?: string,
    bold: boolean,
    newLine: boolean,
  }> = []

  var position: number = 0;
  var bolding: boolean = false;

  while (true) {
    const newLineIndex = input.indexOf('\\n', position);
    const boldIndex = input.indexOf("__", position);

    const hasBold = boldIndex != -1;
    const hasNewLine = newLineIndex != -1;

    if (!hasBold && !hasNewLine) {
      // Place the remainder in the array.
      result.push({ text: input.slice(position), bold: bolding, newLine: false });
      break;
    }

    if (newLineIndex < boldIndex && hasNewLine) {
      // We spotted a newline. We slice the current part and add a part which triggers a newLine.
      result.push({ text: input.slice(position, newLineIndex), bold: bolding, newLine: false })
      result.push({ bold: false, newLine: true })
      position = newLineIndex;
    } else {
      // We spotted a bold token. We slice the current part and toggle us bolding until the next part comes through.
      result.push({ text: input.slice(position, boldIndex), bold: bolding, newLine: false })
      bolding = !bolding;
      position = boldIndex;
    }

    position += 2;
  }

  return result;
}
</script>

<template>
  <template v-for="result in getTextParts()">
      <template v-if="result.bold"><strong>{{result.text}}</strong></template>
      <template v-if="result.newLine"><br /></template>
      <template v-if="!result.newLine && !result.bold">{{result.text}}</template>
  </template>
</template>

