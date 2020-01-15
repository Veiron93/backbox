<template>
	<div class="category">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<Breadcrumbs/>
				</div>

				<div class="col-12">
					<div class="heading-page">
						<h1>Автомобильные беспроводные зарядки</h1>
					</div>
				</div>

				<div class="col-12" v-show="1">
					<div class="list-categories">
						<CategoryItem v-for="category in categories" v-bind:key="category.id" v-bind:category="category"/>
					</div>
				</div>

				<div class="col-12" v-show="0">
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
								<SortingGoods/>
								<ViewCatalog 
									:getTypeViewListGoods='getTypeViewListGoods' 
									:active="viewListGoods"
								/>
							</div>

							<div class="list-goods" v-bind:class="viewListGoods">
								<ProductItem v-bind:state="true" v-bind:stocks="stocks"/>
								<ProductItem v-bind:state="false" v-bind:stocks="[]"/>
							</div>
							<vue-modal name="descriptionStock">hello, world!</vue-modal>
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
			Breadcrumbs: () => import('@/components/Breadcrumbs'),
			SortingGoods: () => import('@/components/Catalog/SortingGoods'),
			ViewCatalog: () => import('@/components/Catalog/ViewCatalog'),
			CategoryItem: () => import('@/components/Catalog/CategoryItem'),
			ProductItem: () => import('@/components/Catalog/ProductItem'),
		},

		data () {
			return {
				viewListGoods: "grid",
				state: true,
				stocks: [
					{"id":"123", "title":"Рассрочка 0|0|10", "description":"", "background":"rgba(109,181,224,0.9)", "color":"#fff"},
					{"id":"2", "title":"Бесплатная доставка", "description":"", "background":"rgba(109,181,224,0.9)", "color":"#fff"}
				],
				categories: [
					{"id":"22", "name":"Защитные стёкла", "img":"tovar-1.jpeg"},
					{"id":"12", "name":"Кабеля", "img":"tovar-1.jpeg"},
					{"id":"122", "name":"Чехлы", "img":"../../.."}
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

	.category{
		.products-filters{
			@include style-block;
			padding: 20px;
		}
		
		.control-list-products{
			display: flex;
			margin-bottom: 20px;
		}

		// СПИСОК КАТЕГОРИЙ
		.list-categories{
			display: flex;
			flex-wrap: wrap;
			
			.category-item{
				height: calc(100% - 20px);
				width: calc((100% - 60px)/5);
				margin-right: 20px;
				margin-bottom: 20px;

				&:nth-of-type(5n){
					margin-right: 0;
				}
			}
		}
		
		// СПИСОК ТОВАРОВ
		.list-goods{

			&.list{
				.product-item{
					margin-bottom: 15px;
				}
			}

			&.grid{
				display: flex;
				flex-wrap: wrap;

				.product-item{
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
	}
</style>
