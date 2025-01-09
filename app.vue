<template>
  <main class="flex flex-col bg-gray-100 dark:bg-gray-900 min-h-screen size-full">
    <NavHeader :turn="chess.turn()" :in-check="chess.inCheck()" />
    <div class="flex justify-around space-x-4 mx-4">
      <SideHistory :history="history" />
      <!-- BOARD FOR WHITE -->
      <div v-if="isPlayerWhite" class="flex justify-center">
        <div class="flex flex-col flex-none">
          <div v-for="rank, i of chess.board()" class="flex">
            <div v-for="file, j of rank" class="relative u-tile-size"
              :class="chess.squareColor(getSquareObject(i, j, true)) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
              :id="getSquareString(i, j, true)" @click="onSquareClick(getSquareObject(i, j, true))">
              <ChessTileLabel :square="getSquareString(i, j, true)"
                :color="chess.squareColor(getSquareObject(i, j, true)) === 'light'" :player-white="true" />
              <ChessPiece v-if="file" :key="`${getSquareString(i, j, true)}}-piece`"
                :type="chess.get(getSquareObject(i, j, true)).type"
                :color="chess.get(getSquareObject(i, j, true)).color" />
              <ChessIndicator :id="`${getSquareObject(i, j, true)}-indicator`" />
            </div>
          </div>
        </div>
      </div>
      <!-- BOARD FOR BLACK -->
      <div v-if="!isPlayerWhite" class="flex justify-center">
        <div class="flex flex-col flex-none">
          <div v-for="rank, i of chess.board().reverse()" class="flex">
            <div v-for="file, j of rank.reverse()" class="relative u-tile-size"
              :class="chess.squareColor(getSquareObject(i, j, false)) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
              :id="getSquareString(i, j, false)"
              @click="onSquareClick(getSquareObject(i, j, false)); console.log(getSquareObject(i, j, false))">
              <ChessTileLabel :square="getSquareString(i, j, false)"
                :color="chess.squareColor(getSquareObject(i, j, false)) === 'light'" :player-white="false" />
              <ChessPiece v-if="file" :key="`${getSquareString(i, j, false)}}-piece`"
                :type="chess.get(getSquareObject(i, j, false)).type"
                :color="chess.get(getSquareObject(i, j, false)).color" />
              <ChessIndicator :id="`${getSquareObject(i, j, false)}-indicator`" />
            </div>
          </div>
        </div>
      </div>
      <SideInfo />
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { Square } from 'chess.js';
const { chess, history, isPlayerWhite, onSquareClick, flipBoard } = useChess();

function getSquareString(i: number, j: number, white: boolean): string {
  return white ? `${String.fromCharCode(j + 97)}${8 - i}` : `${String.fromCharCode(104 - j)}${i + 1}`;
}

function getSquareObject(i: number, j: number, white: boolean): Square {
  return white ? <Square>`${String.fromCharCode(j + 97)}${8 - i}` : <Square>`${String.fromCharCode(104 - j)}${i + 1}`;
}
</script>
