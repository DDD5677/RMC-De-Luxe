<template>
	<div>
		<Slider :slides="investmentSlides" dark class="h-[800px]">
			<template #slides="{ slide }">
				<div class="container px-4 flex flex-col h-full relative z-20">
					<div class="flex-[40%] flex-grow"></div>
					<div class="flex-[50%] flex-grow flex flex-col justify-end pb-[4.5rem]">
						<div class="md:w-[80%] xl:w-[50%]">
							<div class="text-white">
								<h1 class="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] font-medium leading-[0.9]">{{ slide.title
									}}</h1>
								<p class="text-xl mt-5">{{ slide.subtitle }}</p>
							</div>
						</div>
					</div>
				</div>
			</template>
		</Slider>
		<section class="dubay  py-[5rem]  lg:py-[15rem]">
			<div class="container xl:flex  gap-20">
				<div class="h-[42rem] xl:w-2/5">
					<img class="w-full h-full object-cover object-center" src="@/assets/images/investment/dubay.jpg"
						alt="Dubay, Burch halifa">
				</div>
				<div class="xl:w-3/5 py-16 text">
					<div class="mb-[70px]">
						<h4 class="title mb-6">Вложите в будущее:<br> Недвижимость в Дубае</h4>
						<p class="text-lg text-secondary-300">
							Дубай, один из самых быстроразвивающихся городов мира, предлагает огромные возможности для
							инвестиций в
							недвижимость. Благоприятный инвестиционный климат, устойчивый рост экономики и высокий уровень
							жизни
							делают этот город привлекательным для инвесторов со всего мира
						</p>
					</div>
					<div class="grid grid-cols-2 gap-x-3 md:gap-x-[100px] gap-y-[70px] text-xl">
						<div class="border-l-4 border-main-300">
							<p class="py-2 px-4">Отсутствие налогов на доходы от недвижимости</p>
						</div>
						<div class="border-l-4 border-main-300">
							<p class="py-2 px-4">Отсутствие налогов на доходы от недвижимости</p>
						</div>
						<div class="border-l-4 border-main-300">
							<p class="py-2 px-4">Отсутствие налогов на доходы от недвижимости</p>
						</div>
						<div class="border-l-4 border-main-300">
							<p class="py-2 px-4">Отсутствие налогов на доходы от недвижимости</p>
						</div>
					</div>
				</div>
			</div>

		</section>
		<section class="map">
			<div class="container">
				<h4 class="title mb-12">Основные районы для инвестиций</h4>
				<div class="relative">


					<Map></Map>
					<div class="w-[420px] absolute top-5 left-5">
						<swiper :pagination="true" :modules="modules" :slides-per-view="1" :space-between="10"
							class="sliderMap">
							<swiper-slide v-for="slide in slidesMap">
								<div class="bg-white">
									<div class="h-[250px]">
										<img class="w-full h-full object-cover" :src="slide.image" alt="downtown">
									</div>
									<div class="py-7 px-6">
										<h6 class="text-3xl font-medium mb-3">{{ slide.title }}</h6>
										<p class="text-lg text-secondary-300">{{ slide.text }}</p>

									</div>
									<div class="flex justify-between items-center px-[18px] pb-7">
										<UIButton link :href="slide.link"> Подробнее</UIButton>
										<UISliderBtns color="border-black text-black" noborder />
									</div>
								</div>

							</swiper-slide>

							<!-- <div class="absolute bottom-[20px] z-50 right-0">
							<UISliderBtns color="border-black text-black" noborder />
						</div> -->


						</swiper>
					</div>
				</div>
				<div class="flex justify-center mt-12">
					<UIButton white>Посмотреть все районы</UIButton>
				</div>
			</div>
		</section>
		<section class="building-types">
			<div class="container">
				<h4 class="title mb-12">Типы недвижимости</h4>
				<div>
					<div v-for="town in towntypes"
						class="flex flex-col justify-between h-full relative z-50 bg-gradient-to-b from-black/10 to-black/50">

						<div class="text-white p-6">
							<p class="text-[2.2rem] font-semibold drop-shadow-lg">{{ town.name }}</p>

						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import investmentImage1 from '@/assets/images/investment-1.jpg'
import imageMap1 from '@/assets/images/investment/downtown-1.jpg'
import imageMap2 from '@/assets/images/investment/downtown-2.jpg'
import imageTown1 from '@/assets/images/investment/town-type-1.jpg'
const modules = [Pagination]
const investmentSlides = ref([
	{
		image: investmentImage1,
		title: 'Инвестиции в недвижимость в Дубае',
		subtitle: 'Узнайте о возможностях и преимуществах инвестиций в Дубае'
	}
])
const slidesMap = ref([
	{
		image: imageMap1,
		title: 'Downtown Dubai',
		text: 'Downtown Dubai — это современный и оживленный район, расположенный в центре Дубая, Объединённые Арабские Эмираты. Здесь находятся знаменитые фонтаны Dubai Fountain, которые устраивают захватывающие водные шоу',
		link: '#'
	},
	{
		image: imageMap2,
		title: 'Downtown Dubai',
		text: 'Downtown Dubai — это современный и оживленный район, расположенный в центре Дубая, Объединённые Арабские Эмираты. Здесь находятся знаменитые фонтаны Dubai Fountain, которые устраивают захватывающие водные шоу',
		link: '#'
	},
	{
		image: imageMap1,
		title: 'Downtown Dubai',
		text: 'Downtown Dubai — это современный и оживленный район, расположенный в центре Дубая, Объединённые Арабские Эмираты. Здесь находятся знаменитые фонтаны Dubai Fountain, которые устраивают захватывающие водные шоу',
		link: '#'
	},
	{
		image: imageMap2,
		title: 'Downtown Dubai',
		text: 'Downtown Dubai — это современный и оживленный район, расположенный в центре Дубая, Объединённые Арабские Эмираты. Здесь находятся знаменитые фонтаны Dubai Fountain, которые устраивают захватывающие водные шоу',
		link: '#'
	},
	{
		image: imageMap1,
		title: 'Downtown Dubai',
		text: 'Downtown Dubai — это современный и оживленный район, расположенный в центре Дубая, Объединённые Арабские Эмираты. Здесь находятся знаменитые фонтаны Dubai Fountain, которые устраивают захватывающие водные шоу',
		link: '#'
	},
	{
		image: imageMap2,
		title: 'Downtown Dubai',
		text: 'Downtown Dubai — это современный и оживленный район, расположенный в центре Дубая, Объединённые Арабские Эмираты. Здесь находятся знаменитые фонтаны Dubai Fountain, которые устраивают захватывающие водные шоу',
		link: '#'
	},
])

const towntypes = ref([
	{
		id: 'towntype-1',
		name: 'Жилые комплексы',
		image: imageTown1
	}
])
</script>

<style lang="scss">
.gmnoprint,
.gm-fullscreen-control {
	display: none;
}

.sliderMap {

	.swiper-pagination {
		top: 240px;
		bottom: auto;
		display: flex;

		.swiper-pagination-bullet {
			flex-grow: 1;
			border-radius: 0;
			height: 3px;
			background-color: rgba(255, 255, 255, 0.6);
			opacity: 1;

			&.swiper-pagination-bullet-active {
				background-color: #fff;
			}
		}
	}
}
</style>