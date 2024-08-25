<template>
	<a v-if="link" class="inline-block" :class="white ? 'white_btn' : 'main_btn'">
		<slot></slot>
	</a>
	<button v-else :class="white ? 'white_btn' : 'main_btn'">
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ link?: boolean, white?: boolean }>(), {
	link: false,
	white: false
})
</script>

<style scoped>
.main_btn {
	@apply bg-main-300 py-[0.75rem] px-[3.5rem] text-white font-semibold text-lg
}

.white_btn {
	@apply py-3 px-5 border border-secondary-100 font-medium text-lg
}
</style>