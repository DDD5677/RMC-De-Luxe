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
				<div class="xl:w-3/5 py-16 px-3">
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
				<div class="relative max-lg:overflow-hidden">
					<Map></Map>
					<div class="w-full min-[420px]:w-[420px] absolute bottom-5 lg:top-5 lg:left-5">
						<swiper :pagination="true" :modules="modules" :slides-per-view="1" :space-between="10"
							class="sliderMap">
							<swiper-slide v-for=" slide in slidesMap">
								<div class=" bg-white max-lg:flex max-lg:shadow-lg max-lg:shadow-black/20">
									<div
										class="w-2/5 h-[120px] min-[420px]:w-[160px] min-[420px]:h-[180px] lg:h-[250px] lg:w-full shrink-0">
										<img class="w-full h-full object-cover" :src="slide.image" alt="downtown">
									</div>
									<div class="p-4 lg:py-7 lg:px-6">
										<h6
											class="text-lg sm:text-2xl lg:text-3xl font-medium mt-4 min-[420px]:mt-0  min-[420px]:mb-3">
											{{
												slide.title }}
										</h6>
										<p class="max-lg:hidden text-md lg:text-lg text-secondary-300">{{ slide.text }}</p>
										<p class="max-[420px]:hidden lg:hidden text-md lg:text-lg text-secondary-300">{{
											slide.text.slice(0,
												100) + '...'
										}}
										</p>
										<a :href="slide.link"
											class="lg:hidden inline-flex justify-between items-center text-main-300 text-lg min-[420px]:mt-5">Перейти
											<ArrowRightIcon class="w-4 ml-2" />
										</a>
									</div>
									<div class="max-lg:hidden flex justify-between items-center px-[18px] pb-7">
										<UIButton link :href="slide.link"> Подробнее</UIButton>
										<UISliderBtns class="" color="border-black text-black" noborder />
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</div>
				</div>
				<div class="flex justify-center mt-12">
					<UIButton white>Посмотреть все районы</UIButton>
				</div>
			</div>
		</section>
		<section class="building-types py-[5rem]  lg:py-[13rem]">
			<div class="container px-3">
				<h4 class="title mb-12">Типы недвижимости</h4>
				<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-x-5 lg:gap-y-7 ">
					<div v-for="town in towntypes" :key="town.id" :style="`background-image:url(${town.image})`"
						class="sm:first:col-span-2 bg-cover bg-center">
						<div
							class="flex flex-col justify-end h-[230px] sm:h-[500px] xl:h-[600px] relative z-50 bg-gradient-to-b from-black/15 to-black/50">
							<div class="text-white p-6">
								<p class="text-3xl sm:text-[2.2rem] font-semibold drop-shadow-lg">{{ town.name }}</p>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Calculation />
		<section class="buying_process py-[5rem]  lg:py-[13rem]  ">
			<div class="container px-3">
				<h4 class="title mb-[4.5rem]">Процесс покупки недвижимости</h4>
				<div class="flex lg:flex-col">
					<div class="w-[1px] mt-[28px] mb-[165px] sm:mb-[65px] lg:my-0 lg:h-[1px] lg:w-full bg-secondary-100">
					</div>
					<div class="flex flex-col lg:gap-16  lg:flex-row justify-between">
						<div v-for="(step, index) in buyProcesses"
							class="flex-grow flex flex-col  lg:items-stretch sm:max-lg:flex-row gap-4 sm:gap-8 pb-10 lg:pb-0">
							<div class=" -translate-x-1 lg:-translate-y-2">
								<div class="inline-flex lg:flex-col items-center gap-5 lg:gap-10">
									<span class="w-[10px] h-[10px] rounded-full inline-block bg-main-300"> </span>
									<div
										class="w-[50px] h-[50px]  sm:w-[70px] sm:h-[70px]  lg:w-[102px] lg:h-[102px] rounded-full bg-main-300 text-xl sm:text-2xl lg:text-4xl font-semibold text-white flex justify-center items-center">
										0{{ index + 1 }}</div>
								</div>
							</div>
							<div class="pl-5 sm:pl-0">
								<h6 class="text-2xl lg:text-3xl font-medium mb-4">{{ step.title }}</h6>
								<p class="text-lg text-secondary-400">{{ step.text }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="faq">
			<div class="container px-3">
				<h4 class="title">Часто задаваемые вопросы</h4>
				<div class="divide-y-2 select-none">
					<div v-for="question in faqs" class="py-8">
						<div class="flex items-center justify-between gap-5">
							<span class="text-2xl sm:text-3xl">{{ question.question }}</span>
							<span @click="toggleFaq(question.id)"
								class="flex justify-center items-center shrink-0 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] transition-all border rounded-full border-secondary-500 cursor-pointer"
								:class="{ 'rotate-180': activeFaq.includes(question.id) }">
								<ChevronDownIcon class="w-5 sm:w-6" />
							</span>
						</div>
						<div class="h-0 transition-all overflow-hidden "
							:class="{ 'h-auto pt-5 sm:pt-7': activeFaq.includes(question.id) }">
							<p class="text-lg sm:text-xl">
								{{ question.answer }}
							</p>
						</div>
					</div>
				</div>

			</div>
		</section>
		<Contacts class="py-[5rem]  lg:py-[15rem]" />
		<Blogs class="pb-[5rem]  lg:pb-[15rem]" />
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
import imageTown2 from '@/assets/images/investment/town-type-2.jpg'
import imageTown3 from '@/assets/images/investment/town-type-3.jpg'
import imageTown4 from '@/assets/images/investment/town-type-4.jpg'
import imageTown5 from '@/assets/images/investment/town-type-5.jpg'
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import { ArrowRightIcon } from '@heroicons/vue/16/solid';
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
	},
	{
		id: 'towntype-2',
		name: 'Коммерческая недвижимость',
		image: imageTown2
	},
	{
		id: 'towntype-3',
		name: 'Офисы и коворкинги',
		image: imageTown3
	},
	{
		id: 'towntype-4',
		name: 'Отели и гостиничные апартаменты',
		image: imageTown4
	},
	{
		id: 'towntype-5',
		name: 'Виллы и таунхаусы',
		image: imageTown5
	},
])

const buyProcesses = ref([
	{
		id: 'step-1',
		title: 'Консультация и подбор объекта',
		text: 'Организуем просмотры объектов и помогаем вам оценить их преимущества и недостатки'
	},
	{
		id: 'step-2',
		title: 'Юридическое сопровождение',
		text: 'Обеспечение соблюдения законодательства и защиты интересов клиента'
	},
	{
		id: 'step-3',
		title: 'Оформление сделки',
		text: 'Подготовка и подписание всех необходимых документов. Осуществление  оплаты'
	},
	{
		id: 'step-4',
		title: 'Услуги по управлению недвижимостью',
		text: 'Наши специалисты обеспечат полный спектр услуг по управлению вашим объектом'
	},
])
const activeFaq = ref<string[]>([])
const toggleFaq = (id: string) => {
	const exist = activeFaq.value.find(q => q == id)
	if (!exist) {
		activeFaq.value.push(id)
	} else {
		activeFaq.value = activeFaq.value.filter(q => q !== id)
	}
}
const faqs = ref([
	{
		id: 'question-1',
		question: 'Правила покупки недвижимости иностранцами',
		answer: 'Правила покупки недвижимости иностранцами зависят от страны. Обычно существуют требования и ограничения. Во многих странах иностранцы могут приобретать недвижимость только с разрешения местных властей или по специальной лицензии. Ограничения могут касаться типа недвижимости: например, иностранцы могут иметь право на покупку только жилых объектов, а не коммерческих или земельных. Также иностранцы должны иметь определенный юридический статус, как, например, резиденты или инвесторы. Часто требуется подтверждение финансовой состоятельности и источников доходов, а также могут быть дополнительные налоги или сборы при покупке. Процесс покупки может включать юридические и административные шаги, такие как нотариальное оформление и регистрация права собственности. В некоторых странах существуют ограничения по регионам или зонам, где иностранцы могут приобретать недвижимость. Для точной информации лучше обратиться к местным юридическим специалистам или агентствам недвижимости'
	},
	{
		id: "question-2",
		question: 'Минимальная сумма инвестиций',
		answer: 'Правила покупки недвижимости иностранцами зависят от страны. Обычно существуют требования и ограничения. Во многих странах иностранцы могут приобретать недвижимость только с разрешения местных властей или по специальной лицензии. Ограничения могут касаться типа недвижимости: например, иностранцы могут иметь право на покупку только жилых объектов, а не коммерческих или земельных. Также иностранцы должны иметь определенный юридический статус, как, например, резиденты или инвесторы. Часто требуется подтверждение финансовой состоятельности и источников доходов, а также могут быть дополнительные налоги или сборы при покупке. Процесс покупки может включать юридические и административные шаги, такие как нотариальное оформление и регистрация права собственности. В некоторых странах существуют ограничения по регионам или зонам, где иностранцы могут приобретать недвижимость. Для точной информации лучше обратиться к местным юридическим специалистам или агентствам недвижимости'
	},
	{
		id: 'question-3',
		question: 'Процедура оформления сделки',
		answer: 'Правила покупки недвижимости иностранцами зависят от страны. Обычно существуют требования и ограничения. Во многих странах иностранцы могут приобретать недвижимость только с разрешения местных властей или по специальной лицензии. Ограничения могут касаться типа недвижимости: например, иностранцы могут иметь право на покупку только жилых объектов, а не коммерческих или земельных. Также иностранцы должны иметь определенный юридический статус, как, например, резиденты или инвесторы. Часто требуется подтверждение финансовой состоятельности и источников доходов, а также могут быть дополнительные налоги или сборы при покупке. Процесс покупки может включать юридические и административные шаги, такие как нотариальное оформление и регистрация права собственности. В некоторых странах существуют ограничения по регионам или зонам, где иностранцы могут приобретать недвижимость. Для точной информации лучше обратиться к местным юридическим специалистам или агентствам недвижимости'
	},
	{
		id: "question-4",
		question: 'Стоимость обслуживания и коммунальные платежи',
		answer: 'Правила покупки недвижимости иностранцами зависят от страны. Обычно существуют требования и ограничения. Во многих странах иностранцы могут приобретать недвижимость только с разрешения местных властей или по специальной лицензии. Ограничения могут касаться типа недвижимости: например, иностранцы могут иметь право на покупку только жилых объектов, а не коммерческих или земельных. Также иностранцы должны иметь определенный юридический статус, как, например, резиденты или инвесторы. Часто требуется подтверждение финансовой состоятельности и источников доходов, а также могут быть дополнительные налоги или сборы при покупке. Процесс покупки может включать юридические и административные шаги, такие как нотариальное оформление и регистрация права собственности. В некоторых странах существуют ограничения по регионам или зонам, где иностранцы могут приобретать недвижимость. Для точной информации лучше обратиться к местным юридическим специалистам или агентствам недвижимости'
	}
])
</script>

<style lang="scss">
.gmnoprint,
.gm-fullscreen-control {
	display: none;
}

.sliderMap {
	&.swiper {
		@apply max-lg:overflow-visible
	}

	.swiper-pagination {
		top: 240px;
		bottom: auto;
		display: flex;

		@apply max-lg:hidden;

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