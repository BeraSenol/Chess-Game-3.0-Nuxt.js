import { Chess, type Square } from 'chess.js';
import { reactive } from 'vue';

export const useChess = () => {
  const chess = reactive(new Chess());
  const selectedSquare = ref<Square | null>(null);
  const highlightedSquares = ref<string[]>([]);

  const onSquareClick = (square: Square): void => {
    highlightMoves(square);
    if (chess.get(square) && chess.get(square).color === chess.turn()) {
      selectedSquare.value = square;
    } else {
      try {
        chess.move({ from: <string>selectedSquare.value, to: square });
      } catch (e) {
        console.error(e);
      } finally {
        selectedSquare.value = null;
      }
    }
  };

  const highlightMoves = (square: Square): void => {
    for (let i = 0; i < highlightedSquares.value.length; i++) {
      document.getElementById(highlightedSquares.value[i])?.classList.remove('highlighted');
    }
    highlightedSquares.value = [];
    for (let i = 0; i < chess.moves({ square: square }).length; i++) {
      document
        .getElementById(`${chess.moves({ square: square, verbose: true })[i].to}-indicator`)
        ?.classList.add('highlighted');
      highlightedSquares.value.push(`${chess.moves({ square: square, verbose: true })[i].to}-indicator`);
    }
  };

  return {
    chess,
    selectedSquare,
    highlightedSquares,
    onSquareClick,
    highlightMoves
  };
};