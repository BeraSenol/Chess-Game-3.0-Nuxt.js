<template>
  <div class="flex divide-x-2 h-10 u-divide-color">
    <div class="flex basis-1/2">
      <NuxtImg v-for="capture in getCapturedTypeCount(capturesWhite, 'p')" src="/pieces/pw.svg" alt="pw.svg"
        class="w-6 lg:w-10 h-6 lg:h-10" />
      <NuxtImg v-for="capture in getCapturedTypeCount(capturesWhite, 'n')" src="/pieces/nw.svg" alt="nw.svg"
        class="w-6 lg:w-10 h-6 lg:h-10" />
      <NuxtImg v-for="capture in getCapturedTypeCount(capturesWhite, 'b')" src="/pieces/bw.svg" alt="bw.svg"
        class="w-6 lg:w-10 h-6 lg:h-10" />
      <NuxtImg v-for="capture in getCapturedTypeCount(capturesWhite, 'r')" src="/pieces/rw.svg" alt="rw.svg"
        class="w-6 lg:w-10 h-6 lg:h-10" />
      <NuxtImg v-for="capture in getCapturedTypeCount(capturesWhite, 'q')" src="/pieces/qw.svg" alt="qw.svg"
        class="w-6 lg:w-10 h-6 lg:h-10" />
    </div>
    <div class="flex basis-1/2 justify-end">
      <NuxtImg v-for="capture in getCapturedTypeCount(capturesBlack, 'q')" src="/pieces/qb.svg" alt="qb.svg"
        style="filter: drop-shadow(0px 0px 1px rgb(255 255 255))" class="w-6 lg:w-10 h-6 lg:h-10" />
      <NuxtImg v-for="capture in getCapturedTypeCount(capturesBlack, 'r')" src="/pieces/rb.svg" alt="rb.svg"
        style="filter: drop-shadow(0px 0px 1px rgb(255 255 255))" class="w-6 lg:w-10 h-6 lg:h-10" />
      <NuxtImg v-for="capture in getCapturedTypeCount(capturesBlack, 'b')" src="/pieces/bb.svg" alt="bb.svg"
        style="filter: drop-shadow(0px 0px 1px rgb(255 255 255))" class="w-6 lg:w-10 h-6 lg:h-10" />
      <NuxtImg v-for="capture in getCapturedTypeCount(capturesBlack, 'n')" src="/pieces/nb.svg" alt="nb.svg"
        style="filter: drop-shadow(0px 0px 1px rgb(255 255 255))" class="w-6 lg:w-10 h-6 lg:h-10" />
      <NuxtImg v-for="capture in getCapturedTypeCount(capturesBlack, 'p')" src="/pieces/pb.svg" alt="pb.svg"
        style="filter: drop-shadow(0px 0px 1px rgb(255 255 255))" class="w-6 lg:w-10 h-6 lg:h-10" />
    </div>
  </div>
</template>

<script lang="ts" setup>
function getCapturedTypeCount(captures: any, type: string): number {
  switch (type) {
    case 'p':
      return captures.filter((piece: string) => piece === type).length;
    case 'n':
      return captures.filter((piece: string) => piece === type).length;
    case 'b':
      return captures.filter((piece: string) => piece === type).length;
    case 'r':
      return captures.filter((piece: string) => piece === type).length;
    case 'q':
      return captures.filter((piece: string) => piece === type).length;
    default:
      return 0;
  }
}
</script>

<script lang="ts">
export default {
  props: {
    capturesWhite: { type: Object, required: false },
    capturesBlack: { type: Object, required: false },
  }
};
</script>