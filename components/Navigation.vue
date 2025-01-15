<template>
  <div class="flex flex-col md:flex-row justify-evenly items-center w-screen border-b-4 u-border-color mb-4">
    <div class="flex justify-start lg:justify-center basis-1/5">
      <NavColorPicker class="p-2" />
    </div>
    <div class="flex justify-evenly basis-3/5">
      <NavTimeBadge class="p-2 mx-2" />
      <NavTurnBadge class="p-2 mx-2" :turn="turn" :in-check="inCheck" />
      <NavTimeBadge class="p-2 mx-2" />
    </div>
    <div class="flex justify-end lg:justify-center basis-1/5 ">
      <NavColorMode class="p-2" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  inCheck: { type: Boolean, required: true, default: false },
  turn: { type: String, required: true, default: 'w' }
});
</script>