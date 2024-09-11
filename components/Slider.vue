<template>
	<div>
		<swiper :slides-per-view="count" :space-between="space" @swiper="onSwiper" @slideChange="onSlideChange"
			class="h-full">
			<swiper-slide v-for="slide in slides">
				<div :style="`background-image: url(${slide.image})`" class="bg-cover bg-no-repeat bg-center h-full  ">
					<slot name="slides" :slide="slide" :addFavorite="addFavorite">
					</slot>

					<div v-if="dark" class="absolute top-0 left-0 right-0 bg-black/40 bottom-0 z-10"></div>
				</div>
			</swiper-slide>
			<slot name="default"></slot>
			<slot name="navigation">
			</slot>


		</swiper>
	</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
const emit = defineEmits(['favorite'])
const props = withDefaults(defineProps<{ slides: any, dark?: boolean, count?: 'auto' | number, space?: number }>(), {
	dark: false,
	count: 1,
	space: 0
})
const addFavorite = (id: string, value: boolean) => {
	emit('favorite', { id, value })
}
const onSwiper = (swiper: any) => {
	//console.log(swiper);
};
const onSlideChange = () => {
	console.log('slide change');
};

</script>

<style scoped></style>
