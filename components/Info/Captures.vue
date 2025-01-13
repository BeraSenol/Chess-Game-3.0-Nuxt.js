<template>
  <div class="flex divide-x-2 h-10 px-5 u-divide-color">
    <div class="flex basis-1/2">
      <NuxtImg v-for="capture in capturesWhite" :src="`/pieces/${capture}w.svg`"
        :alt="`${capture}${capture.turn === 'w' ? 'b' : 'w'}.svg`" :class="getFlexOrderWhite(capture)"
        class="w-10 h-10 -ml-4" />
    </div>
    <div class="flex basis-1/2 justify-end">
      <NuxtImg v-for="capture in capturesBlack" :src="`/pieces/${capture}b.svg`"
        :alt="`${capture}${capture.turn === 'w' ? 'b' : 'w'}.svg`" :class="getFlexOrderBlack(capture)"
        class="w-10 h-10 -mr-4" style="filter: drop-shadow(0px 0px 1px rgb(255 255 255))" />
    </div>
  </div>
</template>

<script lang="ts" setup>
function getFlexOrderWhite(type: string): string {
  switch (type) {
    case 'p':
      return 'order-1';
    case 'b':
      return 'order-2';
    case 'n':
      return 'order-3';
    case 'r':
      return 'order-4';
    case 'q':
      return 'order-5';
    default:
      return ''
  }
}

function getFlexOrderBlack(type: string): string {
  switch (type) {
    case 'p':
      return 'order-5';
    case 'b':
      return 'order-4';
    case 'n':
      return 'order-3';
    case 'r':
      return 'order-2';
    case 'q':
      return 'order-1';
    default:
      return ''
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