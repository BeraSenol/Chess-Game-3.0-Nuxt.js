<template>
    <div class="w-full relative rounded-lg divide-y-2 u-divide-color u-border u-border-color"
        :ui="{ divide: 'divide-y-2' }">
        <UContainer class="my-3">
            <InfoCaptures :captures-white="capturesWhite" :captures-black="capturesBlack" />
        </UContainer>
        <UTabs :items="tabs" class="w-full p-4">
            <template #item="{ item }">
                <UCard>
                    <template #header>
                        <p class="text-lg text-center">{{ item.description }}</p>
                    </template>
                    <InfoMoveHistory v-if="item.key === 'san'" :history="san" />
                    <InfoMoveHistory v-else-if="item.key === 'lan'" :history="lan" />
                    <InfoFen v-else-if="item.key === 'fen'" :fen="fen" />
                    <InfoAscii v-else-if="item.key === 'ascii'" :ascii="ascii" />
                    <template v-if="item.key === 'fen'" #footer>
                        <InfoClipboardFen :fen="fen" />
                    </template>
                </UCard>
            </template>
        </UTabs>
        <div class="flex justify-around absolute bottom-0 w-full p-4">
            <UTooltip text="Flip Chessboard" class="flex justify-center">
                <UButton size="xl" variant="soft" icon="i-material-symbols-sync" :trailing="true"
                    @click="useChess().flipChessboard()" />
            </UTooltip>
        </div>
    </div>
</template>


<script lang="ts" setup>
const tabs = [{
    key: 'san',
    label: 'SAN',
    description: 'Standard Algebraic Notation',
}, {
    key: 'lan',
    label: 'LAN',
    description: 'Long Algebraic Notation',
}, {
    key: 'fen',
    label: 'FEN',
    description: 'Forsyth Edwards Notation'
}, {
    key: 'ascii',
    label: 'ASCII',
    description: 'ASCII Diagram'
}];

defineProps({
    san: { type: Array, required: false },
    lan: { type: Array, required: false },
    fen: { type: String, required: false },
    ascii: { type: String, required: true },
    capturesWhite: { type: Array, required: false },
    capturesBlack: { type: Array, required: false },
});
</script>

