<template>
    <div class="flex flex-col">
        <div v-for="rank, i in chess.board()" class="flex">
            <div v-for="file, j in rank" class="u-tile-size relative" :key="`${String.fromCharCode(j + 97)}${8 - i}`"
                :class="chess.squareColor(<Square>`${String.fromCharCode(j + 97)}${8 - i}`) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
                :id="`${String.fromCharCode(j + 97)}${8 - i}`"
                @click="onSquareClick(<Square>`${String.fromCharCode(j + 97)}${8 - i}`)">
                <ChessTileLabel :square="`${String.fromCharCode(j + 97)}${8 - i}`"
                    :color="chess.squareColor(<Square>`${String.fromCharCode(j + 97)}${8 - i}`) === 'light'" />
                <ChessPiece v-if="file" :type="chess.get(<Square>`${String.fromCharCode(j + 97)}${8 - i}`).type"
                    :color="chess.get(<Square>`${String.fromCharCode(j + 97)}${8 - i}`).color"
                    :key="`${chess.get(<Square>`${String.fromCharCode(j + 97)}${8 - i}`).type}${chess.get(<Square>`${String.fromCharCode(j + 97)}${8 - i}`).color}${<Square>`${String.fromCharCode(j + 97)}${8 - i}`}`" />
                <ChessIndicator :id="`${<Square>`${String.fromCharCode(j + 97)}${8 - i}`}-indicator`" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Chess, type Square } from 'chess.js';

const chess = reactive(new Chess());
const selectedSquare = ref<Square | null>(null);
const highlightedSquares = ref<string[]>([]);

const onSquareClick = (square: Square): void => {
    highlightMoves(square);
    if (chess.get(square) && chess.get(square).color === chess.turn()) {
        selectedSquare.value = square;
    }
    else {
        try {
            chess.move({ from: <string>selectedSquare.value, to: square });
        } catch (e) {
            console.error(e);
        }
        finally {
            selectedSquare.value = null;
        }
    }
}

const highlightMoves = (square: Square): void => {
    for (let i = 0; i < highlightedSquares.value.length; i++) {
        document.getElementById(highlightedSquares.value[i])?.classList.remove('highlighted');
    }
    highlightedSquares.value = [];
    for (let i = 0; i < chess.moves({ square: square }).length; i++) {
        document.getElementById(`${(chess.moves({ square: square, verbose: true })[i].to).toString()}-indicator`)?.classList.add('highlighted')
        highlightedSquares.value.push(`${(chess.moves({ square: square, verbose: true })[i].to).toString()}-indicator`);
    }
}
</script>