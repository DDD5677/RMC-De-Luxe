<template>
	<div class="fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-40" @click="$emit('toggle', false)">
		<div class="mt-28 sm:mt-40 flex justify-center">
			<div class="w-4/5 sm:w-1/2 lg:w-1/3 relative">
				<input type="text" placeholder="Введите поисковый запрос..." @click.stop
					class="py-4 pl-6 pr-16 w-full rounded-full outline-none text-xl placeholder:text-xl">
				<a href="/search" class="absolute right-3 top-[6px] p-2">
					<MagnifyingGlassIcon class="w-8 text-main-300" />
				</a>
			</div>
			<button class="max-sm:hidden ml-3 px-2" @click="$emit('toggle', false)">
				<XMarkIcon class="w-10 text-white" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/16/solid';


</script>

<style scoped></style>