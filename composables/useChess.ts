import { Chess, type Piece, type PieceSymbol, type Square } from 'chess.js';

export const useChess = () => {
  const chess = reactive(new Chess());
  const selectedSquare = ref<Square | null>(null);
  const highlightedSquares = ref<string[]>([]);
  const historySan = ref<string[]>([]);
  const historyLan = ref<string[]>([]);
  const historyCaptureWhite = ref<string[]>([]);
  const historyCaptureBlack = ref<string[]>([]);
  const isPlayerWhite = useState<boolean>('isPlayerWhite', () => true);

  function onSquareClick(square: Square): void {
    highlightMoves(square);
    if (chess.get(square) && chess.get(square).color === chess.turn()) {
      selectedSquare.value = square;
    } else {
      try {
        const move = chess.move({ from: <string>selectedSquare.value, to: square });
        historySan.value.push(move.san);
        historyLan.value.push(move.lan);
        if (move.captured) {
          if (move.color === <PieceSymbol>'b') {
            historyCaptureWhite.value.push(move.captured);
          } else {
            historyCaptureBlack.value.push(move.captured);
          }
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
    isPlayerWhite.value = !isPlayerWhite.value;
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
    historySan,
    historyLan,
    historyCaptureWhite,
    historyCaptureBlack,
    isPlayerWhite,
    onSquareClick,
    chessGet,
    flipBoard
  };
};