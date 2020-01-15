<template>
	<div class="category-item">
		<router-link :to="'/catalog/category/' + category.id">
			<img src="@/assets/img/test/tovar-1.jpeg" alt="">
			<span>{{category.name}}</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		props: {
			category: Object
		},
		methods: {
		
		}
	};
</script>

<style lang="scss">
	.category-item{
		@include style-block;
		margin-bottom: 30px;
		height: calc(100% - 30px);

		a{
			padding: 20px;
			display: block;
			height: 100%;
			text-align: center;

			img{
				height: 140px;
				display: block;
				margin: 0 auto 20px;
			}

			span{
				font-weight: bold;
				font-size: 18px;
			}
		}
	}
</style>
