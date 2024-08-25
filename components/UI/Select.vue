<template>
	<div :style="`width:${width}`" class="relative">
		<button @click="collapse = !collapse" v-bind="$attrs"
			class="flex justify-between items-center border border-secondary-100 w-full py-2 px-3">{{ select
			}}
			<ChevronUpIcon v-if="collapse" class="w-4" />
			<ChevronDownIcon v-else class="w-4" />
		</button>
		<ul v-if="collapse" class="w-full top-[100%] shadow-lg absolute z-50">
			<li v-for="item in items" :key="item" @click="choose(item)"
				class="px-3 py-2 cursor-pointer hover:bg-main-10 hover:text-main-300 border-b border-secondary-100 last:border-none bg-white"
				:class="select === item ? 'bg-main-10 text-main-300 ' : ''">{{ item
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
const props = defineProps<{ items: string[], defaultValue: string, width: string }>()
const collapse = ref(false)
const select = ref('')
const choose = (item: string) => {
	select.value = item
	collapse.value = false
}
onMounted(() => {
	select.value = props.defaultValue
})
</script>

<style scoped></style>
