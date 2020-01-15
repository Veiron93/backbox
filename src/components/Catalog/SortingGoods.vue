<template>
	<div class="sortingGoods">
		<div class="title">
			<p>Сортировать по:</p>
		</div>
	
		<div class="list-items">
			<div>
				<p>Цене</p>
				<img src="@/assets/img/icons/sort.svg" alt="">
			</div>
			<div class="active">
				<p>Скидке</p>
				<img src="@/assets/img/icons/sort.svg" alt="">
			</div>
			<div>
				<p>Популярности</p>
				<img src="@/assets/img/icons/sort.svg" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: [],

		data () {
			return {
				
			}	
		},

		methods: {
			
		},

		mounted: function() {
			
		}
	};
</script>

<style lang="scss">
	.sortingGoods{
		@include style-block;
		padding: 10px;
				
		display: flex;
		align-items: center;
		flex: none;
		width: calc(100% - 110px);
		margin-right: 10px;

		.title{
			margin-right: 20px;
			p{
				font-size: 14px;
			}
		}

		.list-items{
			display: flex;
			align-items: center;

			> div{
				display: flex;
				align-items: center;
				margin-right: 20px;
				cursor: pointer;

				p{
					font-size: 14px;
				}

				img{
					height: 12px;
					margin-left: 5px;
					display: none;
				}

				&.active{
					p{
						color: $accentHover;
					}

					img{
						display: block;
					}
				}
			}
		}			
	}
</style>
