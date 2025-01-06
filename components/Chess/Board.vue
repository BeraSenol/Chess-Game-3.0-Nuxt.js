<template>
  <div class="grid grid-cols-8 grid-rows-8">
    <div v-for="square, index in SQUARES" :key="square"
      :class="chess.squareColor(square) === 'light' ? 'u-tile-light' : 'u-tile-dark'" :id="`${square}`"
      class="u-tile-size relative">
      <ChessTileLabel :square="square" :color="chess.squareColor(square) === 'light'" />
      <ChessPiece v-if="index < 16 || index >= 48" :type="chess.get(square).type" :color="chess.get(square).color"
        @click="highlightMoves(square)" />
      <ChessIndicator :id="`${square}-indicator`" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Chess, SQUARES, type Square } from 'chess.js'

const chess = new Chess();

function highlightMoves(tile: Square): void {
  for (let i = 0; i < chess.moves({ square: tile }).length; i++) {
    document.getElementById(`${chess.moves({ square: tile, verbose: true })[i].to}-indicator`)?.classList.add('highlighted')
  }
}
</script>
