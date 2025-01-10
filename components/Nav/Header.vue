<template>
  <div class="flex justify-around items-center w-screen border-b-2 u-border-color h-16 mb-4">
    <NavColorPicker />
    <NavTurnBadge :turn="turn" :in-check="inCheck" />
    <NavColorPicker />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    turn: { type: String, required: true, default: 'w' },
    inCheck: { type: Boolean, required: true, default: false },
  }
};
</script>