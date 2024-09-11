<template>
	<div :style="`width:${width}`" class="relative">
		<button @click="collapse = !collapse" v-bind="$attrs"
			class="flex justify-between items-center relative  border border-secondary-100 w-full py-3 px-5  transition "
			:class="{ 'focus:bg-main-300 focus:text-white bg-main-blue': variant === 'indicator' }">
			<slot v-if="!select"></slot>
			<span v-if="select && variant === 'indicator'"
				class="w-2 h-2 bg-main-300 rounded-full absolute top-2 right-2"></span>
			{{ select?.name }}
			<ChevronUpIcon v-if="collapse" class="ml-2 w-4" />
			<ChevronDownIcon v-else class="ml-2 w-4" />
		</button>
		<ul v-if="collapse" class="min-w-full top-[100%] shadow-lg absolute z-50 max-h-[200px] overflow-y-auto">
			<li v-for="item in items" :key="item.id" @click="choose(item)"
				class="px-4 py-3 cursor-pointer hover:bg-main-10 hover:text-main-300 border-b border-secondary-100 last:border-none bg-white text-nowrap"
				:class="select?.id === item.id ? 'bg-main-10 text-main-300 ' : ''">{{ item.name
				}}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid';
defineOptions({
	//inheritAttrs: false
})
const props = withDefaults(defineProps<{ items: any[], defaultValue?: any, width?: string, variant?: 'default' | 'indicator' }>(), {
	width: 'auto',
	variant: 'default'
})
const collapse = ref(false)
const select = ref<any>(null)
const choose = (item: string) => {
	select.value = item
	collapse.value = false
}
onMounted(() => {
	if (props.defaultValue)
		select.value = props.defaultValue
})
</script>

<style scoped>
ul::-webkit-scrollbar {
	width: 6px;
	background-color: #fff;
}

ul::-webkit-scrollbar-thumb {
	@apply bg-main-300;
	height: 10px;
}
</style>
