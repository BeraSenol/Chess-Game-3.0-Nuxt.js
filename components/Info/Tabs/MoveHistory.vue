<template>
  <div class="flex flex-wrap content-start overflow-auto min-h-96">
    <p v-for="(move, i) in moves" :key="`${i}-${move}`" class="text-lg w-1/2 h-8">
      <span v-if="i % 2 === 0" class="mr-2">{{ Math.floor((i + 3) / 2) }}.</span>
      <span class="" :class="i + 1 === moves?.length ? 'text-primary font-bold' : 'font-extralight' ">{{ move }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  moves: { type: Array, required: false }
});
</script>