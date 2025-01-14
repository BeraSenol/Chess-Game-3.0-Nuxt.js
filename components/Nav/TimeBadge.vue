<template>
  <UBadge :variant="useColorMode().value === 'light' ? 'solid' : 'soft'" class="text-lg" size="lg" @click="startTimer()"> {{ Math.floor(seconds / 60) }} : {{ (seconds %
    60).toString().padStart(2, '0') }}</UBadge>
</template>

<script lang="ts" setup>
const seconds = ref(600);
function startTimer(): void {
  setInterval(() => {
    seconds.value--;
  }, 1000)
}
</script>
