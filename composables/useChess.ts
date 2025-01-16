import { Chess, type Piece, type Square } from 'chess.js';
import ModalGameOver from '~/components/Modal/GameOver.vue';

export const useChess = () => {
  const chess = reactive(new Chess('4k3/4P3/8/4K3/8/8/8/8 w - - 0 78'));
  const chessboard = computed(() => chess.board());
  const san = ref<string[]>([]);
  const lan = ref<string[]>([]);
  const fen = computed(() => chess.fen());
  const ascii = computed(() => chess.ascii());
  const capturesWhite = ref<string[]>([]);
  const capturesBlack = ref<string[]>([]);
  const isBoardFlipped = useState<boolean>('isBoardFlipped', () => true);
  const isCheckmate = computed(() => chess.isCheckmate());
  const isStalemate = computed(() => chess.isStalemate());
  const isDrawByFiftyMoves = computed(() => parseInt(chess.fen().split(' ')[4]) >= 100 ? true : false);
  const isDrawByInsufficientMaterial = computed(() => chess.isInsufficientMaterial());
  const isDrawByThreefoldRepetition = computed(() => chess.isThreefoldRepetition());
  const turn = computed(() => chess.turn());

  const selectedSquare = ref<Square | null>(null);
  const highlightedSquares = ref<string[]>([]);

  function onSquareClick(square: Square): void {
    console.log(chessGet(square));
    console.log(chess.get(square));
    highlightMoves(square);
    if (chess.get(square) && chess.get(square).color === chess.turn()) {
      selectedSquare.value = square;
    } else {
      try {
        const move = chess.move({ from: <string>selectedSquare.value, to: square });
        console.log(move);
        san.value.push(move.san);
        lan.value.push(move.lan);
        if (move.captured) {
          move.color === 'b' ? capturesWhite.value.push(move.captured) : capturesBlack.value.push(move.captured);
        }
        if (chess.isGameOver()) {
          gameOver();
        }
      } catch (e) {
        console.error(e);
      } finally {
        selectedSquare.value = null;
      }
    }
  };

  function getSquare(i: number, j: number, white: boolean, returnObject: boolean): any {
    if (returnObject) {
      return white ? <Square>`${String.fromCharCode(j + 97)}${8 - i}` : <Square>`${String.fromCharCode(104 - j)}${i + 1}`;
    }
    return white ? `${String.fromCharCode(j + 97)}${8 - i}` : <Square>`${String.fromCharCode(104 - j)}${i + 1}`;
  };

  function chessGet(sqaure: Square): Piece {
    return chess.get(sqaure);
  }

  function flipChessboard(): void {
    isBoardFlipped.value = !isBoardFlipped.value;
  }

  function gameOver(): void {
    useModal().open(ModalGameOver, {
      isCheckmate: isCheckmate.value,
      isStalemate: isStalemate.value,
      isDrawByFiftyMoves: isDrawByFiftyMoves.value,
      isDrawByInsufficientMaterial: isDrawByInsufficientMaterial.value,
      isDrawByThreefoldRepetition: isDrawByThreefoldRepetition.value,
      turn: turn.value
    });
  }

  function highlightMoves(square: Square): void {
    highlightedSquares.value.forEach((squareId) => { document.getElementById(squareId)?.classList.remove('u-highlighted') });
    highlightedSquares.value = [];
    const moves = chess.moves({ square, verbose: true });
    moves.forEach((move) => {
      const indicatorId = `${move.to}-indicator`;
      const element = document.getElementById(indicatorId);
      element?.classList.add('u-highlighted');
      highlightedSquares.value.push(indicatorId);
    });
  }


  return {
    chess,
    chessboard,
    san,
    lan,
    fen,
    ascii,
    capturesWhite,
    capturesBlack,
    isBoardFlipped,
    onSquareClick,
    getSquare,
    chessGet,
    flipChessboard,
    gameOver
  };
};