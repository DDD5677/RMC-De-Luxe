<template>
	<div>
		<section class="gallery pt-[3.75rem] pb-[5rem] lg:pb-[12.5rem]">
			<div class="container px-3">
				<h4 class="title mb-10">Фотогалерея и видеотуры</h4>
				<div>
					<div class="flex gap-3 mb-6">
						<UIButton @click="filter = 'all'" white :class="filter === 'all' ? 'bg-main-300 text-white' : ''">Все
						</UIButton>
						<UIButton @click="filter = 'photo'" white :class="filter === 'photo' ? 'bg-main-300 text-white' : ''">
							Фотографии
						</UIButton>
						<UIButton @click="filter = 'video'" white :class="filter === 'video' ? 'bg-main-300 text-white' : ''">
							Видеотуры
						</UIButton>
					</div>
					<div class="grid lg:grid-cols-3  gap-5 ">
						<div v-for="item in gallery" :key="item.id" class="relative h-[230px] sm:h-[350px] lg:h-[320px]">
							<div class="w-full h-full">
								<img class="w-full h-full object-cover" :src="item.image" alt="gallery image">
							</div>
							<div v-if="item.type == 'video'"
								class="absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center cursor-pointer">
								<img src="@/assets/images/icons/play.svg" alt="play button">
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import galleryImg1 from '@/assets/images/newBuildings/gallery-1.jpg'
import galleryImg2 from '@/assets/images/newBuildings/gallery-2.jpg'
import galleryImg3 from '@/assets/images/newBuildings/catalog-1.jpg'
import galleryImg4 from '@/assets/images/newBuildings/aboutBuilding-1.jpg'
import galleryImg5 from '@/assets/images/newBuildings/infrastructura.jpg'
import galleryImg6 from '@/assets/images/newBuildings/gallery-3.jpg'
import galleryImg7 from '@/assets/images/newBuildings/catalog-1.jpg'
import galleryImg8 from '@/assets/images/newBuildings/gallery-4.jpg'
import galleryImg9 from '@/assets/images/newBuildings/gallery-2.jpg'
const filter = ref('all')
const gallery = ref([
	{
		id: 'gallery-1',
		image: galleryImg1,
		type: 'photo'
	},
	{
		id: 'gallery-2',
		image: galleryImg2,
		type: 'photo'
	},
	{
		id: 'gallery-3',
		image: galleryImg3,
		type: 'video'
	},
	{
		id: 'gallery-4',
		image: galleryImg4,
		type: 'photo'
	},
	{
		id: 'gallery-5',
		image: galleryImg5,
		type: 'video'
	},
	{
		id: 'gallery-6',
		image: galleryImg6,
		type: 'photo'
	},
	{
		id: 'gallery-7',
		image: galleryImg7,
		type: 'video'
	},
	{
		id: 'gallery-8',
		image: galleryImg8,
		type: 'photo'
	},
	{
		id: 'gallery-9',
		image: galleryImg9,
		type: 'photo'
	},
])
</script>

<style scoped></style>