<template>
	<footer class="bg-main-grey">
		<div class="container px-4">
			<header class="flex py-12 justify-between items-center">
				<NuxtLink to="/"><img src="@/assets/images/logo.svg" alt=""></NuxtLink>
				<ul class="flex gap-4 items-center">
					<li>
						<a href="#"><img src="@/assets/images/icons/icon-1.svg" alt="instagram"></a>
					</li>
					<li>
						<a href="#"><img src="@/assets/images/icons/icon-2.svg" alt="instagram"></a>
					</li>
					<li>
						<a href="#"><img src="@/assets/images/icons/icon-3.svg" alt="instagram"></a>
					</li>
					<li>
						<a href="#"><img src="@/assets/images/icons/icon-4.svg" alt="instagram"></a>
					</li>
				</ul>
			</header>
			<div
				class="footer_menus py-12 grid grid-cols-2 gap-y-8 md:grid-cols-4 lg:grid-cols-5  border-y border-secondary-200">
				<ul>
					<li>
						<a href="#">Услуги </a>
					</li>
					<li>
						<a href="#">Купить </a>
					</li>
					<li>
						<a href="#">Арендовать </a>
					</li>
					<li>
						<a href="#">Продать </a>
					</li>
					<li>
						<a href="#">Оценить </a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="#">Недвижимость </a>
					</li>
					<li>
						<a href="#">Квартиры </a>
					</li>
					<li>
						<a href="#">Новостройки </a>
					</li>
					<li>
						<a href="#">Дома и участки </a>
					</li>
					<li>
						<a href="#">Коммерческая </a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="#">Компания </a>
					</li>
					<li>
						<a href="#">О нас </a>
					</li>
					<li>
						<a href="#">Блог </a>
					</li>
					<li>
						<a href="#">Контакты </a>
					</li>
					<li>
						<a href="#">Связаться </a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="#">Другое </a>
					</li>
					<li>
						<a href="#">Ипотечный калькулятор </a>
					</li>
					<li>
						<a href="#">Инвестиции в недвижимость в Дубае </a>
					</li>
				</ul>
			</div>
			<div class="flex justify-between items-center py-3">
				<span class="text-md text-secondary-300">2024 © RMC De Luxe real estate LLC. Все права защищены</span>
				<img src="@/assets/images/logo-result.svg" alt="logo-result">
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.footer_menus {
	ul {
		font-size: 1.25rem;

		li {
			&:first-child {
				font-size: 1.5rem;
				font-weight: 500;
				margin-bottom: 0.5rem;
			}
		}
	}
}
</style>