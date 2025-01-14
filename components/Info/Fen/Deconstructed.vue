<template>
  <div class="flex flex-col items-center pt-4 space-y-3">
    <UTooltip v-for="rank, i in fen?.split(' ')[0].split('/')" :text="`${getOrdinalNumber(i + 1)} Rank`"
      :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm md:text-lg tracking-widest">{{ rank }}</p>
    </UTooltip>
    <UTooltip :text="fen?.split(' ')[1] === 'w' ? 'White to Play' : 'Black to Play'"
      :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm md:text-lg">{{ fen?.split(' ')[1] }}</p>
    </UTooltip>
    <UTooltip text="Castle Rights" :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm md:text-lg tracking-widest">{{ fen?.split(' ')[2] }}</p>
    </UTooltip>
    <UTooltip text="En Passant Square" :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm md:text-lg tracking-widest">{{ fen?.split(' ')[3] }}</p>
    </UTooltip>
    <UTooltip text="Half Moves" :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm md:text-lg">{{ fen?.split(' ')[4] }}</p>
    </UTooltip>
    <UTooltip text="Full Moves" :popper="{ placement: 'right', arrow: true }">
      <p class="text-sm md:text-lg">{{ fen?.split(' ')[5] }}</p>
    </UTooltip>
  </div>
</template>

<script lang="ts" setup>
const getOrdinalNumber = (num: number): string => {
  const numString = num.toString();
  switch (num) {
    case 1: return numString + "st";
    case 2: return numString + "nd";
    case 3: return numString + "rd";
    default: return numString + "th";
  }
}
</script>

<script lang="ts">
export default {
  props: {
    fen: { type: String, required: false }
  }
};
</script>