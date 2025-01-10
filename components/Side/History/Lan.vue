<template>
  <div class="grid grid-cols-2 w-full">
    <div v-for="move, i in historyLan" class="flex text-lg">
      <p v-if="parseInt(i) % 2 === 0" class=" font-bold mr-2">{{ Math.floor((parseInt(i) + 3) / 2) }}.</p>
      <p class="font-extralight">{{ move }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    historyLan: { type: Object, required: false }
  }
};
</script>
