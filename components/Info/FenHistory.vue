<template>
  <div class="flex flex-col-reverse h-96 overflow-auto">
    <p v-for="move, i in fen" class="text-lg h-8">
        <span class="mr-4">{{ i + 1 }}.</span><span
          class="font-extralight">{{ move }}</span>
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    fen: { type: Array, required: false }
  }
};
</script>