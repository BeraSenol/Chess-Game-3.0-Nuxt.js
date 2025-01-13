<template>
  <UTooltip class="flex flex-col overflow-auto">
    <UButton icon="i-heroicons-clipboard-document-check" :variant="useColorMode().value === 'light' ? 'solid' : 'soft'"
      size="xl" class="flex text-lg tracking-wide justify-center items-center py-6 h-8" :trailing="true"
      @click="useClipboard().copyToClipboard(<string>fen); useToast().add({ title: 'Succes!', description: 'FEN succesfully copied to clipboard', icon: 'material-symbols:bookmark-check-outline' })">
      {{ fen }}
    </UButton>
  </UTooltip>
</template>

<script lang="ts">
export default {
  props: {
    fen: { type: String, required: false }
  }
};
</script>