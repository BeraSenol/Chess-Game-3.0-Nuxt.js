<template>
  <div class="grid grid-cols-8 grid-rows-8">
    <div v-for="square, index in SQUARES" :key="square"
      :class="chess.squareColor(square) === 'light' ? 'u-tile-light' : 'u-tile-dark'" :id="square"
      class="u-tile-size relative" @click="onSquareClick(square)">
      <ChessTileLabel :square="square" :color="chess.squareColor(square) === 'light'" />
      <ChessPiece v-if="index < 16 || index >= 48" :type="chess.get(square).type" :color="chess.get(square).color"
        :key="`${chess.get(square).type}${chess.get(square).color}${square}`" />
      <ChessIndicator :id="`${square}-indicator`" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Chess, SQUARES, type Square } from 'chess.js'

const chess = reactive(new Chess())
const selectedSquare = ref<Square | null>(null);

const onSquareClick = (square: Square) => {
  for (let i = 0; i < chess.moves({ square: square }).length; i++) {
    document.getElementById(`${(chess.moves({ square: square, verbose: true })[i].to).toString()}-indicator`)?.classList.add('highlighted')
  }
  if (selectedSquare.value === null) {
    if (document.getElementById(square)?.classList.contains('u-tile-light')) {
      document.getElementById(square)?.classList.remove('u-tile-light')
      document.getElementById(square)?.classList.add('u-tile-light-selected')
    } else {
      document.getElementById(square)?.classList.remove('u-tile-dark')
      document.getElementById(square)?.classList.add('u-tile-dark-selected')
    }
    selectedSquare.value = square;
  } else {
    if (chess.move({ from: selectedSquare.value, to: square }) !== null) {
      console.log(chess.ascii())
      // document.getElementById(square)
      // selectedSquare.value = null;
    }
  }
}

// const onSquareClick = (square: Square) => {
//   for (let i = 0; i < chess.moves({ square: square }).length; i++) {
//     document.getElementById(`${(chess.moves({ square: square, verbose: true })[i].to).toString()}-indicator`)?.classList.add('highlighted')
//   }
//   if (selectedSquare.value) {
//     if (chess.move({ from: selectedSquare.value, to: square })) {
//       selectedSquare.value = null
//     } else {
//       selectedSquare.value = square
//     }
//   } else if (chess.get(square)) {
//     selectedSquare.value = square
//   }
// }

// function highlightMoves(tile: Square): void {
//   for (let i = 0; i < chess.moves({ square: tile }).length; i++) {
//     document.getElementById(`${(chess.moves({ square: tile, verbose: true })[i].to).toString()}-indicator`)?.classList.add('highlighted')
//   }
</script>
