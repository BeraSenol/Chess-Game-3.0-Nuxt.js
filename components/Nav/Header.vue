<template>
  <div class="flex justify-center items-center w-screen border-b-2 h-16 mb-4">
    <UBadge variant="solid" size="lg" :color="turn === 'w' ? 'black' : 'white'">{{ turn === 'w' ? 'White' : 'Black' }} to Play</UBadge>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    fen: { type: String, required: false },
    turn: { type: String, required: true, default: 'w' },
  }
};
</script>