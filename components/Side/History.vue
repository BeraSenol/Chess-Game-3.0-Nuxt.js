<template>
  <div class="grid grid-cols-2 space-y-1 w-full h-96 overflow-auto">
    <div v-for="move, i in history" class="text-lg ">
      <p><span v-if="parseInt(i) % 2 === 0">{{ Math.floor((parseInt(i) + 3) / 2) }}.</span><span
          class="font-extralight">{{ move }}</span></p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    history: { type: Object, required: false }
  }
};
</script>