<template>
  <UModal>
    <UCard class="text-2xl text-center font-semibold">
      <template #header>
        <p class="">Game Over!</p>
      </template>
      <div class="flex flex-col items-center">
        <ChessboardPiece type="k" :color="turn === 'w' ? 'b' : 'w'"
          :style="turn === 'w' ? 'filter: drop-shadow(0px 0px 2px rgb(255 255 255))' : ''" />
        <p>{{ isCheckmate === true ? 'Victory' : 'Draw' }}</p>
        <div class="font-light text-lg">
          <p>{{ isCheckmate === true ? 'by Checkmate' : '' }}</p>
          <p>{{ isStalemate === true ? 'by Stalemate' : '' }}</p>
          <p>{{ isDrawByFiftyMoves === true ? 'by 50 Move Rule' : '' }}</p>
          <p>{{ isDrawByInsufficientMaterial === true ? 'by 50 Move Rule' : '' }}</p>
          <p>{{ isDrawByThreefoldRepetition === true ? 'by 3 Fold Repetition' : '' }}</p>
        </div>
        <p>
          <span>{{ turn === 'w' ? `${getWinnerColor(turn, isCheckmate)}` : `${getWinnerColor(turn, isCheckmate)}` }}
            <span class="text-3xl diagonal-fractions">
               {{ getWinnerColor(turn, isCheckmate) === '' ? '1/2 - 1/2' : '' }} 
            </span>
          </span>
          <span>{{ isCheckmate === true ? ' won!' : '' }}</span>
        </p>
      </div>
      <template #footer>
        <UButton/>
      </template>
    </UCard>
  </UModal>
</template>

<script lang="ts" setup>
defineProps({
  isCheckmate: { type: Boolean, default: false, required: false },
  isStalemate: { type: Boolean, default: false, required: false },
  isDrawByFiftyMoves: { type: Boolean, default: false, required: false },
  isDrawByInsufficientMaterial: { type: Boolean, default: false, required: false },
  isDrawByThreefoldRepetition: { type: Boolean, default: false, required: false },
  turn: { type: String, required: true }
})

function getWinnerColor(turn: string, isCheckMate: boolean): string {
  if (isCheckMate) {
    return turn === 'w' ? 'Black' : 'White';
  }
  return ''
}
</script>