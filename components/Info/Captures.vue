<template>
  <div class="flex relative h-14 my-2 divide-x-2 u-divide-color">
    <div class="basis-1/2">
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesWhite, 'p') })"
        :key="`pw-captured-${i}`" class="absolute w-6 lg:w-14 h-6 lg:h-14" :style="pieceOffset(i, 'p', true)"
        src="/pieces/pw.svg" alt="pw.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesWhite, 'n') })"
        :key="`nw-captured-${i}`" class="absolute w-6 lg:w-14 h-6 lg:h-14" :style="pieceOffset(i, 'n', true)"
        src="/pieces/nw.svg" alt="nw.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesWhite, 'b') })"
        :key="`bw-captured-${i}`" class="absolute w-6 lg:w-14 h-6 lg:h-14" :style="pieceOffset(i, 'b', true)"
        src="/pieces/bw.svg" alt="bw.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesWhite, 'r') })"
        :key="`rw-captured-${i}`" class="absolute w-6 lg:w-14 h-6 lg:h-14" :style="pieceOffset(i, 'r', true)"
        src="/pieces/rw.svg" alt="rw.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesWhite, 'q') })"
        :key="`qw-captured-${i}`" class="absolute w-6 lg:w-14 h-6 lg:h-14" :style="pieceOffset(i, 'q', true)"
        src="/pieces/qw.svg" alt="qw.svg" />
    </div>
    <div class="basis-1/2 justify-end">
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesBlack, 'q') })"
        :key="`qb-captured-${i}`" class="absolute w-6 lg:w-14 h-6 lg:h-14 l-drop-shadow"
        :style="pieceOffset(i, 'q', false)" src="/pieces/qb.svg" alt="qb.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesBlack, 'r') })"
        :key="`rb-captured-${i}`" class="absolute w-6 lg:w-14 h-6 lg:h-14 l-drop-shadow"
        :style="pieceOffset(i, 'r', false)" src="/pieces/rb.svg" alt="rb.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesBlack, 'b') })"
        :key="`bb-captured-${i}`" class="absolute w-6 lg:w-14 h-6 lg:h-14 l-drop-shadow"
        :style="pieceOffset(i, 'b', false)" src="/pieces/bb.svg" alt="bb.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesBlack, 'n') })"
        :key="`nb-captured-${i}`" class="absolute w-6 lg:w-14 h-6 lg:h-14 l-drop-shadow"
        :style="pieceOffset(i, 'n', false)" src="/pieces/nb.svg" alt="nb.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesBlack, 'p') })"
        :key="`pb-captured-${i}`" class="absolute w-6 lg:w-14 h-6 lg:h-14 l-drop-shadow"
        :style="pieceOffset(i, 'p', false)" src="/pieces/pb.svg" alt="pb.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  capturesWhite: { type: Array, required: true },
  capturesBlack: { type: Array, required: true }
});

// const capturesWhite = ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'b', 'b', 'n', 'n', 'r', 'r', 'q','q'];
// const capturesBlack = ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'b', 'b', 'n', 'n', 'r', 'r', 'q','q'];

function pieceOffset(i: number, type: string, white: boolean): string {
  let offset: number = 0;
  let direction: string = '';
  switch (type) {
    case 'n': offset = 15; break;
    case 'b': offset = 24; break;
    case 'r': offset = 32; break;
    case 'q': offset = 40; break;
    default: offset = 0;
  }
  white ? direction = 'left' : direction = 'right';
  return `${direction}: ${i * 1.2 + offset}%`;
}

function captureCount(captures: any[], type: string): number {
  return captures.filter((piece: string) => piece === type).length
};
</script>

<style scoped>
.l-drop-shadow {
  filter: drop-shadow(0px 0px 2px rgb(255 255 255));
}
</style>