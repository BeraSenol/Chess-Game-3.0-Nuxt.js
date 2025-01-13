<template>
  <UButton class="text-lg py-1.5" size="lg" @click="startTimer()"> {{ Math.floor(seconds / 60) }} : {{ (seconds %
    60).toString().padStart(2, '0') }}</UButton class="text-lg">
</template>

<script lang="ts" setup>
const seconds = ref(600);
function startTimer(): void {
  setInterval(() => {
    seconds.value--;
  }, 1000)
}
</script>

<style></style>