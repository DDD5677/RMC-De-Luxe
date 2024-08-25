<template>
	<div class="flex items-center py-10 gap-3 text-2xl">
		<span class="bg-main-300 w-6 h-6 rounded-full flex items-center justify-center text-white">
			<CheckIcon class="w-4" />
		</span>
		<span>{{ text }}</span>
	</div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/16/solid';
defineProps<{ text: string }>()

</script>

<style scoped></style>