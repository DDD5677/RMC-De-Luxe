<template>
	<section class="blogs">
		<div class="container px-4">
			<h5 class="title mb-7">Блог</h5>
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
				<BlogItem v-for="blog in blogs" :key="blog.id" :blog="blog" />
			</div>
			<div class="flex justify-center mt-[4.5rem]">
				<UIButton>Все статьи</UIButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import imageBlog1 from '@/assets/images/blogs/blog-1.jpg'
import imageBlog2 from '@/assets/images/blogs/blog-2.jpg'
import imageBlog3 from '@/assets/images/blogs/blog-3.jpg'
const blogs = ref([
	{
		id: 'blog-1',
		image: imageBlog1,
		title: 'Тенденции и прогнозы рынка недвижимости на 2024 год',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-2',
		image: imageBlog2,
		title: 'Лучшие районы для инвестиций в недвижимость',
		createdAt: '31.07.2024',
		views: '899'
	},
	{
		id: 'blog-3',
		image: imageBlog3,
		title: 'Топ-10 новых жилых комплексов',
		createdAt: '31.07.2024',
		views: '899'
	},
])
</script>

<style scoped></style>