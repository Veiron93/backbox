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

								<ViewCatalog 
									:getTypeViewListGoods='getTypeViewListGoods' 
									:active="viewListGoods"
								/>
							</div>

							<div class="listGoods" v-bind:class="viewListGoods">
								<ProductItem v-bind:state="true" v-bind:stocks="stocks"/>
								<ProductItem v-bind:state="false" v-bind:stocks="[]"/>
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
			ViewCatalog: () => import('@/components/Goods/ViewCatalog'),
			ProductItem: () => import('@/components/Goods/ProductItem'),
		},

		data () {
			return {
				viewListGoods: "grid",
				state: true,
				stocks: [
					{"id":"123", "title":"Рассрочка 24.0.0", "img":"https://cdn.svyaznoy.ru/upload/files/svg/product-sticker-svg-round-id/931/0_0_24.svg"},
					{"id":"2", "title":"Рассрочка 14.0.0", "img":"https://cdn.svyaznoy.ru/upload/files/svg/product-sticker-svg-round-id/931/0_0_24.svg"}
				]
			}	
		},

		methods: {
			getTypeViewListGoods (data) {
				if(data){
					this.viewListGoods = data.result;
				}
			}
		},

		mounted () {

			// получаем из localStorage type отображения списка товаров
			if (localStorage.viewListGoods) {
				this.viewListGoods = localStorage.viewListGoods;
			}
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
		}

	
	.listGoods{

		&.list{
			.productItem{
				margin-bottom: 15px;
			}
		}

		&.grid{
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
