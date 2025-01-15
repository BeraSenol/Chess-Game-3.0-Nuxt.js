<template>
  <main class="u-bg-100 xl:overflow-y-hidden xl:overscroll-none transition-all pb-0 xl:pb-14">
    <Navigation :turn="chess.turn()" :in-check="chess.isCheck()" />
    <div class="flex flex-col xl:flex-row justify-around xl:mx-4 xl:space-x-4">
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
          <div v-for="rank, i in chessboard.toReversed()" class="flex">
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
      <Information class="mt-4 xl:mt-0" :san="san" :lan="lan" :fen="fen" :ascii="ascii" :captures-white="capturesWhite"
        :captures-black="capturesBlack", :is-board-flipped="isBoardFlipped" />
    </div>
    <UModals />
    <UNotifications />
  </main>
</template>

<script lang="ts" setup>
const { chess, chessboard, san, lan, fen, ascii, capturesWhite, capturesBlack, isBoardFlipped, chessGet, onSquareClick, getSquare } = useChess();
useHead({ htmlAttrs: { lang: 'en' } });
useSeoMeta({ title: 'Pretty Chess' });
</script>
