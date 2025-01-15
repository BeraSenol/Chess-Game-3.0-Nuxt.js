<template>
  <div class="flex justify-center items-center absolute u-indicator u-tile-size"></div>
</template>

<style scoped>
div .u-highlighted::after {
  content: '';
  background-color: rgba(0, 0, 0, 0.30);
  border-radius: 50%;
  pointer-events: none;
}
</style>