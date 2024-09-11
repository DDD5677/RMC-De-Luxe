<template>
	<div>
		<section id="slider">
			<Slider :slides="building.slides" dark class="h-[800px]">
				<template #default>
					<div class="h-full w-full absolute top-0 z-20">
						<div class="container px-4 flex flex-col  h-full ">
							<div class="flex-[40%] flex-grow"></div>
							<div class="flex-[50%] flex-grow flex flex-col justify-end pb-[5.25rem]">
								<div class="md:w-[80%] xl:w-[50%]">
									<div class="text-white">
										<h1 class="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] font-medium leading-[0.9]">Infinity
										</h1>
										<p class="text-xl mt-5">от $500 000</p>
										<UIButton class="mt-10 mr-5" link href="tel:998-90-338-56-77">Оставить заявку</UIButton>
										<UIButton class="mt-10 w-60 text-center" white link href="tel:998-90-338-56-77">Позвонить
										</UIButton>
									</div>
								</div>
							</div>
						</div>
					</div>
				</template>
				<template #navigation>
					<div class="container relative bottom-0">
						<div class="absolute left-0 top-[-400px] md:left-auto md:top-auto md:right-0 md:bottom-[70px] z-50">
							<UISliderBtns />
						</div>
					</div>
				</template>
			</Slider>
		</section>
		<section class="navigation py-10 ">
			<div class="container">
				<swiper :slides-per-view="'auto'" class="h-[100px]" :freeMode="true" :modules="modules">
					<swiper-slide v-for="nav in navigation" style="width: max(16%,200px);"
						class="flex items-center justify-center">
						<NuxtLink :to="{ path: `#${nav.link}`, query: { sectionId: nav.link } }"
							class="py-8 cursor-pointer text-xl flex justify-center border-b-2 "
							:class="{ 'border-main-300 font-semibold text-main-300': route.query.sectionId === nav.link, 'border-secondary-100': route.query.sectionId !== nav.link }">
							{{ nav.name }}
						</NuxtLink>
					</swiper-slide>
				</swiper>
			</div>
		</section>
		<section class="py-[5rem] lg:py-[12.5rem]" id="about">
			<div class="container relative px-3">
				<swiper :slides-per-view="1" :space-between="30" class="h-full">
					<swiper-slide v-for="slide in aboutBuilding">
						<div class="max-sm:pt-[240px] sm:max-lg:pt-[290px] max-lg:pb-28 flex flex-col-reverse lg:flex-col">
							<div class="lg:h-[360px] flex justify-end">
								<p class="lg:w-1/2 text-lg sm:text-xl mt-7">
									{{ slide.text }}
								</p>
							</div>
							<div class="h-[250px] sm:h-[400px] lg:h-[500px]">
								<img class="h-full w-full object-cover" :src="slide.image" alt="">
							</div>
						</div>
					</swiper-slide>
					<div
						class="absolute top-0 w-full flex justify-between lg:items-end z-20 max-lg:flex-col max-lg:items-start max-lg:h-full">
						<div class="bg-white">
							<h4 class="font-medium text-[3rem] sm:text-[4rem] lg:text-[5rem] my-10">Infinity <br> Клубный дом
							</h4>
							<UIButton>Позвонить</UIButton>
						</div>
						<div class="flex justify-start w-1/2">
							<UISliderBtns color="border-black text-black md:w-16 md:h-16" class="xl:m-0"></UISliderBtns>
						</div>
					</div>
				</swiper>
			</div>
		</section>
		<section class="gallery overflow-hidden pt-[5rem]">
			<div class="container">
				<h4 class="title mb-10">Фотогалерея и видеотуры</h4>
				<swiper :slides-per-view="'auto'" :space-between="10" class="h-[230px] sm:h-[450px] xl:h-[650px]"
					style="overflow: visible;">
					<swiper-slide v-for="slide in gallerySlides" style="width:80%" v-slot="options">
						<div :style="`background-image: url(${slide.image})`" class="bg-cover bg-no-repeat bg-center h-full ">

						</div>
						<div v-if="!options.isActive" class="absolute top-0 left-0 right-0 bg-black/50 bottom-0 z-10"></div>
					</swiper-slide>
					<div class="max-xl:hidden absolute top-[-130px] right-0">
						<UISliderBtns color="border-black text-black">
						</UISliderBtns>
					</div>
				</swiper>
				<div class="flex justify-center mt-16">
					<UIButton link :href="`/buildings/${route.params.id}/gallery`">Посмотреть всё</UIButton>
				</div>
			</div>
		</section>
		<section class="plans py-[5rem] lg:py-[12.5rem]">
			<div class="container px-3">
				<h4 class="title mb-12">Планировки и доступные квартиры</h4>
				<div class="flex mb-7">
					<UISelect :items="countRooms" variant="indicator">Количество комнат</UISelect>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					<div v-for="plan in roomPlans" :key="plan.id"
						class="px-4 border border-secondary-100 cursor-pointer relative shadow-md"
						@click="togglePlan(plan.id)">
						<div class="h-[256px] sm:h-[345px]">
							<img class="h-full w-full object-contain" :src="plan.image" alt="plan">
						</div>
						<h6 class="text-2xl font-medium mt-6 mb-3">{{ plan.name }}</h6>
						<ul class="text-xl text-secondary-300 mb-6">
							<li class="flex justify-between mb-2"><span>Этаж</span><span>{{ plan.floor }}</span></li>
							<li class="flex justify-between mb-2"><span>Дом</span><span>{{ plan.house }}</span></li>
							<li class="flex justify-between mb-2"><span>Подъезд</span><span>{{ plan.entrance }}</span></li>
							<li class="flex justify-between mb-2"><span>Комнат</span><span>{{ plan.room }}</span></li>
						</ul>
						<div class="py-6 border-t border-secondary-100 text-2xl text-main-300">
							${{ plan.price }}
						</div>
						<div v-if="selectedPlan === plan.id"
							class="pb-6 px-4 absolute bg-white w-full left-[-0.5px] z-20 border-x border-b border-secondary-100 shadow-md"
							style="width:calc(100% + 1.5px)">
							<UIButton class="w-full">Забронировать</UIButton>
						</div>
					</div>
				</div>
			</div>
			<div class="flex justify-center mt-14">
				<UIButton>Загрузить все</UIButton>
			</div>
		</section>
		<section class="terms">
			<div class="container px-3">
				<h4 class="title mb-4">Условия покупки</h4>
				<p class="text-xl text-secondary-400 lg:w-1/2">Процесс покупки недвижимости в нашем агентстве разработан
					таким
					образом,чтобы обеспечить максимальное удобство и прозрачность для наших клиентов</p>
				<div>
					<div class="lg:flex lg:justify-between py-6 sm:py-7 lg:py-10 border-b border-secondary-100">
						<h6 class="text-2xl font-medium mb-4 sm:mb-5">Требуемые документы</h6>
						<div class="lg:w-1/2">
							<p class="mb-2 sm:mb-3">Физ.лицам: паспорт, ИНН</p>
							<p>Юр.лицам: учредительные документы, доверенность</p>
						</div>
					</div>
					<div class="lg:flex lg:justify-between py-6 sm:py-7 lg:py-10 border-b border-secondary-100">
						<h6 class="text-2xl font-medium mb-4 sm:mb-5">Финансовые условия</h6>
						<div class="lg:w-1/2">
							<p class="mb-2 sm:mb-3">Способы оплаты: наличные, банковский перевод, ипотека</p>
							<p>Доп.расходы: налоги, комиссия агентства, нотариальные услуги</p>
						</div>
					</div>
					<div class="lg:flex lg:justify-between py-6 sm:py-7 lg:py-10 border-b border-secondary-100">
						<h6 class="text-2xl font-medium mb-4 sm:mb-5">Ипотека и кредитование</h6>
						<div class="lg:w-1/2">
							<p class="mb-2 sm:mb-3">Варианты ипотеки</p>
							<p>Сотрудничающие банки</p>
						</div>
					</div>
					<div class="lg:flex lg:justify-between py-6 sm:py-7 lg:py-10 border-b border-secondary-100">
						<h6 class="text-2xl font-medium mb-4 sm:mb-5">Гарантии и обязательства</h6>
						<div class="lg:w-1/2">
							<p class="mb-2 sm:mb-3">Физ.лицам: паспорт, ИНН</p>
							<p>Юр.лицам: учредительные документы, доверенность</p>
						</div>
					</div>
					<div class="lg:flex lg:justify-between py-6 sm:py-7 lg:py-10 border-b border-secondary-100">
						<h6 class="text-2xl font-medium mb-4 sm:mb-5">Условия возврата и расторжения</h6>
						<div class="lg:w-1/2">
							<p class="mb-2 sm:mb-3">Порядок расторжения договора</p>
							<p>Условия возврата средств (если применимо)</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="infrastructura py-[5rem] lg:py-[12.5rem]">
			<div class="container px-3">
				<div class="flex flex-col lg:flex-row justify-between">
					<div class="w-1/2 max-lg:hidden">
						<img class="w-full h-full object-cover" :src="infrastructuraImg" alt="">
					</div>
					<div class="lg:w-1/2 lg:pl-14">
						<h4 class="title mb-10">Инфраструктура района</h4>
						<div class="w-full my-10 lg:hidden">
							<img class="w-full h-full object-cover" :src="galleryImg1" alt="">
						</div>
						<UITab :items="infrastructuraTabItems" class=" text-xl"></UITab>
					</div>
				</div>
			</div>
		</section>
		<section class="reviews overflow-hidden ">
			<div class="container px-3">
				<h4 class="title mb-12">Отзывы покупателей</h4>
				<swiper :breakpoints="{
					'320': {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					'640': {
						slidesPerView: 2,
						spaceBetween: 16,
					},
					'1024': {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					'1578': {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				}" style="overflow: visible;" class="min-h-[320px] sm:h-[380px] lg:[300px] xl:h-[380px] 2xl:h-[400px]">
					<swiper-slide v-for="review in reviewSlides" class="h-full">
						<div class="border border-secondary-100 py-6 sm:py-7 px-6 h-full flex flex-col">
							<div class="text-lg text-secondary-300"><span>{{ review.created_at }}</span></div>
							<h6 class="mb-2 sm:mb-6 text-2xl font-medium">{{ review.name }}</h6>
							<p class="text-sm sm:text-md">{{ checkTextLength(review.content) ? review.content.slice(0, 420) +
								'...' :
								review.content }}
							</p>
							<div class="flex-grow flex items-end">
								<span v-if="checkTextLength(review.content)"
									class="text-lg text-main-300 mt-3 inline-block">Читать
									полностью</span>
							</div>
						</div>
					</swiper-slide>

				</swiper>
				<div class="flex justify-center mt-4 sm:mt-16">
					<UIButton link href="/">Все отзывы</UIButton>
				</div>
			</div>
		</section>
		<Calculation class="py-[5rem]  lg:py-[12.5rem]" />
		<BuyProcess />
		<Contacts class="py-[5rem]  lg:py-[12.5rem]" />
		<section class="other_buildings pb-[5rem] lg:pb-[12.5rem]">
			<div class="container px-3">
				<h4 class="title mb-10">Другие ЖК</h4>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
					<div v-for="building in catalogBuildings" :key="building.id"
						:style="`background-image: url(${building.image})`"
						class="h-[400px] sm:h-[500px] xl:h-[600px] bg-center bg-cover max-sm:last:hidden lg:last:hidden">
						<div
							class="flex flex-col justify-between h-full relative z-2 bg-gradient-to-b from-black/10 to-black/50">
							<div class="flex justify-end p-3">
								<HeartIconSolid v-if="building.isFavourite" @click="addFavourite(building.id, false)"
									class="w-10 cursor-pointer text-white" />
								<HeartIcon v-else class="w-10 cursor-pointer text-white"
									@click="addFavourite(building.id, true)" />
							</div>
							<div class="text-white p-6">
								<NuxtLink to="/buildings/infinity" class="text-[2.2rem] font-semibold drop-shadow-lg">{{
									building.name }}</NuxtLink>
								<p class="text-xl font-medium">от {{ building.price }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
const modules = [FreeMode]
import buildingSlideImg1 from '@/assets/images/newBuildings/catalog-1.jpg'
import buildingSlideImg2 from '@/assets/images/newBuildings/catalog-2.jpg'
import buildingSlideImg3 from '@/assets/images/newBuildings/catalog-3.jpg'
import aboutBuildingImg1 from '@/assets/images/newBuildings/aboutBuilding-1.jpg'
import galleryImg1 from '@/assets/images/newBuildings/gallery-1.jpg'
import galleryImg2 from '@/assets/images/newBuildings/gallery-2.jpg'
import planImg1 from '@/assets/images/newBuildings/plans/plan-1.png'
import planImg2 from '@/assets/images/newBuildings/plans/plan-2.png'
import planImg3 from '@/assets/images/newBuildings/plans/plan-3.png'
import planImg4 from '@/assets/images/newBuildings/plans/plan-4.png'
import infrastructuraImg from '@/assets/images/newBuildings/infrastructura.jpg'
import catalogImage2 from '@/assets/images/newBuildings/catalog-2.jpg';
import catalogImage3 from '@/assets/images/newBuildings/catalog-3.jpg';
import catalogImage4 from '@/assets/images/newBuildings/catalog-4.jpg';
import catalogImage5 from '@/assets/images/newBuildings/catalog-5.jpg';
import { HeartIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
import type { itemsTabType } from '~/helpers/types';
const route = useRoute()
// watch(route.query, () => {
// 	const section = document.getElementById(String(route.query.sectionId))
// 	if (route.query.sectionId) {
// 		const sectionTop = section?.offsetTop
// 		window.scrollTo({
// 			top: sectionTop,
// 			behavior: "smooth"
// 		});
// 	}
// })
const navigation = ref([
	{
		id: 'nav-1',
		name: 'О комплексе',
		link: 'about'
	},
	{
		id: 'nav-2',
		name: 'Галерея',
		link: 'gallery'
	},
	{
		id: 'nav-3',
		name: 'Планировки',
		link: 'plans'
	},
	{
		id: 'nav-4',
		name: 'Условия покупки',
		link: 'terms'
	},
	{
		id: 'nav-5',
		name: 'Инфраструктура',
		link: 'infrastructure'
	},
	{
		id: 'nav-6',
		name: 'Отзывы',
		link: 'reviews'
	},
])
const building = ref({
	slides: [
		{
			id: 'buildingSlide-1',
			image: buildingSlideImg1
		},
		{
			id: 'buildingSlide-2',
			image: buildingSlideImg2
		},
		{
			id: 'buildingSlide-3',
			image: buildingSlideImg3
		},
	]
})
const aboutBuilding = ref([
	{
		id: 'aboutBuilding-1',
		image: aboutBuildingImg1,
		text: `Дом имеет свой приватный, закрытый двор, с несколькими зонами отдыха для взрослых и детей. 
			Отдельно предусмотрено помещение для консьержа и охраны. Из окон квартир открывается вид на эксклюзивный
		 ландшафтный двор-парк общей площадью более 1 Га, с прогулочными аллеями, водными объектами и летним кинотеатром.`
	},
	{
		id: 'aboutBuilding-2',
		image: aboutBuildingImg1,
		text: `Дом 2 имеет свой приватный, закрытый двор, с несколькими зонами отдыха для взрослых и детей. 
			Отдельно предусмотрено помещение для консьержа и охраны. Из окон квартир открывается вид на эксклюзивный
		 ландшафтный двор-парк общей площадью более 1 Га, с прогулочными аллеями, водными объектами и летним кинотеатром.`
	},
	{
		id: 'aboutBuilding-3',
		image: aboutBuildingImg1,
		text: `Дом 3 имеет свой приватный, закрытый двор, с несколькими зонами отдыха для взрослых и детей. 
			Отдельно предусмотрено помещение для консьержа и охраны. Из окон квартир открывается вид на эксклюзивный
		 ландшафтный двор-парк общей площадью более 1 Га, с прогулочными аллеями, водными объектами и летним кинотеатром.`
	},
])

const gallerySlides = ref([
	{
		id: 'gallery-1',
		image: galleryImg1
	},
	{
		id: 'gallery-2',
		image: galleryImg2
	},
	{
		id: 'gallery-3',
		image: galleryImg1
	},
	{
		id: 'gallery-4',
		image: galleryImg2
	},
])

const roomPlans = ref([
	{
		id: 'plan-1',
		image: planImg1,
		name: '3-я квартира в ЖК Infinity',
		floor: 4,
		house: 8,
		entrance: 8,
		room: 3,
		price: '600 000'
	},
	{
		id: 'plan-2',
		image: planImg2,
		name: '3-я квартира в ЖК Infinity',
		floor: 4,
		house: 8,
		entrance: 8,
		room: 3,
		price: '800 000'
	},
	{
		id: 'plan-3',
		image: planImg3,
		name: '3-я квартира в ЖК Infinity',
		floor: 4,
		house: 8,
		entrance: 8,
		room: 3,
		price: '500 000'
	},
	{
		id: 'plan-4',
		image: planImg4,
		name: '3-я квартира в ЖК Infinity',
		floor: 4,
		house: 8,
		entrance: 8,
		room: 2,
		price: '250 000'
	},
	{
		id: 'plan-5',
		image: planImg1,
		name: '3-я квартира в ЖК Infinity',
		floor: 4,
		house: 8,
		entrance: 8,
		room: 3,
		price: '600 000'
	},
	{
		id: 'plan-6',
		image: planImg2,
		name: '3-я квартира в ЖК Infinity',
		floor: 4,
		house: 8,
		entrance: 8,
		room: 3,
		price: '800 000'
	},
	{
		id: 'plan-7',
		image: planImg3,
		name: '3-я квартира в ЖК Infinity',
		floor: 4,
		house: 8,
		entrance: 8,
		room: 3,
		price: '500 000'
	},
	{
		id: 'plan-8',
		image: planImg4,
		name: '3-я квартира в ЖК Infinity',
		floor: 4,
		house: 8,
		entrance: 8,
		room: 2,
		price: '250 000'
	},
])
const selectedPlan = ref<null | string>(null)
const togglePlan = (id: string) => {
	if (selectedPlan.value === id) {
		selectedPlan.value = null
	} else {

		selectedPlan.value = id
	}
}
const countRooms = ref([
	{ id: 'room-1', name: 'Не важно' },
	{ id: 'room-2', name: 'Студия' },
	{ id: 'room-3', name: '1' },
	{ id: 'room-4', name: '2' },
	{ id: 'room-5', name: '3' },
	{ id: 'room-6', name: '4+' },
])

const infrastructuraTabItems = ref<itemsTabType[]>([
	{
		id: 'infra_tab-1',
		title: 'Магазины',
		content: 'Магазины: Наш район предлагает широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены крупные супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса',
		destination: [
			{
				name: 'Korzinka',
				time: '5 минут'
			},
			{
				name: 'Havas',
				time: '10 минут'
			},
			{
				name: 'FixPrice',
				time: 'Рядом'
			},
			{
				name: 'REDTAG',
				time: '25 минут'
			},
		]
	},
	{
		id: 'infra_tab-2',
		title: 'Транспорт',
		content: 'Транспорт: Наш район предлагает широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены крупные супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса',
		destination: [
			{
				name: 'Korzinka',
				time: '5 минут'
			},
			{
				name: 'Havas',
				time: '10 минут'
			},
			{
				name: 'FixPrice',
				time: 'Рядом'
			},
			{
				name: 'REDTAG',
				time: '25 минут'
			},
		]
	},
	{
		id: 'infra_tab-3',
		title: 'Школы',
		content: 'Школы: Наш район предлагает широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены крупные супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса',
		destination: [
			{
				name: 'Korzinka',
				time: '5 минут'
			},
			{
				name: 'Havas',
				time: '10 минут'
			},
			{
				name: 'FixPrice',
				time: 'Рядом'
			},
			{
				name: 'REDTAG',
				time: '25 минут'
			},
		]
	},
])
const checkTextLength = (text: string) => text.length > 420
const reviewSlides = ref([
	{
		id: 'review-1',
		name: 'Иванов Иван Иванович',
		created_at: '01.08.2024',
		content: 'Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!'
	},
	{
		id: 'review-2',
		name: 'Петров Петр Петрович',
		created_at: '01.08.2024',
		content: 'Купил квартиру в ЖК Infinitu и остался очень доволен. Инфраструктура на высшем уровне – рядом находятся все основные удобства: торговые центры, школы и медицинские учреждения. Также приятно удивило качество строительства и отделки – все сделано на совесть. Большое спасибо за внимательное отношение и профессионализм сотрудников. Теперь у нас есть уютное и современное жилье, в котором мы чувствуем себя как дома. Приятно также удивило наличие зелёных зон и уютных мест для отдыха на территории. Проживание здесь действительно приятно и комфортно'
	},
	{
		id: 'review-3',
		name: 'Алексеев Алексей Алексеевич',
		created_at: '01.08.2024',
		content: 'Очень рад, что выбрал ЖК Infinitu. Комплекс расположен в удобном месте с хорошей транспортной доступностью. Внутреннее оформление и планировка квартир продуманы до мелочей, что делает жизнь здесь комфортной. Мне особенно нравится, что у нас есть доступ к различным удобствам прямо на территории комплекса – спортзал, бассейн, зоны для отдыха. Отличное место для жизни и отдыха! Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная'
	},
	{
		id: 'review-4',
		name: 'Максимов Максим Максимович',
		created_at: '01.08.2024',
		content: 'Жилой комплекс Infinitu – это отличный выбор для тех, кто ценит комфорт и современность. Мне особенно нравится, что комплекс оборудован современными системами безопасности, а также имеется подземный паркинг, что очень удобно. Приятно также удивило наличие зелёных зон и уютных мест для отдыха на территории. Проживание здесь действительно приятно и комфортно'
	},
])

const catalogBuildings = ref([

	{
		id: 'catalogBuild-2',
		name: 'Harizma',
		price: '700 000',
		image: catalogImage2,
		isFavourite: false
	},
	{
		id: 'catalogBuild-3',
		name: 'Династия',
		price: '120 000',
		image: catalogImage3,
		isFavourite: false
	},
	{
		id: 'catalogBuild-4',
		name: 'Assalom Sohil',
		price: '550 000',
		image: catalogImage4,
		isFavourite: false
	},
	{
		id: 'catalogBuild-5',
		name: 'Assalom Havo',
		price: '500 000',
		image: catalogImage5,
		isFavourite: false
	},
])
const addFavourite = (id: string, value: boolean) => {
	console.log(id, value);
}
</script>

<style>
.reviewSlider .swiper-wrapper {
	height: 100%;
}
</style>