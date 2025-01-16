<template>
  <NuxtImg class="u-tile-size" :src="`/pieces/${type}${color}.svg`" :alt="`${type}${color}.svg`" />
</template>

<script lang="ts" setup>
defineProps({
  type: { type: String || undefined, required: false },
  color: { type: String || undefined, required: false }
})
</script>