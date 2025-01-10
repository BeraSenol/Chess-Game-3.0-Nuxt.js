<template>
  <UBadge v-if="!inCheck" variant="solid" size="lg" :color="turn === 'w' ? 'black' : 'white'" class="text-lg">{{ turn ===
    'w' ? 'White' :
    'Black' }} to Play</UBadge>
  <UBadge v-if="inCheck" variant="solid" size="lg" color="red" class="text-lg">{{ turn === 'w' ? 'White' : 'Black' }}
    is in Check!</UBadge>
</template>

<script lang="ts">
export default {
  props: {
    turn: { type: String, required: true, default: 'w' },
    inCheck: { type: Boolean, required: true, default: false }
  }
};
</script>