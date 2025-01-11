import { Chess, type Piece, type Square } from 'chess.js';

export const useChess = () => {
  const chess = reactive(new Chess());
  const selectedSquare = ref<Square | null>(null);
  const highlightedSquares = ref<string[]>([]);
  const san = ref<string[]>([]);
  const lan = ref<string[]>([]);
  const capturesWhite = ref<string[]>([]);
  const capturesBlack = ref<string[]>([]);
  const isBoardFlipped = useState<boolean>('isBoardFlipped', () => true);

  function onSquareClick(square: Square): void {
    highlightMoves(square);
    if (chess.get(square) && chess.get(square).color === chess.turn()) {
      selectedSquare.value = square;
    } else {
      try {
        const move = chess.move({ from: <string>selectedSquare.value, to: square });
        san.value.push(move.san);
        lan.value.push(move.lan);
        if (move.captured) {
          move.color.toString() === 'b' ? capturesWhite.value.push(move.captured) : capturesBlack.value.push(move.captured);
        }
      } catch (e) {
        console.error(e);
      } finally {
        selectedSquare.value = null;
      }
    }
  };

  function chessGet(sqaure: Square): Piece {
    return chess.get(sqaure);
  }

  function flipBoard(): void {
    isBoardFlipped.value = !isBoardFlipped.value;
  }

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
    san,
    lan,
    capturesWhite,
    capturesBlack,
    isBoardFlipped,
    onSquareClick,
    chessGet,
    flipBoard
  };
};