<template>
  <div class="text-center font-semibold text-2xl font-mono" style="height: 34rem;">
    <p v-for="line in splitIntoLines(ascii)">
      {{ line }}
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
}
</script>

<script lang="ts">
export default {
  props: {
    ascii: { type: String, required: true }
  }
}
</script>