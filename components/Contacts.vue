<template>
	<section class="contacts">
		<div class="container px-4">
			<div class="bg-main-blue flex flex-col-reverse lg:flex-row lg:justify-between">
				<div class="p-8 lg:p-[3.5rem] ">
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
				<div class="w-full h-[25rem] lg:w-[36rem] lg:h-[50rem] xl:h-[45rem]"> <img
						class="object-cover object-top w-full h-full" src="@/assets/images/contacts.jpg" alt="">
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>