<template>
  <UTooltip class="flex flex-col" text="Click me to copy FEN into Clipboard" :popper="{ placement: 'top-start', strategy: 'absolute' }">
    <UButton class="flex justify-center items-center text-sm xl:text-lg tracking-tighter xl:tracking-wide px-2"
      icon="i-heroicons-clipboard-document-check" size="xl"
      :variant="useColorMode().value === 'light' ? 'solid' : 'soft'" :trailing="true" @click="useClipboard().copyToClipboard(<string>fen);
      useToast().add({
        title: 'Succes!',
        description: 'FEN succesfully copied to clipboard',
        icon: 'material-symbols-bookmark-check-outline',
        timeout: 2500
      })">
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