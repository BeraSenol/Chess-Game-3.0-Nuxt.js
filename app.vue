<template>
  <main class="bg-gray-900 min-h-screen size-full">
    <NavHeader :fen="chess.fen()" :turn="chess.turn()" />
    <div class="flex justify-center items-center">
      <!-- CHESS BOARD -->
      <div class="flex flex-col">
        <div v-for="rank, i in chess.board()" class="flex">
          <div v-for="file, j in rank" class="relative u-tile-size" :key="`${String.fromCharCode(j + 97)}${8 - i}`"
            :class="chess.squareColor(<Square>`${String.fromCharCode(j + 97)}${8 - i}`) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
            :id="`${String.fromCharCode(j + 97)}${8 - i}`"
            @click="onSquareClick(<Square>`${String.fromCharCode(j + 97)}${8 - i}`)">
            <ChessTileLabel :square="`${String.fromCharCode(j + 97)}${8 - i}`"
              :color="chess.squareColor(<Square>`${String.fromCharCode(j + 97)}${8 - i}`) === 'light'" />
            <ChessPiece v-if="file"
              :key="`${chess.get(<Square>`${String.fromCharCode(j + 97)}${8 - i}`).type}${chess.get(<Square>`${String.fromCharCode(j + 97)}${8 - i}`).color}${<Square>`${String.fromCharCode(j + 97)}${8 - i}`}`"
              :type="chess.get(<Square>`${String.fromCharCode(j + 97)}${8 - i}`).type"
              :color="chess.get(<Square>`${String.fromCharCode(j + 97)}${8 - i}`).color" />
            <ChessIndicator :id="`${<Square>`${String.fromCharCode(j + 97)}${8 - i}`}-indicator`" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { Square } from 'chess.js';
const { chess, onSquareClick } = useChess();
</script>
