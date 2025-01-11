<template>
  <div class="flex divide-x h-10 divide-primary">
    <div class="flex w-1/2">
      <NuxtImg v-for="capture in capturesWhite" :src="`/pieces/${capture}w.svg`"
      :alt="`${capture}${capture.turn === 'w' ? 'b' : 'w'}.svg`" class="w-10 h-10" />
    </div>
    <div class="flex w-1/2 justify-end">
      <NuxtImg v-for="capture in capturesBlack" :src="`/pieces/${capture}b.svg`"
        :alt="`${capture}${capture.turn === 'w' ? 'b' : 'w'}.svg`" class="w-10 h-10" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    capturesWhite: { type: Object, required: false },
    capturesBlack: { type: Object, required: false },
  }
};
</script>