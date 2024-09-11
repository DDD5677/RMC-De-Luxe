<template>
	<div v-if="!noborder" class="flex gap-4 m-5">

		<button @click="swiper.slidePrev()"
			class="w-16 h-16 md:w-20 md:h-20 border rounded-full flex items-center justify-center" :class="color">
			<ChevronLeftIcon class="w-[2.5rem]" />
		</button>
		<button @click="swiper.slideNext()"
			class="w-16 h-16  md:w-20 md:h-20 border rounded-full flex items-center justify-center " :class="color">
			<ChevronRightIcon class="w-[2.5rem]" />
		</button>
	</div>
	<div v-else class="flex gap-2">

		<button @click="swiper.slidePrev()" class="w-16 h-16 flex items-center justify-center" :class="color">
			<ChevronLeftIcon class="w-10" />
		</button>
		<button @click="swiper.slideNext()" class="w-16 h-16 flex items-center justify-center " :class="color">
			<ChevronRightIcon class="w-10" />
		</button>
	</div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';
import { useSwiper } from 'swiper/vue';
const swiper = useSwiper()
withDefaults(defineProps<{ color?: string, noborder?: boolean }>(), {
	color: 'border-white text-white',
	noborder: false
})

</script>

<style scoped></style>