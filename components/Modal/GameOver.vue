<template>
  <UModal>
    <UCard class="text-2xl text-center font-semibold">
      <template #header>
        <p>Game Over</p>
      </template>
      <div class="flex flex-col items-center">
        <ChessboardPiece v-if="isCheckmate" type="k" :color="turn === 'w' ? 'b' : 'w'"
          :style="turn === 'w' ? 'filter: drop-shadow(0px 0px 2px rgb(255 255 255))' : ''" />
        <NuxtImg v-if="!isCheckmate" class="w-32 h-32" src="/wbk.svg" alt="wbk.svg" />
        <p>{{ isCheckmate ? 'Victory' : 'Draw' }}</p>
        <div class="font-light text-base">
          <p>{{ isCheckmate ? 'by Checkmate' : '' }}</p>
          <p>{{ isStalemate ? 'by Stalemate' : '' }}</p>
          <p>{{ isDrawByFiftyMoves ? 'by 50 Move Rule' : '' }}</p>
          <p>{{ isDrawByInsufficientMaterial ? 'by Insufficient Material' : '' }}</p>
          <p>{{ isDrawByThreefoldRepetition ? 'by 3 Fold Repetition' : '' }}</p>
        </div>
        <p>
          <span class="text-3xl diagonal-fractions">
            {{ getWinnerColor(turn, isCheckmate) === '' ? '1/2 - 1/2' : '' }}
          </span>
        </p>
      </div>
      <template #footer>
        <UButton :variant="useVariant()" label="New Game" size='lg' @click="useModal().close(); chess?.reset()" />
      </template>
    </UCard>
  </UModal>
</template>

<script lang="ts" setup>
import { Chess } from 'chess.js';


defineProps({
  chess: { type: Chess, required: false },
  isCheckmate: { type: Boolean, default: false, required: false },
  isStalemate: { type: Boolean, default: false, required: false },
  isDrawByFiftyMoves: { type: Boolean, default: false, required: false },
  isDrawByInsufficientMaterial: { type: Boolean, default: false, required: false },
  isDrawByThreefoldRepetition: { type: Boolean, default: false, required: false },
  turn: { type: String, required: true }
});

function getWinnerColor(turn: string, isCheckMate: boolean): string {
  if (isCheckMate) { return turn === 'w' ? 'Black' : 'White' }
  return ''
}
</script>