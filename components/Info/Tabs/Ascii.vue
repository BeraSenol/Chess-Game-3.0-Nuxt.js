<template>
  <div class="flex justify-center items-center text-2xl font-mono min-h-96"
    :class="isBoardFlipped ? 'flex-col' : 'flex-col-reverse'">
    <p v-for="line in splitIntoLines(ascii)" :key="line">
      {{ isBoardFlipped ? line : line.split('').reverse().join('') }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  ascii: { type: String, required: true },
  isBoardFlipped: { type: Boolean, default: false, required: true }
});

function splitIntoLines(input: string): string[] {
  const output: string[] = [];
  const lineLength: number = 30
  for (let i = 0; i < input.length; i += lineLength) {
    output.push(input.slice(i, i + lineLength));
  }
  return output;
};
</script>