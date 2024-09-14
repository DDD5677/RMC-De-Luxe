<template>
	<div>
		<section class="singleBlog pt-10">
			<div class="container max-w-[950px] px-3">
				<div>
					<div class="flex">
						<span class="pr-5 border-r text-main-300">01.08.2024</span>
						<span class="ml-5 text-secondary-400 flex items-center gap-1">
							<EyeIcon class="w-4" /> <span>235</span>
						</span>
					</div>
					<div>
						<h4 class="title mb-10">Современные жилые комплексы предлагают расширенные удобства для жителей</h4>
						<div>
							<img class="w-full object-contain" src="@/assets/images/blogs/popular/popular-1.jpg"
								alt="image of buildings">
						</div>
						<p class="text-xl py-10">
							В последние годы современные жилые комплексы становятся не просто местом для проживания, а
							настоящими центрами удобства и комфорта. Архитекторы и девелоперы все больше внимания уделяют
							созданию условий, которые способствуют улучшению качества жизни и удовлетворению потребностей
							жителей.
						</p>
						<div class="py-10">
							<h6 class="text-2xl font-medium mb-5">Расширенные удобства: фитнес-центры, спа и зеленые зоны</h6>
							<p class="text-xl">
								В последние годы современные жилые комплексы становятся не просто местом для проживания, а
								настоящими центрами удобства и комфорта. Архитекторы и девелоперы все больше внимания уделяют
								созданию условий, которые способствуют улучшению качества жизни и удовлетворению потребностей
								жителей.
							</p>
						</div>
						<div class="py-10">
							<h6 class="text-2xl font-medium mb-5">Продуманная инфраструктура и умные технологии для комфорта
							</h6>
							<p class="text-xl">
								Ключевым элементом современных жилых комплексов является продуманная инфраструктура. Квартиры
								имеют современные планировки и высококачественные отделочные материалы, а также
								энергоэффективные технологии, которые помогают снижать затраты на коммунальные услуги. Некоторые
								комплексы предлагают умные системы управления домом, которые позволяют контролировать освещение,
								климат и безопасность через мобильные приложения
							</p>
						</div>
						<div>
							<img class="w-full object-contain" src="@/assets/images/blogs/popular/singleBlog.jpg"
								alt="image of buildings">
						</div>
						<div class="py-10">
							<h6 class="text-2xl font-medium mb-5">Современные технологии и улучшение качества жизни
							</h6>
							<p class="text-xl">
								Таким образом, современные жилые комплексы становятся не только местом для проживания, но и
								пространством, где каждый элемент продуман для создания максимального удобства и комфорта. Это
								делает их привлекательными для тех, кто ценит качество жизни и хочет наслаждаться всеми
								преимуществами современных технологий и услуг
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="share my-[5rem] lg:my-[12.5rem] bg-main-blue">
			<div class="container px-3 relative">
				<div class="absolute left-3 -top-10 w-[281px] sm:w-[542px] lg:w-1/2">
					<img src="@/assets/images/blogs/popular/popular-1.jpg" alt="">
				</div>
				<div class="flex max-lg:flex-col justify-end">
					<div class="lg:w-1/2 pt-[170px] sm:pt-[340px] pb-10 lg:py-10 lg:pl-10">
						<h5 class="font-semibold text-3xl sm:text-4xl mb-5">Поделитесь новостью</h5>
						<div class="flex flex-wrap gap-5">
							<UIButton>Копировать ссылку</UIButton>
							<ul class="flex gap-4 items-center">
								<li>
									<a href="#"><img src="@/assets/images/icons/icon-1.svg" alt="instagram"></a>
								</li>
								<li>
									<a href="#"><img src="@/assets/images/icons/icon-2.svg" alt="instagram"></a>
								</li>
								<li>
									<a href="#"><img src="@/assets/images/icons/icon-4.svg" alt="instagram"></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Blogs class="py-[5rem] lg:py-[12.5rem]" title="Другие статьи" />

	</div>
</template>

<script setup lang="ts">
import { EyeIcon } from '@heroicons/vue/24/outline';


</script>

<style scoped>
.share button {
	@apply max-sm:px-4;
}
</style>