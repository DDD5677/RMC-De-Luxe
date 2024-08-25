<template>
	<label v-if="variant === 'box'" class="text-base text-secondary-400 flex flex-col gap-2 justify-start">
		<span>
			<slot></slot>
		</span>
		<input class="border border-secondary-100 outline-none placeholder:text-secondary-300 py-3 px-4" type="text"
			v-bind="$attrs">
	</label>
	<label v-if="variant === 'no-box'"
		class="noBox text-base text-secondary-400 flex flex-col gap-2 justify-start relative">
		<input class="border-b-2 bg-transparent border-secondary-200 outline-none placeholder:text-transparent  py-3 px-1"
			placeholder="text" type="text" v-bind="$attrs">
		<span class="absolute transition-all text-lg">
			<slot></slot>
		</span>
	</label>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'box' | 'no-box' }>(), {
	variant: 'box'
})
</script>

<style scoped>
.noBox:has(input:placeholder-shown) input+span.absolute {
	transform: translateY(12px);
}

.noBox:has(input:focus) input+span.absolute,
.noBox:has(input:autofill) input+span,
.noBox:has(:not(input:placeholder-shown)) input+span {
	transform-origin: left;
	transform: translateY(-15px) scale(.85);
}
</style>