<template>
	<div class="fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center">
		<div class="w-4/5 md:w-1/2 lg:w-2/5 min-h-20 bg-white relative">
			<span class="absolute top-4 right-4 cursor-pointer">
				<XMarkIcon @click="$emit('close')" class="w-7 text-secondary-400" />
			</span>
			<slot></slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline';


</script>

<style scoped></style>