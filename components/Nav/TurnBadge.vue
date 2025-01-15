<template>
  <div>
    <UBadge v-if="!inCheck" class="text-lg px-4" :variant="useColorMode().value === 'light' ? 'solid' : 'soft'" size="lg"
      color="primary">
      {{ turn === 'w' ? 'White' : 'Black' }} to Play
    </UBadge>
    <UBadge v-if="inCheck" class="text-lg px-4" :variant="useColorMode().value === 'light' ? 'solid' : 'soft'" size="lg"
      color="red">
      {{ turn === 'w' ? 'White' : 'Black' }} is in Check!
    </UBadge>
  </div>
</template>

<script lang="ts" setup>
import type { Square } from 'chess.js';

defineProps({
  turn: { type: String, required: true, default: <Square>'w' },
  inCheck: { type: Boolean, required: true, default: false }
});
</script>