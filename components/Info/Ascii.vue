<template>
  <div class="flex justify-center items-center text-2xl font-mono" style="height: 30rem;"
    :class="isBoardFlipped ? 'flex-col' : 'flex-col-reverse'">
    <p v-for="line in splitIntoLines(ascii)">
      {{ isBoardFlipped ? line : line.split('').reverse().join('') }}
    </p>
  </div>
</template>

<script lang="ts" setup>
function splitIntoLines(input: string): string[] {
  const lines: string[] = [];
  const lineLength: number = 30
  for (let i = 0; i < input.length; i += lineLength) {
    lines.push(input.slice(i, i + lineLength));
  }
  return lines;
};

defineProps({
  ascii: { type: String, required: true },
  isBoardFlipped: { type: Boolean, default: false, required: true }
})
</script>