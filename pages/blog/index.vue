<template>
	<div>
		<section class="popular_blogs">
			<div class="container px-3">
				<h4 class="title my-7">
					Популярные статьи
				</h4>
				<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
					<div v-for="(blog, index) in popularBlogs"
						class="relative text-white sm:first:row-span-2 sm:first:col-span-2 sm:first:text-3xl text-xl">
						<img class="w-full h-full object-cover" :src="blog.image" alt="image">
						<div class="absolute top-0 left-0 w-full h-full flex flex-col justify-between  bg-black/40">
							<div class="flex justify-between items-end bottom-0 text-lg p-3"
								:class="{ 'sm:p-5 sm:text-xl': index == 0 }">
								<span>{{ blog.createdAt }}</span>
								<span class="flex gap-2">
									<EyeIcon class="w-5" />{{ blog.views }}
								</span>
							</div>
							<div class="flex flex-col justify-between p-3" :class="{ 'sm:p-5': index == 0 }">
								<h6 class="font-semibold mb-2">{{ blog.title }}</h6>
								<NuxtLink to="/" class="flex gap-1 text-lg font-semibold hover:text-main-300 transition">
									<span>Подробнее</span>
									<ArrowRightIcon class="w-4" />
								</NuxtLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="blogs py-[5rem] lg:py-[12.5rem]">
			<div class="container px-3">
				<h4 class="title mb-7">
					Статьи
				</h4>
				<div>
					<div class="controls flex mb-6 gap-2 max-lg:flex-col  lg:justify-between">
						<div class="flex gap-3 flex-wrap">
							<UIButton @click="filter = 'all'" white :class="filter === 'all' ? 'bg-main-300 text-white' : ''">
								Все
							</UIButton>
							<UIButton @click="filter = 'buildings'" white
								:class="filter === 'buildings' ? 'bg-main-300 text-white' : ''">
								О недвижимости
							</UIButton>
							<UIButton @click="filter = 'investors'" white
								:class="filter === 'investors' ? 'bg-main-300 text-white' : ''">
								Инвесторам
							</UIButton>
							<UIButton @click="filter = 'buy_building'" white
								:class="filter === 'buy_building' ? 'bg-main-300 text-white' : ''">
								Покупка недвижимости
							</UIButton>
							<UIButton @click="filter = 'regions'" white
								:class="filter === 'regions' ? 'bg-main-300 text-white' : ''">
								Обзоры районов
							</UIButton>
						</div>
						<div class="max-lg:flex max-lg:justify-end">
							<UISelect class="border-none text-xl" :items="sortItems" right>Сортировать
								<template #icon>
									<ArrowsUpDownIcon class="ml-3 w-5" />
								</template>
							</UISelect>
						</div>
					</div>
					<div
						class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-y-7 sm:gap-y-10 lg:gap-y-12 sm:gap-x-4 lg:gap-x-5">
						<BlogItem v-for="(blog, index) in blogs" :key="blog.id" :blog="blog" class="col-span-2"
							:class="{ 'lg:col-span-3': (index + 1) % 5 == 4 || (index + 1) % 5 == 0, 'sm:max-lg:col-span-4': (index + 1) % 3 == 2 && index > 3 }">
						</BlogItem>
					</div>
					<div class="flex max-sm:flex-col gap-4 justify-between mt-12 sm:mt-24 items-center">
						<div class="flex  items-center gap-4">
							<span class="text-lg text-secondary-400">Показывать на странице:</span>
							<UISelect :items="perPage" :default-value="perPage[1]"></UISelect>
						</div>
						<div>
							<Pagination :page="page" :page-size="10" @page-change="handlePage" />
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import popularBlogImg1 from '@/assets/images/blogs/popular/popular-1.jpg'
import popularBlogImg2 from '@/assets/images/blogs/popular/popular-2.jpg'
import popularBlogImg3 from '@/assets/images/blogs/popular/popular-3.jpg'
import blogImg1 from '@/assets/images/blogs/blog-1.jpg'
import blogImg2 from '@/assets/images/blogs/blog-2.jpg'
import blogImg3 from '@/assets/images/blogs/blog-3.jpg'
import blogImg4 from '@/assets/images/blogs/blog-4.jpg'
import blogImg5 from '@/assets/images/blogs/blog-5.jpg'
import blogImg6 from '@/assets/images/blogs/blog-6.jpg'
import blogImg7 from '@/assets/images/blogs/blog-7.jpg'
import blogImg8 from '@/assets/images/blogs/blog-8.jpg'
import blogImg9 from '@/assets/images/blogs/blog-9.jpg'
import blogImg10 from '@/assets/images/blogs/blog-10.jpg'
import { ArrowRightIcon } from '@heroicons/vue/16/solid';
import { EyeIcon, ArrowsUpDownIcon } from '@heroicons/vue/24/outline';
const popularBlogs = ref([
	{
		id: 'popularblog-1',
		image: popularBlogImg1,
		title: 'Современные жилые комплексы предлагают расширенные удобства для жителей',
		createdAt: '01.08.2024',
		views: '235'
	},
	{
		id: 'popularblog-2',
		image: popularBlogImg2,
		title: 'Рынок новостроек демонстрирует стабильный рост',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'popularblog-3',
		image: popularBlogImg3,
		title: 'Цены на квартиры в новостройках продолжают расти',
		createdAt: '30.07.2024',
		views: '500'
	},
])
const page = ref(1)
const handlePage = (value: number) => {
	page.value = value
}
const perPage = ref([
	{
		id: 'per-5',
		name: '5'
	},
	{
		id: 'per-10',
		name: '10'
	},
	{
		id: 'per-15',
		name: '15'
	},
	{
		id: 'per-20',
		name: '20'
	},
])
const filter = ref('all')
const sortItems = ref([
	{
		id: 'datenew',
		name: 'По дате: сначала новые'
	},
	{
		id: 'dateold',
		name: 'По дате: сначала старые'
	},
	{
		id: 'popular',
		name: 'По популярности'
	},
])
const blogs = ref([
	{
		id: 'blog-1',
		image: blogImg1,
		title: 'Тенденции и прогнозы рынка недвижимости на 2024 год',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-2',
		image: blogImg2,
		title: 'Лучшие районы для инвестиций в недвижимость',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-3',
		image: blogImg3,
		title: 'Топ-10 новых жилых комплексов',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-4',
		image: blogImg4,
		title: 'Элитные апартаменты становятся всё более популярными',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-5',
		image: blogImg5,
		title: 'Тенденции и прогнозы рынка недвижимости на 2024 год',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-6',
		image: blogImg6,
		title: 'Новые жилые комплексы: какие районы лидируют по застройке',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-7',
		image: blogImg7,
		title: 'Инвестиции в новостройки: как выбрать прибыльный проект',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-8',
		image: blogImg8,
		title: 'Как выбрать застройщика: советы экспертов',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-9',
		image: blogImg9,
		title: 'Преимущества покупки жилья на этапе строительства',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-10',
		image: blogImg10,
		title: 'Современные технологии в строительстве: что ожидать от новостроек',
		createdAt: '31.07.2024',
		views: '899'
	},
])
</script>

<style scoped>
.blogs .controls button {
	@apply max-lg:py-2 max-lg:px-3 max-sm:text-base max-lg:text-lg;
}
</style>