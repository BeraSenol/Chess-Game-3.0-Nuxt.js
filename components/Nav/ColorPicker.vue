<template>
  <UPopover :popper="{ placement: 'bottom-start' }">
    <UTooltip text="Choose Your Primary Color">
      <UButton class="text-lg py-1.5 px-2.5" :variant="useColorMode().value === 'light' ? 'solid' : 'soft'" size="lg"
        trailing-icon="i-heroicons-chevron-down-20-solid">
        {{ capitalize(useAppConfig().ui.primary) }}
      </UButton>
    </UTooltip>
    <template #panel="{ close }">
      <div class="grid grid-cols-5 pt-1.5">
        <div v-for="color in useAppConfig().ui.colors" :key="color" class="p-1 px-2"
          @click="useAppConfig().ui.primary = color; close();">
          <UBadge v-if="color !== 'primary'" class="w-8 h-8 p-0" size="lg" :color="color">
            <UTooltip :text="capitalize(color)">
              <NuxtImg class="w-8 h-8" src="pieces/pb.svg" alt="pw.svg" />
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
