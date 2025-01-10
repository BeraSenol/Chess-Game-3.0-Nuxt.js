# Setup

Clone:

```
git clone https://github.com/BeraSenol/Chess-Game-Java-2.0.git
```

Make sure to install dependencies:

```bash
npm install

pnpm install

yarn install

bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev

pnpm dev

yarn dev

bun run dev
```

## Production

Build the application for production:

```bash
npm run build

pnpm build

yarn build

bun run build
```

Locally preview production build:

```bash
npm run preview

pnpm preview

yarn preview

bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
<br/>
<br/>

# Introduction

Fully functional chess game built in Nuxt.js, Vue.js and Tailwind.css

[Play a Game!](https://pretty-chess.netlify.app)
<br/>
<br/>

# Dependencies/Modules
The app uses [chess.js](https://github.com/jhlywa/chess.js) under the hood, a headless library for move validation, check mate detection etc.

The app is a implementation of HTML elements to their corresponding values within [chess.board()](https://github.com/jhlywa/chess.js?tab=readme-ov-file#board), reactivity provided by Nuxt/Vue.

# Features

- [x] Chess Board
- [x] Piece Movement
- [x] Move History
- [x] ColorPicker
- [x] Board Flip
- [ ] Undo/Redo
- [ ] Importing Position
- [ ] Restore Board
      <br>
      <br>

# Usage

Clicking on piece will reveal it's legal moves, click on a highlited tile to move or re-select another piece.

# Code Overview

`/assets/css/`

- `main.css` Global styling, Tailwind @layer abstraction for most commonly used tailwind classes, local/specific styling is found in `/components`.

`/components`

- `/Chess`

- - `Indicator.vue` Gray circles indicating legal moves.
- - `Piece.vue` Dynamically rendered images based on type & color.
- - `TileLabel.vue` File & rank labels on based on board perspective.

<br>

- `/Nav`

- - `Indicator.vue` Gray circles indicating legal moves.
- - `Piece.vue` Dynamically rendered images based on type & color.
- - `TileLabel.vue` File & rank labels on based on board perspective.

<br>

- `/Side`

- - `History.vue` Shows each move in Standard Algebraic Notation.
- - `Info.vue` Dynamically rendered images based on type & color.

`/composables`

- `/useChess.ts` Reactive chess objects available at top level.
  <br>
  <br>


# Acknowledgments

Images found on WikiMedia Commons:<br>
[Table of SVG Chess Pieces](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces)
