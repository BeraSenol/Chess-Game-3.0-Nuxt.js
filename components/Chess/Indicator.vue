<template>
  <div class="u-tile-size absolute flex justify-center items-center indicator"></div>
</template>

<style scoped>
div .highlighted::after {
  content: '';
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  pointer-events: none;
}
</style>