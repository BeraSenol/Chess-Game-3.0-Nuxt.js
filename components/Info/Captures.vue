<template>
  <div class="flex h-12 my-2 divide-x-2 u-divide-color">
    <div class="basis-1/2">
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesWhite, 'p') })"
        :key="`pw-captured-${i}`" class="absolute w-6 lg:w-12 h-6 lg:h-12" :style="`left: ${i * 1.2 + 2}%;`"
        src="/pieces/pw.svg" alt="pw.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesWhite, 'n') })"
        :key="`nw-captured-${i}`" class="absolute w-6 lg:w-12 h-6 lg:h-12" :style="`left: ${i * 1.2 + 16}%;`"
        src="/pieces/nw.svg" alt="nw.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesWhite, 'b') })"
        :key="`bw-captured-${i}`" class="absolute w-6 lg:w-12 h-6 lg:h-12" :style="`left: ${i * 1.2 + 24}%;`"
        src="/pieces/bw.svg" alt="bw.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesWhite, 'r') })"
        :key="`rw-captured-${i}`" class="absolute w-6 lg:w-12 h-6 lg:h-12" :style="`left: ${i * 1.2 + 32}%;`"
        src="/pieces/rw.svg" alt="rw.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesWhite, 'q') })"
        :key="`qw-captured-${i}`" class="absolute w-6 lg:w-12 h-6 lg:h-12" :style="`left: ${i * 1.2 + 40}%;`"
        src="/pieces/qw.svg" alt="qw.svg" />
    </div>
    <div class="basis-1/2 justify-end">
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesBlack, 'q') })"
        :key="`qb-captured-${i}`" class="absolute w-6 lg:w-12 h-6 lg:h-12 l-drop-shadow"
        :style="`right: ${i * 1.2 + 40}%;`" src="/pieces/qb.svg" alt="qb.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesBlack, 'r') })"
        :key="`rb-captured-${i}`" class="absolute w-6 lg:w-12 h-6 lg:h-12 l-drop-shadow"
        :style="`right: ${i * 1.2 + 32}%;`" src="/pieces/rb.svg" alt="rb.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesBlack, 'b') })"
        :key="`bb-captured-${i}`" class="absolute w-6 lg:w-12 h-6 lg:h-12 l-drop-shadow"
        :style="`right: ${i * 1.2 + 24}%;`" src="/pieces/bb.svg" alt="bb.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesBlack, 'n') })"
        :key="`nb-captured-${i}`" class="absolute w-6 lg:w-12 h-6 lg:h-12 l-drop-shadow"
        :style="`right: ${i * 1.2 + 16}%;`" src="/pieces/nb.svg" alt="nb.svg" />
      <NuxtImg v-for="(capture, i) in Array.from({ length: captureCount(capturesBlack, 'p') })"
        :key="`pb-captured-${i}`" class="absolute w-6 lg:w-12 h-6 lg:h-12 l-drop-shadow"
        :style="`right: ${i * 1.2 + 2}%;`" src="/pieces/pb.svg" alt="pb.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  capturesWhite: { type: Array, required: true },
  capturesBlack: { type: Array, required: true }
});

function captureCount(captures: any[], type: string): number {
  return captures.filter((piece: string) => piece === type).length
};
</script>

<style scoped>
.l-drop-shadow {
  filter: drop-shadow(0px 0px 1px rgb(255 255 255));
}
</style>