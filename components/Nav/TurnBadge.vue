<template>
  <UBadge v-if="!inCheck" class="text-lg" :variant="useColorMode().value === 'light' ? 'solid' : 'soft'" size="lg"
    color="primary">
    {{ turn === 'w' ? 'White' : 'Black' }} to Pla
  </UBadge>
  <UBadge v-if="inCheck" class="text-lg" :variant="useColorMode().value === 'light' ? 'solid' : 'soft'" size="lg"
    color="red">
    {{ turn === 'w' ? 'White' : 'Black' }}
    is in Check!
  </UBadge>
</template>

<script lang="ts" setup>
defineProps({
  turn: { type: String, required: true, default: 'w' },
  inCheck: { type: Boolean, required: true, default: false }
});
</script>