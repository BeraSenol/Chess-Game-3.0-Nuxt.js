<template>
  <div class="flex justify-around items-center w-screen border-b-2 u-border-color h-16 mb-4">
    <NavColorPicker />
    <NavTimeBadge/>
    <NavTurnBadge :turn="turn" :in-check="inCheck" />
    <NavTimeBadge/>
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