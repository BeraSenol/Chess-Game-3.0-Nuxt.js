<template>
  <UTooltip :text="`Change into ${colorMode.value === 'light' ? 'Dark' : 'Light'} Mode`">
    <UButton class="py-2" :variant="useVariant()"
      :icon="isDark ? 'i-material-symbols-sunny-outline' : 'i-material-symbols-dark-mode-outline'" size="xl"
      @click="isDark = !isDark" />
  </UTooltip>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() { return colorMode.value === 'dark' },
  set() { colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark' }
});
</script>