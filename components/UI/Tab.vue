<template>
	<div>
		<ul class="flex gap-4 sm:gap-6 md:gap-10 xl:gap-32 border-b border-secondary-200 ">
			<li v-for="item in items" :key="item.title" @click="activeTab = item.id"
				class=" text-start    py-[1rem] font-semibold cursor-pointer"
				:class="activeTab === item.id ? 'border-main-300 border-b-2 text-main-300' : ' text-secondary-300'">
				{{
					item.title }}</li>
		</ul>
		<div class="py-[1.5rem] tracking-wider">{{ activeItem?.content }}</div>
	</div>
</template>

<script setup lang="ts">
import type { itemsTabType } from '~/helpers/types';

const props = defineProps<{ items: itemsTabType[] }>()
const activeTab = ref<string>(props.items[0].id)
const activeItem = computed(() => props.items.find((item) => item.id === activeTab.value))
</script>

<style scoped></style>