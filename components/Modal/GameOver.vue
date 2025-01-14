<template>
  <UModal>
    <UCard class="text-xl">
      <template #header>
        <p class="text-center">Game Over!</p>
      </template>
      <div class="flex flex-col items-center">
        <ChessboardPiece type="k" :color="turn === 'w' ? 'b' : 'w'"
          :style="turn === 'w' ? 'filter: drop-shadow(0px 0px 2px rgb(255 255 255))' : ''" />
        <p>{{ isCheckmate === true ? 'Victory by Checkmate' : 'Draw' }}</p>
        <p>{{ isStalemate === true ? 'Drew by Stalemate' : '' }}</p>
        <p>
          <span>{{ turn === 'w' ? `${getWinnerColor(turn, isCheckmate)}` : `${getWinnerColor(turn, isCheckmate)}` }}
            <span class="text-3xl diagonal-fractions">{{ getWinnerColor(turn, isCheckmate) === '' ? '1/2 - 1/2' : '' }}</span>
          </span>
          <span>{{ isCheckmate === true ? ' won!' : '' }}</span>
        </p>
      </div>
    </UCard>
  </UModal>
</template>

<script lang="ts" setup>
defineProps({
  isCheckmate: { type: Boolean, default: false, required: false },
  isStalemate: { type: Boolean, default: false, required: false },
  turn: { type: String, required: true }
})

function getWinnerColor(turn: string, isCheckMate: boolean): string {
  if (isCheckMate) {
    return turn === 'w' ? 'Black' : 'White';
  }
  return ''
}
</script>