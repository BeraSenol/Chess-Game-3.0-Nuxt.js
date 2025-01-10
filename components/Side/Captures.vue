<template>
  <div class="flex divide-x divide-primary">
    <div class="flex w-1/2">
      <NuxtImg v-for="capture in historyCaptureWhite" :src="`/pieces/${capture}w.svg`"
        :alt="`${capture}${capture.turn === 'w' ? 'w' : 'b'}.svg`" class="w-10 h-10"/>
    </div>
    <div class="flex w-1/2 justify-end">
      <NuxtImg v-for="capture in historyCaptureBlack" :src="`/pieces/${capture}b.svg`"
        :alt="`${capture}${capture.turn === 'w' ? 'w' : 'b'}.svg`" class="w-10 h-10"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    historyCaptureWhite: { type: Object, required: false },
    historyCaptureBlack: { type: Object, required: false },
  }
};
</script>