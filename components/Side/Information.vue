<template>
    <UCard
        class="w-full bg-gray-200 dark:bg-gray-800 divide-primary-300 dark:divide-primary-700 border-2 u-border-color">
        <template #header>
            <div class="h-10">
                <SideCaptures :captures-white="capturesWhite" :captures-black="capturesBlack" />
            </div>
        </template>
        <UTabs :items="items" class="w-full">
            <template #item="{ item }">
                <UCard>
                    <template #header>
                        <p>{{ item.description }}</p>
                    </template>
                    <div v-if="item.key === 'san'">
                        <SideHistory :history="san" />
                    </div>
                    <div v-else-if="item.key === 'lan'">
                        <SideHistory :history="lan" />
                    </div>
                </UCard>
            </template>
        </UTabs>
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
        san: { type: Object, required: false },
        lan: { type: Object, required: false },
        capturesWhite: { type: Object, required: false },
        capturesBlack: { type: Object, required: false },
    }
};
</script>
