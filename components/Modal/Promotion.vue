<template>
  <UModal>
    <UCard class="text-2xl text-center font-semibold">
      <template #header>
        <p>Choose Promotion Piece</p>
      </template>
      <div class="flex justify-around">
        <UButton v-for="piece in pieces" class="h-24 w-24" :variant="useVariant()" @click="const move = chess?.move({ from: <string>selectedSquare, to: square, promotion: piece }); useModal().close();">
          <NuxtImg :src="`pieces/${piece}${turn === 'w' ? 'w' : 'b'}.svg`" class="h-24 w-24" />
        </UButton>
      </div>
    </UCard>
  </UModal>
</template>
<script lang="ts" setup>
import { Chess } from 'chess.js';

defineProps({
  chess: { type: Chess, required: false },
  turn: { type: String, required: true },
  square: { type: String, required: true },
  selectedSquare: { type: String, required: true },
  san: { type: Array, required: true },
  lan: { type: Array, required: true },
});

const pieces: string[] = ['n', 'b', 'r', 'q'];
</script>