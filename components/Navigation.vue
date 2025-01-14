<template>
  <div class="flex flex-col md:flex-row justify-evenly items-center w-screen border-b-4 u-border-color mb-4">
    <div class="basis-1/5 flex justify-center">
      <NavColorPicker class="p-2"/>
    </div>
    <div class="flex basis-3/5 justify-evenly">
      <NavTimeBadge class="p-2 mx-2"/>
      <NavTurnBadge class="p-2 mx-2":turn="turn" :in-check="inCheck" />
      <NavTimeBadge class="p-2 mx-2"/>
    </div>
    <div class="basis-1/5 flex justify-center">
      <NavColorMode class="p-2"/>
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