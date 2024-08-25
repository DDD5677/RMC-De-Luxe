<template>
	<div>
		<Slider :slides="slides" dark class="h-[800px]">
			<template #slides="{ slide }">
				<div class="container px-4 flex flex-col h-full relative z-20">
					<div class="flex-[40%] flex-grow"></div>
					<div class="flex-[50%] flex-grow flex flex-col justify-end pb-[4.5rem]">
						<div class="md:w-[80%] xl:w-[50%]">
							<div class="text-white">
								<h1 class="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] font-medium leading-[0.9]">{{ slide.title
									}}</h1>
								<p class="text-xl mt-5">{{ slide.subtitle }}</p>
								<UIButton class="mt-10" link :href="slide.link">{{ slide.buttonText }}</UIButton>
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
		<section class="about">
			<div class="container py-[5rem]  lg:py-[15rem]">
				<div class="flex flex-col lg:flex-row px-3  justify-between">
					<div class="flex-[50%]">
						<h2 class="title">
							О компании <br> <span class="text-main-300">RMC DE LUXE</span>
						</h2>
					</div>
					<UITab class="flex-[50%] text-xl mb-12" :items="itemsTab" />
				</div>
				<Slider :slides="slidesAbout" class="h-[240px] sm:h-[454px] lg:h-[600px]">
					<template #navigation>
						<div class="absolute left-0 top-[30px] z-50">
							<UISliderBtns />
						</div>
					</template>
				</Slider>
			</div>
		</section>
		<section class="investment bg-main-blue py-[5rem]">
			<div class="container px-4 flex flex-col lg:flex-row lg:justify-between">
				<div class="lg:w-[45%] text-[1.25rem]">
					<h5 class="title mb-[0.8em]">Инвестиции в
						недвижимость в
						Дубае</h5>
					<p class="mb-[1em]">
						Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода и увеличения
						капитала
					</p>
					<p class="mb-[1em]">
						Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и их
						реализации.
					</p>
					<p class="mb-[1em]">
						Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое качество
						обслуживания
						и надежность.
					</p>
					<p class="mb-[2em]">
						Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её сохранность и
						стабильный
						доход. Мы берем на себя все аспекты управления, включая подбор и проверку арендаторов, техническое
						обслуживание, финансовую отчетность и юридическую поддержку.
					</p>
					<UIButton link href="/investment" class="hidden lg:inline-block">Подробнее</UIButton>
				</div>
				<div
					class="lg:relative flex gap-3 h-[240px] sm:h-[340px] lg:h-auto lg:block lg:w-[50%] lg:pb-20 lg:pl-24 mt-2 lg:mt-0">
					<div class="lg:h-full lg:w-full">
						<img class="object-cover h-full w-full" src="@/assets/images/investment-1.jpg" alt="image building">
					</div>
					<div class="lg:absolute lg:bottom-0 lg:left-0 lg:w-[227px] lg:h-[285px]">
						<img class="object-cover h-full w-full" src="@/assets/images/investment-2.jpg" alt="image building">
					</div>
				</div>
				<div class="lg:hidden mt-14">
					<UIButton link href="/investment">Подробнее</UIButton>

				</div>

			</div>

		</section>
		<section class="services py-[5rem]  lg:py-[15rem]">
			<div class="container px-4">
				<h5 class="title mb-[3rem]">Что входит в услугу <br>
					управления недвижимостью</h5>
				<div class="grid grid-cols-1 lg:grid-cols-2 ">
					<div v-for="(item, index) in serviceItems" :key="item.id">
						<ServiceItem :text="item.text" class="border-t border-secondary-100"
							:class="{ 'lg:pl-5': index % 2 === 1, 'lg:border-r': index % 2 === 0, 'lg:border-b': index === 7 }" />
					</div>
				</div>
			</div>

		</section>
		<section class="advantages">
			<div class="container px-4">
				<h5 class="title mb-10">Почему выбирают нас</h5>
				<div class="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					<div
						class="p-7 h-[326px] order-1 lg:order-1 md:order-1 border border-secondary-100 flex flex-col justify-center">
						<h6 class="text-3xl font-medium mb-5">Опыт и профессионализм</h6>
						<p class="text-xl">Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что
							гарантирует
							высокое качество услуг</p>
					</div>
					<div class="md:order-2 h-[326px] order-2 lg:order-2">
						<img class="w-full h-full object-cover" src="@/assets/images/advantage-1.jpg" alt="">
					</div>
					<div
						class="p-7 h-[326px] order-3 lg:order-3 md:order-4 border border-secondary-100 flex flex-col justify-center">
						<h6 class="text-3xl font-medium mb-5">Прозрачность и доверие</h6>
						<p class="text-xl">Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа
							основана
							на принципах честности и доверия, что подтверждается отзывами</p>
					</div>
					<div class="md:order-3 h-[326px] order-4 lg:order-4">
						<img class="w-full h-full object-cover" src="@/assets/images/advantage-2.jpg" alt="">
					</div>
					<div
						class="p-7 h-[326px] order-5 lg:order-5 md:order-5 border border-secondary-100 flex flex-col justify-center">
						<h6 class="text-3xl font-medium mb-5">Высокий уровень обслуживания</h6>
						<p class="text-xl">Мы всегда на связи, чтобы помочь вам в любое время</p>
					</div>
					<div class="md:order-6 h-[326px] order-6 lg:order-6">
						<img class="w-full h-full object-cover" src="@/assets/images/advantage-3.jpg" alt="">
					</div>
					<div
						class="p-7 h-[326px] order-7 lg:order-7 md:order-8 border border-secondary-100 flex flex-col justify-center">
						<h6 class="text-3xl font-medium mb-5">Индивидуальный подход</h6>
						<p class="text-xl">Мы разрабатываем персонализированные решения, учитывая уникальные потребности
							каждого
							клиента</p>
					</div>
					<div class="md:order-7 h-[326px] order-8 lg:order-8">
						<img class="w-full h-full object-cover" src="@/assets/images/advantage-4.jpg" alt="">
					</div>
					<div
						class="p-7 h-[326px] order-9 lg:order-9 md:order-9 border border-secondary-100 flex flex-col justify-center">
						<h6 class="text-3xl font-medium mb-5">Комплексное обслуживание</h6>
						<p class="text-xl">Полный спектр услуг, включающий аренду, куплю-продажу, управление и инвестиции в
							недвижимость.</p>
					</div>
					<div class="hidden sm:block lg:hidden md:order-last h-[326px] order-10 lg:order-10">
						<img class="w-full h-full object-cover" src="@/assets/images/advantage-5.jpg" alt="">
					</div>
				</div>
			</div>

		</section>
		<section class="buildings py-[5rem]  lg:py-[15rem] overflow-hidden">
			<div class="container">
				<h5 class="title px-4 mb-10">Новостройки</h5>
				<Slider @favorite="addFavoriteHandler" :slides="slidesBuilding" :count="3" :space="20"
					class="h-[400px] sm:h-[500px] xl:h-[600px] ">
					<template #slides="{ slide, addFavorite }">
						<div
							class="flex flex-col justify-between h-full relative z-50 bg-gradient-to-b from-black/10 to-black/50">
							<div class="flex justify-end p-3">
								<HeartIconSolid v-if="slide.isFavorite" @click="addFavorite(slide.id, false)"
									class="w-10 cursor-pointer text-white" />
								<HeartIcon v-else class="w-10 cursor-pointer text-white" @click="addFavorite(slide.id, true)" />
							</div>
							<div class="text-white p-6">
								<p class="text-[2.2rem] font-semibold drop-shadow-lg">{{ slide.name }}</p>
								<p class="text-xl font-medium">от {{ slide.price }}</p>
							</div>
						</div>
					</template>
					<template #navigation>
						<div class="hidden sm:block absolute right-0 top-[-120px] xl:top-[-150px] z-50">
							<UISliderBtns color="border-black text-black" />
						</div>
					</template>
				</Slider>
				<div class="flex justify-center mt-16">
					<UIButton>Смотреть все</UIButton>
				</div>
			</div>
		</section>
		<section class="calculation">
			<div class="container px-4">
				<h5 class="title mb-8">Рассчитайте ипотеку</h5>
				<div style="box-shadow: 0px 0px 30px 0px #0F11120D" class=" bg-white p-10">
					<div class="flex flex-col md:flex-row md:justify-between gap-7  ">
						<div class="flex-grow ">
							<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8 lg:pr-12">
								<UIMainInput class="text-lg" placeholder="Введите стоимость">Стоимость недвижимости (у.е.)
								</UIMainInput>
								<UIMainInput class="text-lg" placeholder="Введите размер взноса">Первоначальный взнос (у.е.)
								</UIMainInput>
								<UIMainInput class="text-lg" placeholder="Введите срок">Срок в годах</UIMainInput>
								<UIMainInput class="text-lg" placeholder="Введите размер ставки">Ставка (%)</UIMainInput>
							</div>
							<div class="mt-12 md:hidden">
								<UIButton>Рассчитать</UIButton>
							</div>
						</div>
						<div
							class="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-7 border-t pt-7 md:border-t-0 md:border-l border-secondary-100 md:pl-12">
							<div>
								<p class="text-lg text-secondary-300">Ежемесячный платеж</p>
								<p class="font-medium text-2xl">4 410 у.е.</p>
							</div>
							<div>
								<p class="text-lg text-secondary-300">Сумма кредита</p>
								<p class="font-medium text-2xl">200 000 у.е.</p>
							</div>
							<div>
								<p class="text-lg text-secondary-300">Процентная ставка</p>
								<p class="font-medium text-2xl">24%</p>
							</div>
							<div>
								<p class="text-lg text-secondary-300">Дата последнего платежа</p>
								<p class="font-medium text-2xl">28 июля 2034 г</p>
							</div>
						</div>
					</div>
					<div class="mt-12 hidden md:block">
						<UIButton>Рассчитать</UIButton>
					</div>

				</div>
			</div>
		</section>
		<section class="py-[5rem]  lg:py-[15rem]">
			<div class="container px-4">
				<div class="bg-main-blue flex flex-col-reverse lg:flex-row lg:justify-between">
					<div class="p-4 lg:p-[3.5rem] ">
						<h5 class="title leading-normal mb-5 lg:mb-10">
							Остались
							вопросы? <br>Свяжитесь с нами
						</h5>
						<form action="" class="flex flex-col gap-7">
							<UIMainInput variant="no-box" class="text-lg">ФИО <span class="text-main-red">*</span>
							</UIMainInput>
							<UIMainInput variant="no-box" class="text-lg">Номер телефона <span class="text-main-red">*</span>
							</UIMainInput>
							<UIMainInput variant="no-box" class="text-lg">E-mail</UIMainInput>
							<UIMainInput variant="no-box" class="text-[18px]">Ваш вопрос</UIMainInput>
							<div>
								<UIButton>Отправить</UIButton>
							</div>
						</form>
					</div>
					<div class="w-full h-[25rem] lg:w-[36rem] lg:h-[40rem]"> <img
							class="object-cover object-top w-full h-full" src="@/assets/images/contacts.jpg" alt="">
					</div>
				</div>
			</div>
		</section>
		<section class="blogs pb-[5rem]  lg:pb-[15rem]">
			<div class="container px-4">
				<h5 class="title mb-7">Блог</h5>
				<div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
					<BlogItem v-for="blog in blogs" :key="blog.id" :blog="blog" />
				</div>
				<div class="flex justify-center mt-[4.5rem]">
					<UIButton>Все статьи</UIButton>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import image1 from '@/assets/images/main-1.jpg'
import image2 from '@/assets/images/about.jpg'
import imageBuilding1 from '@/assets/images/building-1.png'
import imageBuilding2 from '@/assets/images/building-2.png'
import imageBuilding3 from '@/assets/images/building-3.png'
import imageBuilding4 from '@/assets/images/building-4.png'
import imageBlog1 from '@/assets/images/blogs/blog-1.jpg'
import imageBlog2 from '@/assets/images/blogs/blog-2.jpg'
import imageBlog3 from '@/assets/images/blogs/blog-3.jpg'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
const blogs = ref([
	{
		id: 'blog-1',
		image: imageBlog1,
		title: 'Тенденции и прогнозы рынка недвижимости на 2024 год',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-2',
		image: imageBlog2,
		title: 'Лучшие районы для инвестиций в недвижимость',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-3',
		image: imageBlog3,
		title: 'Топ-10 новых жилых комплексов',
		createdAt: '31.07.2024',
		views: '899'
	},
])
const slides = ref([
	{
		image: image1,
		title: 'Найдите идеальное место для жизни 1',
		subtitle: 'Откройте двери в новое будущее с нами',
		buttonText: 'Подробнее',
		link: '/'
	},
	{
		image: image1,
		title: 'Найдите идеальное место для жизни 2',
		subtitle: 'Откройте двери в новое будущее с нами',
		buttonText: 'Подробнее',
		link: '/'
	},
	{
		image: image1,
		title: 'Найдите идеальное место для жизни 3',
		subtitle: 'Откройте двери в новое будущее с нами',
		buttonText: 'Подробнее',
		link: '/'
	},
	{
		image: image1,
		title: 'Найдите идеальное место для жизни 4',
		subtitle: 'Откройте двери в новое будущее с нами',
		buttonText: 'Подробнее',
		link: '/'
	}
])
const slidesAbout = ref([
	{
		image: image2
	},
	{
		image: image2
	},
	{
		image: image2
	},
])
const itemsTab = ref([
	{
		id: 'tab1',
		title: 'Аренда',
		content: 'Tab 1 Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности.Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков'
	},
	{
		id: 'tab2',
		title: 'Купля - продажа',
		content: 'Tab 2 Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности.Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков'
	},
	{
		id: 'tab3',
		title: 'Управление',
		content: 'Tab 3 Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности.Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков'
	},
])
const serviceItems = ref([
	{
		id: 'service-1',
		text: 'Проверка арендаторов (кредитная история, рекомендации)'
	},
	{
		id: 'service-2',
		text: 'Регулярное техническое обслуживание'
	},
	{
		id: 'service-3',
		text: 'Подготовка и подписание договоров аренды'
	},
	{
		id: 'service-4',
		text: 'Организация и проведение ремонтных работ'
	},
	{
		id: 'service-5',
		text: 'Сбор арендной платы'
	},
	{
		id: 'service-6',
		text: 'Контроль за состоянием недвижимости'
	},
	{
		id: 'service-7',
		text: 'Обработка запросов и жалоб арендаторов'
	},
	{
		id: 'service-8',
		text: 'Подбор надежных арендаторов'
	},
	{
		id: 'service-9',
		text: 'Контроль соблюдения условий аренды'
	},
])
const slidesBuilding = ref([
	{
		id: 'building-1',
		name: 'Safa One',
		price: '$1 900 000',
		isFavorite: false,
		image: imageBuilding1
	},
	{
		id: 'building-2',
		name: 'Safa Two',
		price: '$399 000',
		isFavorite: false,
		image: imageBuilding2
	},
	{
		id: 'building-3',
		name: 'Peninsula Two',
		price: '$245 000',
		isFavorite: false,
		image: imageBuilding3
	},
	{
		id: 'building-4',
		name: 'Marina Vista',
		price: '$612 000',
		isFavorite: false,
		image: imageBuilding4
	},
	{
		id: 'building-5',
		name: 'Safa One',
		price: '$1 900 000',
		isFavorite: false,
		image: imageBuilding1
	},
	{
		id: 'building-6',
		name: 'Safa Two',
		price: '$399 000',
		isFavorite: false,
		image: imageBuilding2
	},
	{
		id: 'building-7',
		name: 'Peninsula Two',
		price: '$245 000',
		isFavorite: false,
		image: imageBuilding3
	},
	{
		id: 'building-8',
		name: 'Marina Vista',
		price: '$612 000',
		isFavorite: false,
		image: imageBuilding4
	},
])

const addFavoriteHandler = (payload: { id: string, value: boolean }) => {
	slidesBuilding.value = slidesBuilding.value.map((building) => {
		if (building.id === payload.id) {
			building.isFavorite = payload.value
		}
		return building
	})
}
</script>

<style>
.buildings .swiper {
	overflow: visible;
}
</style>