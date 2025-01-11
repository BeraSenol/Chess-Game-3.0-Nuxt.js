<template>
  <UPopover :popper="{ placement: 'bottom-start' }" :ui="{ background: 'bg-white dark:bg-gray-800' }">
    <UButton size="lg" class="text-lg py-1.5 px-2.5" color="white" trailing-icon="i-heroicons-chevron-down-20-solid"
      :ui="{ color: { white: { solid: 'dark:bg-gray-800' } } }">
      Color: <span class="text-primary">{{ capitalize(useAppConfig().ui.primary) }}</span>
    </UButton>
    <template #panel="{ close }">
      <div class="grid grid-cols-5">
        <div v-for="color, i in useAppConfig().ui.colors" class="p-2">
          <UBadge v-if="color !== 'primary'" :color="color" @click="useAppConfig().ui.primary = color; close();"
            size="lg" class="w-8 h-8 p-0">
            <UTooltip :text="capitalize(color)">
              <NuxtImg src="pieces/pb.svg" alt="pw.svg" class="w-8 h-8" />
            </UTooltip>
          </UBadge>
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
