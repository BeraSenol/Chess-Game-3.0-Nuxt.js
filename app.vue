<template>
  <main class="u-bg-100 md:overflow-y-hidden md:overscroll-none transition-all">
    <Navigation :turn="chess.turn()" :in-check="chess.isCheck()" />
    <div class="flex flex-col md:flex-row justify-around md:mx-4 md:space-x-4">
      <!-- BOARD FOR WHITE -->
      <div v-if="isBoardFlipped" class="flex justify-center select-none">
        <div class="flex flex-col flex-none">
          <div v-for="rank, i in chessboard" class="flex rounded">
            <div v-for="file, j of rank" class="relative u-tile-size"
              :class="chess.squareColor(getSquare(i, j, true, true)) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
              :id="getSquare(i, j, true, false)" @click="onSquareClick(getSquare(i, j, true, true))">
              <ChessboardTileLabel :square="getSquare(i, j, true, false)"
                :color="chess.squareColor(getSquare(i, j, true, true)) === 'light'" :player-white="true" />
              <ChessboardPiece v-if="file" :key="`${getSquare(i, j, true, false)}}-piece`"
                :type="chessGet(getSquare(i, j, true, true)).type"
                :color="chessGet(getSquare(i, j, true, true)).color" />
              <ChessboardIndicator :id="`${getSquare(i, j, true, true)}-indicator`" />
            </div>
          </div>
        </div>
      </div>
      <!-- BOARD FOR BLACK -->
      <div v-if="!isBoardFlipped" class="flex justify-center select-none">
        <div class="flex flex-col flex-none">
          <div v-for="rank, i in chess.board().toReversed()" class="flex">
            <div v-for="file, j of rank.toReversed()" class="relative u-tile-size"
              :class="chess.squareColor(getSquare(i, j, false, true)) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
              :id="getSquare(i, j, false, false)"
              @click="onSquareClick(getSquare(i, j, false, true)); console.log(getSquare(i, j, false, true))">
              <ChessboardTileLabel :square="getSquare(i, j, false, false)"
                :color="chess.squareColor(getSquare(i, j, false, true)) === 'light'" :player-white="false" />
              <ChessboardPiece v-if="file" :key="`${getSquare(i, j, false, false)}}-piece`"
                :type="chessGet(getSquare(i, j, false, true)).type"
                :color="chessGet(getSquare(i, j, false, true)).color" />
              <ChessboardIndicator :id="`${getSquare(i, j, false, true)}-indicator`" />
            </div>
          </div>
        </div>
      </div>
      <Information class="bg-100 mt-4 md:mt-0" :san="san" :lan="lan" :fen="fen" :captures-white="capturesWhite"
        :captures-black="capturesBlack" />
    </div>
    <UModals />
    <UNotifications />
  </main>
</template>

<script lang="ts" setup>
const { chess, chessboard, san, lan, fen, capturesWhite, capturesBlack, isBoardFlipped, chessGet, onSquareClick, getSquare } = useChess();
useHead({ htmlAttrs: { lang: 'en' } });
useSeoMeta({ title: 'Pretty Chess' });
</script>
