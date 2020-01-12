<template>
	<div class="category">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="breadcrumbs">
						<a href="">Смартфоны</a>
						<a href="">Смартфоны</a>
						<p>Apple</p>
					</div>
				</div>

				<div class="col-12">
					<div class="heading-page">
						<h1>Автомобильные беспроводные зарядки</h1>
					</div>
				</div>

				<div class="col-12 list-categories" v-show="0">
					<div class="row">
						<div class="col-lg-3">
							<div class="item-category">
								<router-link to="/catalog/category/1">
									<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									<span>Защитные стёкла</span>
								</router-link>
							</div>
						</div>
					</div>
				</div>

				<div class="col-12">
					<div class="row">
						<div class="col-xl-3">
							<div class="products-filters">
								<p>Какие то фильтры</p>
								<p>Какие то фильтры</p>
								<p>Какие то фильтры</p>
								<p>Какие то фильтры</p>
							</div>
						</div>

						<div class="col-xl-9">

							<div class="control-list-products">
								<div class="products-sortings">
									<p>Сортировать по:</p>

									<div class="list-sorting">
										<a href="">Цене</a>
										<a href="">Скидке</a>
										<a href="">Популярности</a>
									</div>
								</div>

								<div class="products-view">
									<p>Вид:</p>

									<div v-on:click="listGoodsView" class="item item-list">
										<img src="@/assets/img/icons/listing.svg" alt="">
									</div>

									<div v-on:click="listGoodsView" class="item item-table active">
										<img src="@/assets/img/icons/table.svg" alt="">
									</div>
								</div>
							</div>

							<div class="listGoods view-list">
								<ProductItem v-bind:state="state"/>
								<ProductItem/>
								<ProductItem/>
								<ProductItem/>
								<ProductItem/>
								<ProductItem/>
								<ProductItem/>
								<ProductItem/>
								<ProductItem/>
								<ProductItem/>
								<ProductItem/>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>



<script>
	// @ is an alias to /src

	export default	{
		//name: 'product',

		components: {
			ProductItem: () => import('@/components/Goods/ProductItem'),
		},

		data () {
			return {
				state: true
			}	
		},

		methods: {
			listGoodsView(){
				
			}
		},

		mounted () {

		}
	}
</script>


<style lang="scss">

	.products-filters{
		@include style-block;
		padding: 20px;
	}

	
	.control-list-products{
		display: flex;
		margin-bottom: 20px;

			.products-sortings{
				@include style-block;
				padding: 10px;
				
				display: flex;
				align-items: center;
				flex: none;
				width: calc(100% - 110px);
				margin-right: 10px;

				p{
					margin-right: 15px;
					font-size: 14px;
				}

				.list-sorting{
					a{
						font-size: 14px;
						margin-right: 20px;
					}
				}
				
			}

			.products-view{
				@include style-block;
				width: 100px;
				flex: none;
				display: flex;
				align-items: center;
				padding: 0 10px;

				p{
					font-size: 14px;
				}

				.item{
					margin-left: 10px;
					cursor: pointer;
					
					img{
						height: 14px;
						opacity: .5;
						display: block;
						transition: opacity .2s;
					}

					&:hover, &.active{
						img{
							opacity: .8;
						}
					}

					&.active{
						cursor: default;
					}
				}
			}
		}

	
	.listGoods{

		&.view-list{
			.productItem{
				margin-bottom: 15px;
			}
		}

		&.view-grid{
			display: flex;
			flex-wrap: wrap;

			.productItem{
				height: calc(100% - 20px);
				width: calc((100% - 40px)/3);
				margin-right: 20px;
				margin-bottom: 20px;

				&:nth-of-type(3n){
					margin-right: 0;
				}
			}
		}
	}
	

	.item-category{
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



	.breadcrumbs{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 15px;		

		a, p{
			font-size: 13px;
		}

		a{
			color: #888888;
			margin-right: 8px;
			display: flex;
			align-items: center;
			transition: color .2s;

			&:after{
				content: "";
				display: block;
				height: 8px;
				width: 8px;
				//border: 1px solid red;
				background: url("../../assets/img/icons/breadcrumbs-arrow.svg");
				background-size: contain;
				margin-top: 1px;
				margin-left: 8px;
				background-repeat: no-repeat;
			}

			&:hover{
				color: $accent;
			}
		}

		p{
			color: #5e5e5f;
		}
	}
</style>
