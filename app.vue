<template>
  <main class="u-bg-100 h-screen overflow-y-hidden overscroll-none transition-all">
    <Navigation :turn="chess.turn()" :in-check="chess.isCheck()" />
    <UNotifications />
    <div class="flex justify-around mx-4 space-x-4">
      <!-- BOARD FOR WHITE -->
      <div v-if="isBoardFlipped" class="flex justify-center select-none">
        <div class="flex flex-col flex-none">
          <div v-for="rank, i in chessboard" class="flex rounded">
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
      <div v-if="!isBoardFlipped" class="flex justify-center select-none">
        <div class="flex flex-col flex-none">
          <div v-for="rank, i in chess.board().reverse()" class="flex">
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
      <Information :san="san" :lan="lan" :fen="fen" :captures-white="capturesWhite" :captures-black="capturesBlack" />
    </div>
  </main>
</template>

<script lang="ts" setup>
const { chess, chessboard, san, lan, fen, capturesWhite, capturesBlack, isBoardFlipped, chessGet, onSquareClick, getSquare } = useChess();
useHead({ htmlAttrs: { lang: 'en' } });
useSeoMeta({ title: 'Pretty Chess' });
</script>
