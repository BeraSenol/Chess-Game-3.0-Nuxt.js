<template>
    <UCard class="w-full bg-gray-200 dark:bg-gray-800 divide-primary-300 dark:divide-primary-700 border-2 u-border-color">
        <template #header>
            <h1 class="text-center font-semibold text-xl tracking-wide">History</h1>
        </template>
        <div class="grid grid-cols-5 w-full">
            <div v-for="move, i in history" :class="parseInt(i) % 2 === 0 ? 'col-span-2' : 'col-span-3'"
                class="flex text-lg">
                <p v-if="parseInt(i) % 2 === 0" class=" font-bold mr-2">{{ Math.floor((parseInt(i) + 3) / 2) }}.</p>
                <p class="font-extralight">{{ move }}</p>
            </div>
        </div>
    </UCard>
</template>

<script lang="ts">
export default {
    props: {
        history: { type: Object, required: false },
    }
};
</script>
