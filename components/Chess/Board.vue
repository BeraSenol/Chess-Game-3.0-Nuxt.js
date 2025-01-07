<template>
    <div>
        <h1 class="h-16">{{ selectedSquare }}</h1>
        <h1 class="h-16">{{ highlightedSquares }}</h1>
        <div class="flex flex-col">
            <div v-for="rank, rankIndex in chess.board()" class="flex">
                <div v-for="file, fileIndex in rank" class="u-tile-size relative"
                    :key="`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`"
                    :class="chess.squareColor(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`) === 'light' ? 'u-tile-light' : 'u-tile-dark'"
                    :id="`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`"
                    @click="onSquareClick(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`)">
                    <ChessTileLabel :square="`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`"
                        :color="chess.squareColor(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`) === 'light'" />
                    <ChessPiece v-if="file"
                        :type="chess.get(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`).type"
                        :color="chess.get(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`).color"
                        :key="`${chess.get(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`).type}${chess.get(<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`).color}${<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`}`" />
                    <ChessIndicator
                        :id="`${<Square>`${String.fromCharCode(fileIndex + 97)}${8 - rankIndex}`}-indicator`" />
                </div>
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
    removeHighlighedMoves();
    if (chess.get(square) && chess.get(square).color === chess.turn()) {
        selectedSquare.value = square;
        highlightMoves(square);
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
    for (let i = 0; i < chess.moves({ square: square }).length; i++) {
        document.getElementById(`${(chess.moves({ square: square, verbose: true })[i].to).toString()}-indicator`)?.classList.add('highlighted')
        highlightedSquares.value.push(`${(chess.moves({ square: square, verbose: true })[i].to).toString()}-indicator`);
    }
}

const removeHighlighedMoves = (): void => {
    for (let i = 0; i < highlightedSquares.value.length; i++) {
        document.getElementById(highlightedSquares.value[i])?.classList.remove('highlighted');
    }
    highlightedSquares.value = [];
}
</script>