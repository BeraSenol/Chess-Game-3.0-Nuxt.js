<template>
  <UTooltip :text="`Change into ${colorMode.value === 'light' ? 'Dark' : 'Light'} Mode`">
    <UButton size="xl" :variant="useColorMode().value === 'light' ? 'solid' : 'soft'"
      :icon="isDark ? 'i-material-symbols-sunny-outline' : 'i-material-symbols-dark-mode-outline'"
      class="text-primary-50" @click="isDark = !isDark" />
  </UTooltip>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() { return colorMode.value === 'dark' },
  set() { colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark' }
});
</script>