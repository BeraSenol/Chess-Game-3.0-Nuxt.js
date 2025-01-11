<template>
  <div>
    <p v-if="square.charAt(0) === 'a' && playerWhite" :class="getTextColor(color)"
      class="absolute left-0.5 -top-0.5 text-xs md:text-base">
      {{ square.charAt(1) }}
    </p>
    <p v-if="square.charAt(1) === '1' && playerWhite" :class="getTextColor(color)"
      class="absolute right-1 -bottom-0.5 text-xs md:text-base">
      {{ square.charAt(0) }}
    </p>
    <p v-if="square.charAt(0) === 'h' && !playerWhite" :class="getTextColor(color)"
      class="absolute left-0.5 -top-0.5 text-xs md:text-base">
      {{ square.charAt(1) }}
    </p>
    <p v-if="square.charAt(1) === '8' && !playerWhite" :class="getTextColor(color)"
      class="absolute right-1 -bottom-0.5 text-xs md:text-base">
      {{ square.charAt(0) }}
    </p>
  </div>
</template>

<script lang="ts" setup>
function getTextColor(color: Boolean): string {
  return color ? 'text-primary-900' : 'text-white';
}
</script>

<script lang="ts">
export default {
  props: {
    square: { type: String, required: true },
    color: { type: Boolean, required: true },
    playerWhite: { type: Boolean, required: true }
  }
};
</script>