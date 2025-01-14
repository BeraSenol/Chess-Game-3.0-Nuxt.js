<template>
  <div class="flex flex-wrap content-start overflow-auto" style="height: 34rem;">
    <p v-for="move, i in history" class="text-lg w-1/2 h-8">
      <span v-if="parseInt(i) % 2 === 0" class="mr-4">{{ Math.floor((parseInt(i) + 3) / 2) }}.</span>
      <span class="font-extralight">{{ move }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  history: { type: Object, required: false }
});
</script>