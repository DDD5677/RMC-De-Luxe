<template>
	<div class="h-[100vh] flex flex-col justify-between text-secondary-500">
		<Header />
		<main class="flex-grow bg-white">


			<NuxtPage></NuxtPage>
		</main>
		<Footer />
	</div>
</template>
<style>
.container {
	margin: 0 auto;
}

.title {
	@apply text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-medium
}

a.router-link-active {
	@apply text-main-300
}
</style>
