<template>
  <div class="absolute flex justify-center items-center indicator u-tile-size"></div>
</template>

<style scoped>
div .highlighted::after {
  content: '';
  background-color: rgba(0, 0, 0, 0.30);
  border-radius: 50%;
  pointer-events: none;
}
</style>