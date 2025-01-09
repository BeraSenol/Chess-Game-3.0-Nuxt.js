<!-- <template>
  <div>
    <main class="flex flex-col bg-gray-100 dark:bg-gray-900 min-h-screen size-full">
      <NavHeader :turn="chess.turn()" :in-check="chess.inCheck()" />
      <div class="flex justify-around space-x-4 mx-4">
        <SideHistory :history="history" />
        <div class="flex justify-center">
          <div class="flex flex-col flex-none">
            <div v-for="rank, i in chess.board()" class="flex">
              <div v-for="file, j in rank" v-auto-animate class="relative u-tile-size"
                :key="`${String.fromCharCode(j + 97)}${8 - i}`"
                :class="chess.squareColor(<Square>`${String.fromCharCode(j + 97)}${8 - i}`) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
                :id="`${String.fromCharCode(j + 97)}${8 - i}`"
                @click="onSquareClick(<Square>`${String.fromCharCode(j + 97)}${8 - i}`)">
                <ChessTileLabel :key="`${String.fromCharCode(j + 97)}${8 - i}-label`"
                  :square="`${String.fromCharCode(j + 97)}${8 - i}`"
                  :color="chess.squareColor(<Square>`${String.fromCharCode(j + 97)}${8 - i}`) === 'light'" />
                <ChessPiece v-if="file" :key="`${String.fromCharCode(j + 97)}${8 - i}}-piece`"
                  :type="chess.get(<Square>`${String.fromCharCode(j + 97)}${8 - i}`).type"
                  :color="chess.get(<Square>`${String.fromCharCode(j + 97)}${8 - i}`).color" />
                <ChessIndicator :key="`${String.fromCharCode(j + 97)}${8 - i}}-indicator`"
                  :id="`${<Square>`${String.fromCharCode(j + 97)}${8 - i}`}-indicator`" />
              </div>
            </div>
          </div>
        </div>
        <SideInfo :ascii="chess.fen()" />
      </div>
    </main>
    <UButton label="Flip" @click="console.log(chess.board().reverse())"/>
  </div>
</template> -->

<template>
  <div>
    <main class="flex flex-col bg-gray-100 dark:bg-gray-900 min-h-screen size-full">
      <NavHeader :turn="chess.turn()" :in-check="chess.inCheck()" />
      <div class="flex justify-around space-x-4 mx-4">
        <SideHistory :history="history" />
        <div class="flex justify-center">
          <div class="flex flex-col flex-none">
            <div v-for="rank, i of chess.board().reverse()" class="flex">
              <div v-for="file, j of rank" class="relative u-tile-size"
                :key="`${String.fromCharCode(j + 97)}${i + 1}`"
                :class="chess.squareColor(<Square>`${String.fromCharCode(j + 97)}${i + 1}`) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
                :id="`${String.fromCharCode(j + 97)}${i + 1}`"
                @click="onSquareClick(<Square>`${String.fromCharCode(j + 97)}${i + 1}`)">
                <ChessTileLabel :key="`${String.fromCharCode(j + 97)}${i + 1}-label`"
                  :square="`${String.fromCharCode(j + 97)}${i + 1}`"
                  :color="chess.squareColor(<Square>`${String.fromCharCode(j + 97)}${i + 1}`) === 'light'" />
                <ChessPiece v-if="file" :key="`${String.fromCharCode(j + 97)}${i + 1}}-piece`"
                  :type="chess.get(<Square>`${String.fromCharCode(j + 97)}${i + 1}`).type"
                  :color="chess.get(<Square>`${String.fromCharCode(j + 97)}${i + 1}`).color" />
                <ChessIndicator :key="`${String.fromCharCode(j + 97)}${i + 1}}-indicator`"
                  :id="`${<Square>`${String.fromCharCode(j + 97)}${i + 1}`}-indicator`" />
              </div>
            </div>
          </div>
        </div>
        <SideInfo :ascii="chess.fen()" />
      </div>
    </main>
    <UButton label="Flip" @click="useAppConfig().ui.primary = 'orange'" />
  </div>
</template>

<script lang="ts" setup>
import type { Square } from 'chess.js';
const { chess, history, onSquareClick } = useChess();
</script>
