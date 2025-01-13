<template>
    <div class="w-full relative rounded-lg divide-y-2 u-divide-color u-border u-border-color" :ui="{ divide: 'divide-y-2' }">
        <UContainer class="h-10 my-4">
            <InfoCaptures :captures-white="capturesWhite" :captures-black="capturesBlack" />
        </UContainer>
        <UTabs :items="items" class="w-full p-4">
            <template #item="{ item }">
                <UCard>
                    <template #header>
                        <p class="text-center">{{ item.description }}</p>
                    </template>
                    <div v-if="item.key === 'san'">
                        <InfoMoveHistory :history="san" />
                    </div>
                    <div v-else-if="item.key === 'lan'">
                        <InfoMoveHistory :history="lan" />
                    </div>
                    <div v-else-if="item.key === 'fen'">
                        <InfoFenHistory :fen="fen" />
                    </div>
                </UCard>
            </template>
        </UTabs>
       <div class="absolute bottom-0 w-full p-4">
        <UButton variant="soft" icon="i-material-symbols:sync" :trailing="true" @click="useChess().flipBoard()">Flip
            Board</UButton>
       </div>
    </div>
</template>


<script lang="ts" setup>
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
        fen: { type: Array, required: false },
        capturesWhite: { type: Object, required: false },
        capturesBlack: { type: Object, required: false },
    }
};
</script>
