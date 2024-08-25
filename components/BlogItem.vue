<template>
	<div>
		<div class="h-[19rem] relative ">
			<img class="w-full h-full object-cover" :src="blog.image" alt="">
			<div
				class="absolute w-full h-full flex justify-between items-end bottom-0 text-xl font-medium text-white p-5 bg-gradient-to-b from-black/10 to-black/40">
				<span>{{ blog.createdAt }}</span>
				<span class="flex gap-2">
					<EyeIcon class="w-5" />{{ blog.views }}
				</span>
			</div>
		</div>
		<div>
			<h6 class="text-2xl font-medium my-5">{{ blog.title }}</h6>
			<NuxtLink to="/" class="flex gap-1 text-lg font-semibold">
				<span>Подробнее</span>
				<ArrowRightIcon class="w-4" />
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/16/solid';
import { EyeIcon } from '@heroicons/vue/24/outline';

defineProps<{ blog: any }>()
</script>

<style scoped></style>