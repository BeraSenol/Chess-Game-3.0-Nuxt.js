<template>
  <NuxtImg class="u-tile-size z-50" :src="`/pieces/${type}${color}.svg`" :alt="`${type}${color}.svg`" />
</template>

<script lang="ts" setup>
defineProps({
  type: { type: String, required: true },
  color: { type: String, required: true }
})
</script>