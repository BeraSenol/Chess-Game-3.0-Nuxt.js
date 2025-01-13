<template>
    <div class="w-full relative rounded-lg divide-y-2 u-divide-color u-border u-border-color"
        :ui="{ divide: 'divide-y-2' }">
        <UContainer class="h-10 my-4">
            <InfoCaptures :captures-white="capturesWhite" :captures-black="capturesBlack" />
        </UContainer>
        <UTabs :items="items" class="w-full p-4">
            <template #item="{ item }">
                <UCard>
                    <template #header>
                        <p class="text-lg text-center">{{ item.description }}</p>
                    </template>
                    <div v-if="item.key === 'san'">
                        <InfoMoveHistory :history="san" />
                    </div>
                    <div v-else-if="item.key === 'lan'">
                        <InfoMoveHistory :history="lan" />
                    </div>
                    <div v-else-if="item.key === 'fen'">
                        <InfoFen :fen="fen" />
                    </div>
                </UCard>
            </template>
        </UTabs>
        <div class="absolute bottom-0 w-full p-4">
            <UTooltip text="Flip Chessboard" class="flex justify-center">
                <UButton size="xl" variant="soft" icon="i-material-symbols-sync" :trailing="true"
                    @click="useChess().flipBoard()" />
            </UTooltip>
        </div>
    </div>
</template>


<script lang="ts" setup>
const toast = useToast();
const items = [{
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
}]
</script>

<script lang="ts">
export default {
    props: {
        san: { type: Array, required: false },
        lan: { type: Array, required: false },
        fen: { type: String, required: false },
        capturesWhite: { type: Array, required: false },
        capturesBlack: { type: Array, required: false },
    }
};
</script>
