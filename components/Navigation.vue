<template>
  <div class="flex justify-evenly items-center w-screen border-b-4 u-border-color h-16 mb-4">
    <div class="basis-1/5 flex justify-center">
      <NavColorPicker />
    </div>
    <div class="basis-1/5 flex justify-center">
      <NavTimeBadge />
    </div>
    <div class="basis-1/5 flex justify-center">
      <NavTurnBadge :turn="turn" :in-check="inCheck" />
    </div>
    <div class="basis-1/5 flex justify-center">
      <NavTimeBadge />
    </div>
    <div class="basis-1/5 flex justify-center">
      <NavColorMode />
    </div>
  </div>
</template>
<!--  -->
<script lang="ts">
export default {
  props: {
    turn: { type: String, required: true, default: 'w' },
    inCheck: { type: Boolean, required: true, default: false },
  }
};
</script>