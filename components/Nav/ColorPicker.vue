<template>
  <UPopover mode="hover" :popper="{ placement: 'bottom-start' }">
    <UButton size="lg" class="text-lg text-primary" color="white" trailing-icon="i-heroicons-chevron-down-20-solid">
      <p>Color: <span class="text-primary">{{ capitalize(useAppConfig().ui.primary) }}</span></p>
    </UButton>
    <template #panel="{ close }">
      <div class="grid grid-cols-5">
        <div v-for="color in useAppConfig().ui.colors" class="p-2">
          <UTooltip :text="capitalize(color)">
            <UBadge v-if="color !== 'Primary'" :color="color" @click="close(); useAppConfig().ui.primary = color;"
              size="lg" class="w-8 h-8 p-0">
              <NuxtImg src="pieces/pb.svg" alt="pw.svg" class="w-8 h-8" />
            </UBadge>
          </UTooltip>
        </div>
      </div>
    </template>
  </UPopover>
</template>

<script lang="ts" setup>
function capitalize(text: string): string {
  return String(text).charAt(0).toUpperCase() + String(text).slice(1);
}
</script>
