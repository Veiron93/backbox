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
					<div class="listGoods grid">
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
							<div class="productCard productCard--mini">
								<div class="photo">
									<a href="">
										<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									</a>

									<div class="stikers">
										<div class="item rassrochka24">
											<img src="https://cdn.svyaznoy.ru/upload/files/svg/product-sticker-svg-round-id/931/0_0_24.svg" alt="">
											<div class="tooltip">

											</div>
										</div>
										<div class="item rassrochka24">
											<img src="https://cdn.svyaznoy.ru/upload/files/svg/product-sticker-svg-round-id/931/0_0_24.svg" alt="">
											<div class="tooltip">

											</div>
										</div>
									</div>
								</div>

								<div class="info">
									<div class="name">
										<a href="">Игровая консоль c цветным экраном 108 игр</a>
									</div>
									
									<div class="price_and_btn_add">
										<div class="price">
											<p class="old-price">2000</p>
											<p>1500 <span>₽</span></p>
										</div>

										<div class="btn_add" title="В коробку">
											<a href="">
												<img src="@/assets/img/icons/white-box.svg" alt="">
											</a>
										</div>
									</div>
								</div>
							</div>
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
			ProductItem: () => import('@/components/Goods/ProductItem'),
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
		.listGoods{
			
		}
	}

	
</style>
