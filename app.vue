<template>
  <main class="bg-gray-100 dark:bg-gray-900">
    <NavHeader :turn="chess.turn()" :in-check="chess.isCheck()" />
    <div class="flex justify-around space-x-4 mx-4">
      <!-- BOARD FOR WHITE -->
      <div v-if="isPlayerWhite" class="flex justify-center">
        <div class="flex flex-col flex-none">
          <div v-for="rank, i of chess.board()" class="flex">
            <div v-for="file, j of rank" class="relative u-tile-size"
              :class="chess.squareColor(getSquare(i, j, true, true)) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
              :id="getSquare(i, j, true, false)" @click="onSquareClick(getSquare(i, j, true, true))">
              <ChessTileLabel :square="getSquare(i, j, true, false)"
                :color="chess.squareColor(getSquare(i, j, true, true)) === 'light'" :player-white="true" />
              <ChessPiece v-if="file" :key="`${getSquare(i, j, true, false)}}-piece`"
                :type="chessGet(getSquare(i, j, true, true)).type"
                :color="chessGet(getSquare(i, j, true, true)).color" />
              <ChessIndicator :id="`${getSquare(i, j, true, true)}-indicator`" />
            </div>
          </div>
        </div>
      </div>
      <!-- BOARD FOR BLACK -->
      <div v-if="!isPlayerWhite" class="flex justify-center">
        <div class="flex flex-col flex-none">
          <div v-for="rank, i of chess.board().reverse()" class="flex">
            <div v-for="file, j of rank.reverse()" class="relative u-tile-size"
              :class="chess.squareColor(getSquare(i, j, false, true)) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
              :id="getSquare(i, j, false, false)"
              @click="onSquareClick(getSquare(i, j, false, true)); console.log(getSquare(i, j, false, true))">
              <ChessTileLabel :square="getSquare(i, j, false, false)"
                :color="chess.squareColor(getSquare(i, j, false, true)) === 'light'" :player-white="false" />
              <ChessPiece v-if="file" :key="`${getSquare(i, j, false, false)}}-piece`"
                :type="chessGet(getSquare(i, j, false, true)).type"
                :color="chessGet(getSquare(i, j, false, true)).color" />
              <ChessIndicator :id="`${getSquare(i, j, false, true)}-indicator`" />
            </div>
          </div>
        </div>
      </div>
      <SideInformation :historySan="historySan" :historyLan="historyLan" :history-capture-white="historyCaptureWhite"
        :history-capture-black="historyCaptureBlack" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import type { Square } from 'chess.js';
const { chess, historySan, historyLan, historyCaptureWhite, historyCaptureBlack, isPlayerWhite, chessGet, onSquareClick } = useChess();

function getSquare(i: number, j: number, white: boolean, object: boolean): any {
  if (object) {
    return white ? <Square>`${String.fromCharCode(j + 97)}${8 - i}` : <Square>`${String.fromCharCode(104 - j)}${i + 1}`;
  }
  return white ? `${String.fromCharCode(j + 97)}${8 - i}` : <Square>`${String.fromCharCode(104 - j)}${i + 1}`;
}

useHead({htmlAttrs: {lang: 'en'}});
useSeoMeta({title: 'Pretty Chess'})
</script>
