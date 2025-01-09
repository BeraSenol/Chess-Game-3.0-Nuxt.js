# Setup

Clone:

```
git clone https://github.com/BeraSenol/Chess-Game-Java-2.0.git
```

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
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

# Features

- [x] Chess Board
- [x] Reactive Piece Movement
- [x] Move History
- [x] ColorPicker
- [x] Board Flip
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
  <br>
  <br>

# Acknowledgments

Images found on WikiMedia Commons:<br>
[Table of SVG Chess Pieces](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces)
