<template>
  <div class=" z-0">
    <p v-if="square.charAt(0) === 'a' && playerWhite" :class="color ? 'text-primary-800' : 'text-primary-100'"
      class="text-xs lg:text-base absolute left-0.5 -top-0.5">
      {{ square.charAt(1) }}
    </p>
    <p v-if="square.charAt(1) === '1' && playerWhite" :class="color ? 'text-primary-800' : 'text-primary-100'"
      class="text-xs lg:text-base absolute right-1 -bottom-0.5">
      {{ square.charAt(0) }}
    </p>
    <p v-if="square.charAt(0) === 'h' && !playerWhite" :class="color ? 'text-primary-800' : 'text-primary-100'"
      class="text-xs lg:text-base absolute left-0.5 -top-0.5">
      {{ square.charAt(1) }}
    </p>
    <p v-if="square.charAt(1) === '8' && !playerWhite" :class="color ? 'text-primary-800' : 'text-primary-100'"
      class="text-xs lg:text-base absolute right-1 -bottom-0.5">
      {{ square.charAt(0) }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  square: { type: String, required: true },
  color: { type: Boolean, required: true },
  playerWhite: { type: Boolean, default: true, required: true }
})
</script>