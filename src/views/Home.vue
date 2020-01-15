<template>
	<div class="index">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<carousel 
						:per-page="1" 
						:autoplay="true" 
						:autoplayTimeout="5000"
						:loop="true"
						class="index-slider">
						<slide>
							<a href="">
								<img src="@/assets/img/test/1.jpg" alt="">
							</a>
						</slide>
						<slide>
							<img src="@/assets/img/test/2.jpg" alt="">
						</slide>
					</carousel>
				</div>
			</div>

			<div class="row section-hits">
				<div class="col-12">
					<div class="title-section">
						<h2>Хиты продаж</h2>
					</div>
				</div>

				<div class="col-12">
					<div class="list-goods grid">
						<ProductItem v-bind:state="true" v-bind:stocks="stocks"/>
						<ProductItem v-bind:state="false" v-bind:stocks="[]"/>
					</div>				
				</div>		
			</div>

			<div class="row">
				<div class="col-12">
					<div class="title-section">
						<h2>Новинки</h2>
					</div>
				</div>

				<div class="col-12">
					<carousel 
						:per-page="1" 
						:autoplay="false" 
						:autoplayTimeout="5000"
						:loop="true"
						:perPageCustom="[[480, 2], [768, 5]]"
						class="goods-slider">

						<slide>
							<ProductItemMini v-bind:state="true" v-bind:stocks="stocks"/>
						</slide>
					</carousel>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import { Carousel, Slide } from 'vue-carousel';

	export default	{
		name: 'home',
		components: {
			Carousel,
			Slide,
			ProductItem: () => import('@/components/Catalog/ProductItem'),
			ProductItemMini: () => import('@/components/Catalog/ProductItemMini')
		},

		data () {
			return {
				state: true,
				stocks: [
					{"id":"2", "title":"Бесплатная доставка", "description":"", "background":"rgba(109,181,224,0.9)", "color":"#fff"}
				]
			}	
		},
	}
</script>


<style lang="scss">
	.title-section{
		text-align: center;
		margin-top: 50px;
		margin-bottom: 30px;

		h2{
			font-size: 30px;
			font-weight: 300;
			line-height: 1em;
			margin: 0;
		}
	}

	.section-hits{
		.list-goods{
			display: flex;
			flex-wrap: wrap;

			.product-item{
				flex: none;
				height: calc(100% - 20px);
				width: calc((100% - 60px)/4);
				margin-right: 20px;
				margin-bottom: 20px;

				&:nth-of-type(4n){
					margin-right: 0;
				}
			}
		}
	}

	
</style>
