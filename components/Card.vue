<!-- <template>
	<div class="flex flex-col justify-between h-full relative z-50 bg-gradient-to-b from-black/10 to-black/50">
		<div class="flex justify-end p-3">
			<HeartIconSolid v-if="slide.isFavorite" @click="addFavorite(slide.id, false)"
				class="w-10 cursor-pointer text-white" />
			<HeartIcon v-else class="w-10 cursor-pointer text-white" @click="addFavorite(slide.id, true)" />
		</div>
		<div class="text-white p-6">
			<p class="text-[2.2rem] font-semibold drop-shadow-lg">{{ slide.name }}</p>
			<p class="text-xl font-medium">от {{ slide.price }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Slide {
	isFavorite?: boolean,
	id: string,
	price?: string,
	name: string
}
defineProps<{ slide: Slide }>()
</script>

<style scoped></style> -->