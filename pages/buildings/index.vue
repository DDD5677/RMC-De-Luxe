<template>
	<main>
		<section class="new_buildings">
			<div class="container px-3">
				<div class="max-xl:flex-col flex justify-between gap-6 lg:gap-16">
					<div class="xl:w-1/2">
						<div class="my-8 lg:my-[4.25rem]">
							<h1 class="font-medium text-5xl sm:text-7xl xl:text-[5rem] mb-3">Новостройки <br
									class="sm:max-xl:hidden"><span class="text-main-300">в
									Ташкенте</span>
							</h1>
							<p class="text-secondary-400 text-xl">Найдите свою идеальную квартиру в новых жилых <br
									class="max-xl:hidden">комплексах
								Ташкента</p>
						</div>
						<div class="sm:hidden mb-7">
							<img class=" w-full h-full object-cover" src="@/assets/images/newBuildings/main.jpg"
								alt="building">

						</div>
						<div class="grid grid-col-1 md:grid-cols-2 gap-5 ">
							<div class="border border-secondary-100 p-7" v-for="i in 4">
								<h4 class="text-3xl">Современная архитектура</h4>
								<p class="text-secondary-400 text-lg">
									Современное жилье с актуальным дизайном и архитектурой
								</p>
							</div>
						</div>
					</div>
					<div class="max-sm:hidden xl:w-1/2">
						<img class=" w-full h-full object-cover" src="@/assets/images/newBuildings/main.jpg" alt="building">
					</div>
				</div>
			</div>
		</section>
		<section class="market_buildings py-[5rem] lg:py-[12.5rem]">
			<div class="container px-3">
				<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-[6.25rem]">
					<h4 class="title sm:max-xl:col-span-2">Рынок новостроек в Ташкенте</h4>
					<div class="h-[250px] sm:hidden my-5">
						<img class="w-full h-full object-cover" src="@/assets/images/newBuildings/market.jpg" alt="building">
					</div>
					<p class="text-xl">Рынок новостроек в Ташкенте активно развивается и привлекает как местных, так и
						иностранных
						инвесторов. В Ташкенте строятся новые жилые комплексы, предлагающие разнообразные варианты, от
						небольших квартир до элитных апартаментов. Эти проекты часто включают современные удобства, такие как
						фитнес-центры, детские площадки</p>
					<p class="text-xl">Цены на новостройки варьируются в зависимости от района и класса жилья, что делает
						рынок
						привлекательным для инвестиций. Новые жилые комплексы часто включают развитую инфраструктуру, включая
						торговые центры, школы и медицинские учреждения, что делает жизнь в таких комплексах более удобной</p>
				</div>
				<div class="max-sm:hidden sm:h-[400px] xl:h-[500px] mt-[3.75rem]">
					<img class="w-full h-full object-cover" src="@/assets/images/newBuildings/market.jpg" alt="building">
				</div>
			</div>
		</section>
		<section class="catalog">
			<div class="container">
				<h4 class="title mb-12">Каталог новостроек</h4>
				<div class="flex flex-wrap text-xl gap-3 mb-7">
					<UISelect :items="regions" variant="indicator">Район</UISelect>
					<UISelect :items="houseTypes" variant="indicator">Тип жилья</UISelect>
					<UISelect :items="countRooms" variant="indicator">Количество комнат</UISelect>
					<UISelect :items="date" variant="indicator">Срок сдачи</UISelect>
				</div>
				<div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
					<div v-for="building in catalogBuildings" :key="building.id"
						:style="`background-image: url(${building.image})`"
						class="h-[400px] sm:h-[500px] xl:h-[600px] bg-center bg-cover">
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
				<div class="flex justify-center mt-14">
					<UIButton>Загрузить все</UIButton>
				</div>
			</div>

		</section>
		<Calculation class="py-[5rem]  lg:py-[12.5rem]" />
		<BuyProcess />
		<Faq class="py-[5rem]  lg:py-[12.5rem]" />
		<Contacts />
		<Blogs class="py-[5rem] lg:py-[12.5rem]" />
	</main>
</template>

<script setup lang="ts">
import catalogImage1 from '@/assets/images/newBuildings/catalog-1.jpg';
import catalogImage2 from '@/assets/images/newBuildings/catalog-2.jpg';
import catalogImage3 from '@/assets/images/newBuildings/catalog-3.jpg';
import catalogImage4 from '@/assets/images/newBuildings/catalog-4.jpg';
import catalogImage5 from '@/assets/images/newBuildings/catalog-5.jpg';
import catalogImage6 from '@/assets/images/newBuildings/catalog-6.jpg';
import { HeartIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
const regions = ref([
	{ id: 'all-regions', name: 'All' },
	{ id: 'region-1', name: "Алмазарский" },
	{ id: 'region-2', name: "Бектемирский" },
	{ id: 'region-3', name: "Чиланзарский" },
	{ id: 'region-4', name: "Мирабадский" },
	{ id: 'region-5', name: "Мирзо-Улугбекский" },
	{ id: 'region-6', name: "Сергелийский" },
	{ id: 'region-7', name: "Шайхантахурский" },
	{ id: 'region-81', name: "Учтепинский" },
	{ id: 'region-9', name: "Юнусабадский" },
	{ id: 'region-10', name: "Янгихаётский" },
	{ id: 'region-11', name: "Яккасарайский" },
	{ id: 'region-12', name: "Яшнабадский" },

])
const houseTypes = ref([
	{ id: 'all-houses', name: 'All' },
	{ id: 'house-1', name: 'Квартиры' },
	{ id: 'house-2', name: 'Пентхаусы' },
	{ id: 'house-3', name: 'Таунхаусы' },
])
const countRooms = ref([
	{ id: 'room-1', name: 'Не важно' },
	{ id: 'room-2', name: 'Студия' },
	{ id: 'room-3', name: '1' },
	{ id: 'room-4', name: '2' },
	{ id: 'room-5', name: '3' },
	{ id: 'room-6', name: '4+' },
])
const date = ref([
	{
		id: 'date-1',
		name: 'Любой'
	},
	{
		id: 'date-2',
		name: 'III квартал 2024'
	},
	{
		id: 'date-3',
		name: 'IV квартал 2024'
	},
	{
		id: 'date-4',
		name: 'I квартал 2025'
	},
	{
		id: 'date-5',
		name: 'II квартал 2025'
	},
	{
		id: 'date-6',
		name: 'III квартал 2025'
	},
	{
		id: 'date-7',
		name: 'IV квартал 2025'
	},
])
const catalogBuildings = ref([
	{
		id: 'catalogBuild-1',
		name: 'Infinity',
		price: '500 000',
		image: catalogImage1,
		isFavourite: false
	},
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
	{
		id: 'catalogBuild-6',
		name: 'Assalom Jomiy',
		price: '600 000',
		image: catalogImage6,
		isFavourite: false
	},
])
const addFavourite = (id: string, value: boolean) => {
	console.log(id, value);
}
</script>

<style scoped></style>