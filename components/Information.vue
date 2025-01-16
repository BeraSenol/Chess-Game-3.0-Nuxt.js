<template>
    <div class="flex flex-col w-full rounded-lg divide-y-2 u-divide-color u-border u-border-color">
        <InfoCaptures :captures-white="capturesWhite" :captures-black="capturesBlack" />
        <div class="p-4" style="height: 46rem;">
            <UTabs :items="tabs">
                <template #item="{ item }">
                    <UCard>
                        <template #header>
                            <p class="text-lg text-center">{{ item.description }}</p>
                        </template>
                        <InfoTabsMoveHistory v-if="item.key === 'san'" :moves="san" />
                        <InfoTabsMoveHistory v-else-if="item.key === 'lan'" :moves="lan" />
                        <InfoTabsFen v-else-if="item.key === 'fen'" :fen="fen" />
                        <InfoTabsAscii v-else-if="item.key === 'ascii'" :ascii="ascii"
                            :is-board-flipped="isBoardFlipped" />
                        <template v-if="item.key === 'fen'" #footer>
                            <InfoTabsClipboardFen :fen="fen" />
                        </template>
                    </UCard>
                </template>
            </UTabs>
        </div>
        <UTooltip class="flex justify-center items-center h-20 pt-2" text="Flip Chessboard">
            <UButton size="xl" :variant="useVariant()" icon="i-material-symbols-sync" :trailing="true"
                @click="useChess().flipChessboard()" />
        </UTooltip>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    san: { type: Array, required: true },
    lan: { type: Array, required: true },
    fen: { type: String, required: true },
    ascii: { type: String, required: true },
    capturesWhite: { type: Array, required: true },
    capturesBlack: { type: Array, required: true },
    isBoardFlipped: { type: Boolean, required: true },
});

const tabs = [
    { key: 'san', label: 'SAN', description: 'Standard Algebraic Notation' },
    { key: 'lan', label: 'LAN', description: 'Long Algebraic Notation' },
    { key: 'fen', label: 'FEN', description: 'Forsyth Edwards Notation' },
    { key: 'ascii', label: 'ASCII', description: 'ASCII Diagram' }
];
</script>
