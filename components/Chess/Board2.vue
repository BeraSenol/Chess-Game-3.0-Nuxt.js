<template>
  <div class="flex flex-col">
    <div v-for="rank, rankIndex in chess.board()" class="flex">
      <div v-for="file, fileIndex in rank" class="u-tile-size relative"
        :key="`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`"
        :class="chess.squareColor(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
        :id="`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`"
        @click="onSquareClick(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`)">
        <ChessTileLabel :square="`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`"
          :color="chess.squareColor(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`) === 'light'" />
        <ChessPiece v-if="file" :type="chess.get(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`).type"
          :color="chess.get(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`).color"
          :key="`${chess.get(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`).type}${chess.get(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`).color}${<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`}`" />
        <ChessIndicator :id="`${<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`}-indicator`" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Chess, type Square } from 'chess.js';

const chess = reactive(new Chess());
const selectedSquare = ref<Square | null>(null);

const onSquareClick = (square: Square) => {
  for (let i = 0; i < chess.moves({ square: square }).length; i++) {
    document.getElementById(`${(chess.moves({ square: square, verbose: true })[i].to).toString()}-indicator`)?.classList.add('highlighted')
  }
  if (selectedSquare.value === null) {
    selectedSquare.value = square;
  } else {
    try {
      chess.move({ from: selectedSquare.value, to: square });
      console.log(chess.ascii());
      selectedSquare.value = null;
    }
    catch (e) {
      console.error(e);
    }
  }
}
</script>