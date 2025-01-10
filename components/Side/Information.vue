<template>
    <UCard
        class="w-full bg-gray-200 dark:bg-gray-800 divide-primary-300 dark:divide-primary-700 border-2 u-border-color">
        <template #header>
            <SideCaptures :history-capture-white="historyCaptureWhite" :history-capture-black="historyCaptureBlack" />
        </template>
        <div class="h-max">
            <UTabs :items="items" class="w-full">
                <template #item="{ item }">
                    <UCard>
                        <template #header>
                            <p>{{ item.description }}</p>
                        </template>
                        <div v-if="item.key === 'san'">
                            <SideHistory :history="historySan" />
                        </div>
                        <div v-else-if="item.key === 'lan'">
                            <SideHistory :history="historyLan" />
                        </div>
                    </UCard>
                </template>
            </UTabs>
        </div>
        <template #footer>
            <UButton @click="useChess().flipBoard()">Flip Board</UButton>
        </template>
    </UCard>
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
}]
</script>

<script lang="ts">
export default {
    props: {
        historySan: { type: Object, required: false },
        historyLan: { type: Object, required: false },
        historyCaptureWhite: { type: Object, required: false },
        historyCaptureBlack: { type: Object, required: false },
    }
};
</script>
