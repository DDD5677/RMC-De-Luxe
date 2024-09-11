<template>
	<section class="buying_process">
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
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>