<template>
	<div class="pagination__wrapper">
		<ul class="pagination">
			<li v-if="pageSize > 3" class="page-item" @click.prevent="changePageData(decreamentPage())">
				<a class="page-link border-none" href="#">{{ '<' }}</a>
			</li>
			<li v-if="pageSize !== 1" v-for="pageNum in links" :key="pageNum" class="page-item"
				@click.prevent="changePageData(pageNum)">
				<a class="page-link  border-secondary-100"
					:class="{ 'active': pageNum === page, 'border': pageNum !== '...' }" href="#">{{ pageNum
					}}</a>
			</li>
			<li v-if="pageSize > 3" class="page-item" @click.prevent="changePageData(increamentPage())">
				<a class="page-link border-none" href="#">{{ '>' }}</a>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const emit = defineEmits(['page-change'])
const props = defineProps({
	page: {
		type: Number,
		required: true
	},
	pageSize: {
		type: Number,
		required: true
	},
	pageLimit: {
		type: Number,
		default: 2
	},
})

const pagesList = computed(() => {
	let pages = []
	for (let i = 1; i <= props.pageSize; i++) {
		pages.push(i)
	}
	return pages
})
const links = computed(() => {
	let first = [1, '...'], last = ['...', props.pageSize], ranges = [];
	if (props.page < props.pageLimit + 2) {
		ranges = range(1, Math.max(props.page, props.pageLimit) + 1)
		return (ranges.length < props.pageSize) ? ranges.concat(last) : ranges
	} else if (props.page > props.pageSize - props.pageLimit - 1) {
		ranges = range(props.pageSize - props.pageLimit - 1, props.pageSize)
		return (ranges.length < props.pageSize) ? first.concat(ranges) : ranges
	} else {
		ranges = range(props.page - Math.ceil(props.pageLimit / 2), props.page + Math.ceil(props.pageLimit / 2))
		return first.concat(ranges).concat(last);
	}
})
const range = (start, end) => {
	let pages = [];
	for (let i = start - 1; i < end; i++) {
		if (pagesList.value[i]) {
			pages.push(pagesList.value[i]);
		}
	}
	return pages
}

const changePageData = (page) => {
	if (page === '...')
		return
	emit('page-change', page)

}

const decreamentPage = () => {
	if (props.page === 1) {
		return props.pageSize
	}
	return props.page - 1

}
const increamentPage = () => {
	if (props.page === props.pageSize) {
		return 1
	}
	return props.page + 1

}

</script>

<style lang="scss" scoped>
.pagination__wrapper {
	display: flex;
	align-items: center;
	justify-content: center;


	.none {
		display: none;

	}
}

.pagination {
	display: flex;
	justify-content: center;
	align-items: center;


	.page-item {
		margin-right: 7px;

		.page-link {
			width: 50px;
			height: 50px;
			font-weight: 500;
			font-size: 20px;
			line-height: 25px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			color: #333;
			transition: all 0.2s ease-in;

			&:focus {
				outline: none;
			}

			&:hover {
				@apply text-main-300 border-main-200;
			}

			&.active {
				@apply text-white bg-main-300
			}

		}
	}
}

@media(max-width:610px) {
	.pagination {
		.page-item {
			margin-right: 0px;

			.page-link {
				font-size: 16px;
				padding: 3px 10px;
			}
		}
	}
}

@media(max-width:380px) {
	.pagination {
		.page-item {

			.page-link {
				font-size: 12px;
				padding: 2px 8px;
			}
		}
	}
}
</style>