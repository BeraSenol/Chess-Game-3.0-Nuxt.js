<template>
  <div class="flex divide-x h-10 divide-primary px-5">
    <div class="flex w-1/2  translate-x-5">
      <NuxtImg v-for="capture in capturesWhite" :src="`/pieces/${capture}w.svg`"
        :alt="`${capture}${capture.turn === 'w' ? 'b' : 'w'}.svg`" :class="getFlexOrderWhite(capture)"
        class="w-10 h-10" />
    </div>
    <div class="flex w-1/2  translate-x-5 justify-end">
      <NuxtImg v-for="capture in capturesBlack" :src="`/pieces/${capture}b.svg`"
        :alt="`${capture}${capture.turn === 'w' ? 'b' : 'w'}.svg`" :class="getFlexOrderBlack(capture)"
        class="w-10 h-10" />
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