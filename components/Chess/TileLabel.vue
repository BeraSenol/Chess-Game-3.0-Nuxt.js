<template>
  <div>
    <p v-if="square.charAt(0) === 'a' && playerWhite" :class="color ? 'text-primary-950' : 'text-white'"
      class="absolute left-0.5 -top-0.5 text-xs md:text-base">
      {{ square.charAt(1) }}</p>
    <p v-if="square.charAt(1) === '1' && playerWhite" :class="color ? 'text-primary-950' : 'text-white'"
      class="absolute right-1 -bottom-0.5 text-xs md:text-base"> {{ square.charAt(0) }} </p>
    <p v-if="square.charAt(0) === 'a' && !playerWhite" :class="color ? 'text-white' : 'text-primary-950'"
      class="absolute left-0.5 -top-0.5 text-xs md:text-base">
      {{ square.charAt(1) }}</p>
    <p v-if="square.charAt(1) === '8' && !playerWhite" :class="color ? 'text-white' : 'text-primary-950'"
      class="absolute right-1 -bottom-0.5 text-xs md:text-base"> {{ String.fromCharCode(201 -
        square.charAt(0).charCodeAt(0)) }} </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    square: { type: String, required: true },
    color: { type: Boolean, required: true },
    playerWhite: { type: Boolean, required: true }
  }
};
</script>