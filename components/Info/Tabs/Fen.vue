<template>
  <div class="flex flex-col items-center space-y-1 lg:space-y-2">
    <UTooltip v-for="(rank, i) in fen?.split(' ')[0].split('/')" :key="`rank-${i}`" :text="`${ordinalNumber(i + 1)} Rank`"
      :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm lg:text-lg tracking-widest">{{ rank }}</p>
    </UTooltip>
    <UTooltip :text="fen.split(' ')[1] === 'w' ? 'White to Play' : 'Black to Play'"
      :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm lg:text-lg">{{ fen?.split(' ')[1] }}</p>
    </UTooltip>
    <UTooltip text="Castle Rights" :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm lg:text-lg tracking-widest">{{ fen?.split(' ')[2] }}</p>
    </UTooltip>
    <UTooltip text="En Passant Square" :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm lg:text-lg tracking-widest">{{ fen?.split(' ')[3] }}</p>
    </UTooltip>
    <UTooltip text="Half Moves" :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm lg:text-lg">{{ fen?.split(' ')[4] }}</p>
    </UTooltip>
    <UTooltip text="Full Moves" :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm lg:text-lg">{{ fen?.split(' ')[5] }}</p>
    </UTooltip>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  fen: { type: String, required: true }
});

const ordinalNumber = (num: number): string => {
  switch (num) {
    case 1: return num.toString() + "st";
    case 2: return num.toString() + "nd";
    case 3: return num.toString() + "rd";
    default: return num.toString() + "th";
  }
};
</script>