<template>
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
</template>

<script setup lang="ts">

</script>

<style scoped></style>