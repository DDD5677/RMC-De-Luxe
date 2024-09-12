<template>
	<div class="border border-secondary-100 py-6 sm:py-7 px-6 h-full flex flex-col">
		<div class="text-lg text-secondary-300"><span>{{ review?.created_at }}</span></div>
		<h6 class="mb-2 sm:mb-6 text-2xl font-medium">{{ review?.name }}</h6>
		<p class="text-sm sm:text-md">{{ checkTextLength(review.content) ? review?.content.slice(0, 420) +
			'...' :
			review?.content }}
		</p>
		<div class="flex-grow flex items-end">
			<span v-if="checkTextLength(review.content)" @click="$emit('open', review)"
				class="text-lg text-main-300 mt-3 inline-block cursor-pointer">Читать
				полностью</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { reviewType } from '@/helpers/types';

const props = withDefaults(defineProps<{ review: reviewType, full?: boolean }>(), {
	full: false
})
const checkTextLength = (text: string) => (text?.length > 420) && !props.full
</script>

<style scoped></style>