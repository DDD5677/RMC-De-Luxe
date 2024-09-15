<template>
	<div class="container px-4">
		<header class="flex justify-between items-center h-[72px] sm:h-[100px]">
			<NuxtLink to="/">
				<img src="@/assets/images/logo.svg" alt="Logo RMC DE LUXE">
			</NuxtLink>
			<nav class="hidden md:block text-xl">
				<ul class="flex gap-4 items-center">
					<li class="relative cursor-pointer">
						<UIDropdown :items="routes" :absolute="true">
							<span>Услуги</span>
							<template #items="{ item }">
								<NuxtLink :to="'/services' + item.link" class="block py-2 px-3">{{ item.name }}</NuxtLink>
							</template>
						</UIDropdown>
					</li>
					<li class="hover:text-main-300 transition-color">
						<NuxtLink to="/about">О нас</NuxtLink>
					</li>
					<li class="hover:text-main-300 transition-color">
						<NuxtLink to="/blog">Блог</NuxtLink>
					</li>
					<li class="hover:text-main-300 transition-color">
						<NuxtLink to="/contacts">Контакты</NuxtLink>
					</li>
				</ul>
			</nav>
			<div class="flex gap-4">
				<UIIcon @click="toggleSearch(true)" icon="magnify.svg"></UIIcon>
				<UIIcon icon="heart.svg"></UIIcon>
				<UIIcon class="hidden md:flex" icon="phone.svg"></UIIcon>
				<UIIcon @click="toggleMenu(true)" class="flex md:hidden" icon="burger.svg"></UIIcon>
				<UISelect :items="lang" :defaultValue="lang[0]" class="rounded-full hidden md:flex text-xl">
				</UISelect>
			</div>
			<div v-if="showMenu" class="fixed left-0 right-0 top-0 bottom-0 z-10 bg-black/50">
				<nav class="fixed top-0 right-0 h-[100vh]  z-50 bg-white w-3/4 sm:w-1/2 flex flex-col justify-between">
					<div>
						<div class="flex justify-end gap-3 p-5 border-b items-center h-[72px] sm:[100px]">
							<UISelect :items="lang" :defaultValue="lang[0]" class="rounded-full text-[1.4rem]">
							</UISelect>
							<UIIcon @click="toggleMenu(false)" class="" icon="close.svg"></UIIcon>
						</div>
						<ul class="flex flex-col gap-4 px-3 py-5 text-[1.7rem]">
							<li class="relative cursor-pointer">
								<UIDropdown :items="routes">
									<span>Услуги</span>
									<template #items="{ item }">
										<NuxtLink :to="'/services' + item.link" class="block py-2 pl-7 pr-3 text-[1.5rem]">{{
											item.name }}
										</NuxtLink>
									</template>
								</UIDropdown>
							</li>
							<li class="pl-4 hover:text-main-300 transition-color">
								<NuxtLink to="/about">О нас</NuxtLink>
							</li>
							<li class="pl-4 hover:text-main-300 transition-color">
								<NuxtLink to="/blog">Блог</NuxtLink>
							</li>
							<li class="pl-4 hover:text-main-300 transition-color">
								<NuxtLink to="/contacts">Контакты</NuxtLink>
							</li>
						</ul>
					</div>
					<div class="pl-4 mb-5">
						<UIButton>Задать вопрос</UIButton>
					</div>
				</nav>
			</div>

		</header>
		<SearchModal v-if="showSearch" @toggle="toggleSearch" />
	</div>
</template>

<script setup lang="ts">
const showMenu = ref(false)
const toggleMenu = (value: boolean) => {
	showMenu.value = value
}
const showSearch = ref(false)
const toggleSearch = (value: boolean) => {
	showSearch.value = value
}
const routes = ref(
	[
		{
			link: '/buy',
			name: 'Купить'
		},
		{
			link: '/reserve',
			name: 'Арендовать'
		},
		{
			link: '/sell',
			name: 'Продать'
		},
		{
			link: '/rating',
			name: 'Оценка недвижимости'
		}
	]
)
const lang = ref([
	{
		id: 'lang-1',
		name: 'Ru'
	},
	{
		id: 'lang-2',
		name: 'Uz'
	},
	{
		id: 'lang-3',
		name: 'Eng'
	},
])
</script>


<style lang="scss" scoped>
a.router-link-exact-active {
	@apply text-main-300
}
</style>