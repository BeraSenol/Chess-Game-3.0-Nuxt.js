<template>
  <div class="flex flex-col md:flex-row justify-evenly items-center w-screen border-b-4 u-border-color mb-4 p-2">
    <div class="flex justify-start lg:justify-center basis-1/5">
      <NavColorPicker class="" />
    </div>
    <div class="flex justify-evenly basis-3/5">
      <NavTimeBadge class="" />
      <NavTurnBadge class="" :turn="turn" :in-check="inCheck" />
      <NavTimeBadge class="" />
    </div>
    <div class="flex justify-end lg:justify-center basis-1/5 ">
      <NavColorMode class="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  inCheck: { type: Boolean, required: true, default: false },
  turn: { type: String, required: true, default: 'w' }
});
</script>