import { Chess, type Square } from 'chess.js';

export const useChess = () => {
  const chess = reactive(new Chess());
  const selectedSquare = ref<Square | null>(null);
  const highlightedSquares = ref<string[]>([]);

  function onSquareClick(square: Square): void {
    highlightMoves(square);
    if (chess.get(square) && chess.get(square).color === chess.turn()) {
      selectedSquare.value = square;
    } else {
      try {
        chess.move({ from: <string>selectedSquare.value, to: square });
        console.log(chess.ascii())
      } catch (e) {
        console.error(e);
      } finally {
        selectedSquare.value = null;
      }
    }
  };

  function highlightMoves(square: Square): void {
    for (let i = 0; i < highlightedSquares.value.length; i++) {
      document.getElementById(highlightedSquares.value[i])?.classList.remove('highlighted');
    }
    highlightedSquares.value = [];
    for (let i = 0; i < chess.moves({ square: square }).length; i++) {
      document.getElementById(`${chess.moves({ square: square, verbose: true })[i].to}-indicator`)?.classList.add('highlighted');
      highlightedSquares.value.push(`${chess.moves({ square: square, verbose: true })[i].to}-indicator`);
    }
  };

  return {
    chess,
    onSquareClick
  };
};