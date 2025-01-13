<template>
  <div style="height: 34rem;">
    <InfoFenCopyToClipboard :fen="fen" />
    <InfoFenDeconstructed :fen="fen" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    fen: { type: String, required: false }
  }
};
</script>