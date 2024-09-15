<template>
	<div class="pb-[5rem] lg:pb-[12.5rem]">
		<div class="py-[4rem]">
			<div class="container px-3">
				<h4 class="title mb-2">Результаты поиска</h4>
				<p class="text-secondary-400 text-xl font-medium">Результаты по запросу <span
						class="text-main-300">«новостройки»</span></p>
			</div>
		</div>
		<div v-for="search in searchRes" :key="search.id" class="hover:bg-secondary-100 ">
			<a href="/">
				<div class="container px-3 border-b border-secondary-100 py-8">
					<h5 class="text-3xl mb-1">{{ search.title }}</h5>
					<p class="text-secondary-300 text-xl">{{ search.subtitle }}</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
const searchRes = ref([
	{
		id: 'search-1',
		title: 'Новостройки Ташкента',
		subtitle: 'Новостройки'
	},
	{
		id: 'search-2',
		title: 'Infinity',
		subtitle: 'Новостройки Ташкента'
	},
	{
		id: 'search-3',
		title: 'Harizma',
		subtitle: 'Новостройки Ташкента'
	},
	{
		id: 'search-4',
		title: 'Assalom Sohil',
		subtitle: 'Новостройки Ташкента'
	},
	{
		id: 'search-5',
		title: 'Assalom Havo',
		subtitle: 'Новостройки Ташкента'
	},
])
</script>

<style scoped></style>