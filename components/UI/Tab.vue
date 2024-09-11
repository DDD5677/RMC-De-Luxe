<template>
	<div>
		<ul class="grid border-b border-secondary-200  grid-cols-3">
			<li v-for="item in items" :key="item.title" @click="activeTab = item.id" class=" text-start  cursor-pointer">
				<span class="py-[1rem] font-semibold inline-block"
					:class="activeTab === item.id ? 'border-main-300 border-b-2 text-main-300' : ' text-secondary-300'">
					{{ item.title }}
				</span>
			</li>
		</ul>
		<div class="py-[1.5rem] tracking-wider">{{ activeItem?.content }}</div>
		<div v-if="activeItem?.destination" class="grid grid-cols-2 gap-12">
			<div v-for="destination in activeItem.destination" class="flex flex-col gap-1">
				<span class="text-2xl sm:text-3xl font-medium">
					{{ destination.name }}
				</span>
				<span class="text-xl text-secondary-300">
					{{ destination.time }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { itemsTabType } from '~/helpers/types';
const props = defineProps<{ items: itemsTabType[] }>()
const activeTab = ref<string>(props.items[0].id)
const activeItem = computed(() => props.items.find((item) => item.id === activeTab.value))
</script>

<style scoped></style>