<template>
	<a v-if="link" class="inline-block transition" :class="white ? 'white_btn' : 'main_btn'">
		<slot></slot>
	</a>
	<button v-else :class="white ? 'white_btn' : 'main_btn'" class="transition">
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
	@apply bg-main-300 py-3 px-14 text-white font-semibold text-lg hover:bg-main-200 hover:text-white active:bg-main-400 disabled:bg-main-100
}

.white_btn {
	@apply py-3 px-5 border border-secondary-100 font-medium text-lg hover:bg-main-300 hover:text-white active:bg-main-400 disabled:text-secondary-100
}
</style>