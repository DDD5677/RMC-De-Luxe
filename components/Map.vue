<template>
	<div>
		<GoogleMap :api-key="key" :mapId="mapId" style="width: 100%; height: 650px" :center="center" :zoom="14">
		</GoogleMap>
	</div>
</template>

<script setup lang="ts">
import { GoogleMap } from 'vue3-google-map'

const center = { lat: 25.263, lng: 55.306 }

const config = useRuntimeConfig();
const key = config.public.googleApi
const mapId = config.public.mapId
</script>

<style></style>