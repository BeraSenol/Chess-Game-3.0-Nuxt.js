<template>
  <div class="flex justify-center items-center w-screen border-b-2 u-border-color h-16 mb-4">
    <UBadge v-if="!inCheck" variant="subtle" size="lg" color="primary" class="text-lg">{{ turn === 'w' ? 'White' : 'Black' }} to Play</UBadge>
    <UBadge v-if="inCheck" variant="subtle" size="lg" color="red" class="text-lg">{{ turn === 'w' ? 'White' : 'Black' }}
      is in Check!</UBadge>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    turn: { type: String, required: true, default: 'w' },
    inCheck: { type: Boolean, required: true, default: false }
  }
};
</script>