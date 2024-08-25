<template>
	<button class="btn p-2 w-12 h-12 rounded-full flex items-center justify-center border">
		<img :src="`./icons/${icon}`"></img>
	</button>
</template>

<script setup lang="ts">
defineProps<{ icon: string }>()

</script>

<style lang="scss" scoped>
.btn {
	transition: all 0.2s ease-in;
}

img {
	transition: all 0.2s ease-in;
}

.btn:hover {
	background-color: #333;

	img {
		-webkit-filter: invert(100%);
		/* Safari/Chrome */
		filter: invert(100%);
	}
}
</style>