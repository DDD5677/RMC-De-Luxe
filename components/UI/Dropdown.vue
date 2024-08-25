<template>
	<div @click="toggleDropdown">
		<button class="px-4 flex justify-between items-center hover:text-main-300"
			:class="{ 'text-main-300': activeRoute }">
			<slot></slot>
			<ChevronUpIcon v-if="collapse" class="w-4 ml-2" />
			<ChevronDownIcon v-else class="w-4 ml-2" />
		</button>
		<ul v-if="collapse" class="" :class="{ 'w-[250%] absolute shadow-xl left-0 z-50': absolute }">
			<li v-for="item in items" :key="item.name" @click="itemAction ? itemAction(item) : console.log('click')"
				class="cursor-pointer  " :class="absolute ? 'with_absolute' : 'without_absolute'">
				<slot name="items" :item="item"></slot>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid';
import type { routeType } from '~/helpers/types';
const route = useRoute()
const activeRoute = computed(() => route.path.split('/')[1] === 'services')
withDefaults(defineProps<{ items: routeType[], itemAction?: Function, absolute?: boolean }>(), {
	absolute: false
})
const collapse = ref(false)
function toggleDropdown() {
	collapse.value = !collapse.value
}
</script>

<style scoped>
.with_absolute {
	@apply hover:bg-main-10 hover:text-main-300 border-b border-secondary-100 last:border-none bg-white;
}

.without_absolute {
	@apply hover:text-main-300;
}
</style>