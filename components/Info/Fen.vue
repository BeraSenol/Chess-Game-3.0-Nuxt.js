<template>
  <div>
    <UTooltip class="flex flex-col overflow-auto">
      <UButton icon="i-heroicons-clipboard-document-check"
        :variant="useColorMode().value === 'light' ? 'solid' : 'soft'" size="xl"
        class="flex text-lg tracking-wide justify-center items-center py-6 h-8" :trailing="true"
        @click="useClipboard().copyToClipboard(<string>fen); useToast().add({ title: 'Succes!', description: 'FEN succesfully copied to clipboard', icon: 'material-symbols:bookmark-check-outline' })">
        {{ fen }}
      </UButton>
    </UTooltip>
    <div class="flex flex-col items-center pt-6">
      <p v-for="rank, i in fen?.split(' ')[0].split('/')" class="text-lg tracking-widest">{{ rank }}</p>
    </div>
    <div>

    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    fen: { type: String, required: false }
  }
};
</script>