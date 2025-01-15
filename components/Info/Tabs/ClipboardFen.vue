<template>
  <UTooltip class="flex flex-col" :popper="{ placement: 'top-start', strategy: 'absolute' }"
    text="Click me to copy FEN into Clipboard">
    <UButton class="flex justify-center items-center text-sm xl:text-lg tracking-tighter xl:tracking-wide px-2"
      :variant="useColorMode().value === 'light' ? 'solid' : 'soft'" :trailing="true"
      icon="i-heroicons-clipboard-document-check" size="xl" @click="useClipboard().copyToClipboard(<string>fen);
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


<script lang="ts" setup>
defineProps({
  fen: { type: String, required: true }
})
</script>