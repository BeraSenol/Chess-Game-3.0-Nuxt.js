import { Chess, type Piece, type Square } from 'chess.js';

export const useChess = () => {
  const chess = reactive(new Chess());
  const chessboard = computed(() => chess.board());
  const selectedSquare = ref<Square | null>(null);
  const highlightedSquares = ref<string[]>([]);
  const san = ref<string[]>([]);
  const lan = ref<string[]>([]);
  const fen = computed(() => chess.fen())
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
          move.color === 'b' ? capturesWhite.value.push(move.captured) : capturesBlack.value.push(move.captured);
        }
      } catch (e) {
        console.error(e);
      } finally {
        selectedSquare.value = null;
      }
    }
  };

  function getSquare(i: number, j: number, white: boolean, object: boolean): any {
    if (object) {
      return white ? <Square>`${String.fromCharCode(j + 97)}${8 - i}` : <Square>`${String.fromCharCode(104 - j)}${i + 1}`;
    }
    return white ? `${String.fromCharCode(j + 97)}${8 - i}` : <Square>`${String.fromCharCode(104 - j)}${i + 1}`;
  };

  function chessGet(sqaure: Square): Piece {
    return chess.get(sqaure);
  }

  function flipBoard(): void {
    isBoardFlipped.value = !isBoardFlipped.value;
  }

  function highlightMoves(square: Square): void {
    highlightedSquares.value.forEach((squareId) => { document.getElementById(squareId)?.classList.remove('highlighted') });
    highlightedSquares.value = [];
    const moves = chess.moves({ square, verbose: true });
    moves.forEach((move) => {
      const indicatorId = `${move.to}-indicator`;
      const element = document.getElementById(indicatorId);
      element?.classList.add('highlighted');
      highlightedSquares.value.push(indicatorId);
    });
  };

  return {
    chess,
    chessboard,
    san,
    lan,
    fen,
    capturesWhite,
    capturesBlack,
    isBoardFlipped,
    onSquareClick,
    getSquare,
    chessGet,
    flipBoard
  };
};