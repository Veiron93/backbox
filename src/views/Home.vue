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

			<div class="row">
				<div class="col-12">
					<div class="title-section">
						<h2>Хиты продаж</h2>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="productCard">
						<div class="photo">
							<a href="">
								<img src="@/assets/img/test/tovar.jpg" alt="">
							</a>
						</div>

						<div class="info">
							<div class="name">
								<a href="">Игровая консоль</a>
							</div>
							
							<div class="price_and_btn_add">
								<div class="price">
									<p>1500 <span>₽</span></p>
								</div>

								<div class="btn_add">
									<a href="">
										<img src="@/assets/img/icons/white-box.svg" alt="">
										<span>Добавить <br> в коробку</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-3">
					<div class="productCard">
						<div class="photo">
							<a href="">
								<img src="@/assets/img/test/tovar.jpg" alt="">
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
								<a href="">Игровая консоль</a>
							</div>
							
							<div class="price_and_btn_add">
								<div class="price">
									<p class="old-price">2000</p>
									<p>1500 <span>₽</span></p>
								</div>

								<div class="btn_add">
									<a href="">
										<img src="@/assets/img/icons/white-box.svg" alt="">
										<span>Добавить <br> в коробку</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-3">
					<div class="productCard">
						<div class="photo">
							<a href="">
								<img src="@/assets/img/test/tovar-1.jpeg" alt="">
							</a>
						</div>

						<div class="info">
							<div class="name">
								<a href="">Игровая консоль c цветным экраном 108 игр</a>
							</div>
							
							<div class="price_and_btn_add">
								<div class="price">
									<p>1500 <span>₽</span></p>
								</div>

								<div class="btn_add active">
									<a href="">
										<img src="@/assets/img/icons/white-box-close.svg" alt="">
										<span>В коробке</span>
									</a>
								</div>
							</div>
						</div>
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

						<slide>
							<div class="productCard productCard--mini">
								<div class="photo">
									<a href="">
										<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									</a>
								</div>

								<div class="info">
									<div class="name">
										<a href="">Игровая консоль c цветным экраном 108 игр</a>
									</div>
									
									<div class="price_and_btn_add">
										<div class="price">
											<p>1500 <span>₽</span></p>
										</div>

										<div class="btn_add active" title="В коробке">
											<a href="">
												<img src="@/assets/img/icons/white-box-close.svg" alt="">
											</a>
										</div>
									</div>
								</div>
							</div>
						</slide>

						<slide>
							<div class="productCard productCard--mini">
								<div class="photo">
									<a href="">
										<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									</a>
								</div>

								<div class="info">
									<div class="name">
										<a href="">Игровая консоль c цветным экраном 108 игр</a>
									</div>
									
									<div class="price_and_btn_add">
										<div class="price">
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

						<slide>
							<div class="productCard productCard--mini">
								<div class="photo">
									<a href="">
										<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									</a>
								</div>

								<div class="info">
									<div class="name">
										<a href="">Игровая консоль c цветным экраном 108 игр</a>
									</div>
									
									<div class="price_and_btn_add">
										<div class="price">
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

						<slide>
							<div class="productCard productCard--mini">
								<div class="photo">
									<a href="">
										<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									</a>
								</div>

								<div class="info">
									<div class="name">
										<a href="">Игровая консоль c цветным экраном 108 игр</a>
									</div>
									
									<div class="price_and_btn_add">
										<div class="price">
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

						<slide>
							<div class="productCard productCard--mini">
								<div class="photo">
									<a href="">
										<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									</a>
								</div>

								<div class="info">
									<div class="name">
										<a href="">Игровая консоль c цветным экраном 108 игр</a>
									</div>
									
									<div class="price_and_btn_add">
										<div class="price">
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

						<slide>
							<div class="productCard productCard--mini">
								<div class="photo">
									<a href="">
										<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									</a>
								</div>

								<div class="info">
									<div class="name">
										<a href="">Игровая консоль c цветным экраном 108 игр</a>
									</div>
									
									<div class="price_and_btn_add">
										<div class="price">
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

						<slide>
							<div class="productCard productCard--mini">
								<div class="photo">
									<a href="">
										<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									</a>
								</div>

								<div class="info">
									<div class="name">
										<a href="">Игровая консоль c цветным экраном 108 игр</a>
									</div>
									
									<div class="price_and_btn_add">
										<div class="price">
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

						<slide>
							<div class="productCard productCard--mini">
								<div class="photo">
									<a href="">
										<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									</a>
								</div>

								<div class="info">
									<div class="name">
										<a href="">Игровая консоль c цветным экраном 108 игр</a>
									</div>
									
									<div class="price_and_btn_add">
										<div class="price">
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

						<slide>
							<div class="productCard productCard--mini">
								<div class="photo">
									<a href="">
										<img src="@/assets/img/test/tovar-1.jpeg" alt="">
									</a>
								</div>

								<div class="info">
									<div class="name">
										<a href="">Игровая консоль c цветным экраном 108 игр</a>
									</div>
									
									<div class="price_and_btn_add">
										<div class="price">
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

			<div class="row">
				<div class="col-12">
					<div class="popularCategories">
						<div class="title">
							<p>Популярные категории</p>
						</div>

						<div class="list">
							<a href="">Защитные стёкла</a>
							<a href="">Чехлы для Apple iPhone</a>
							<a href="">ПК переходники</a>
							<a href="">Защитные стёкла</a>
							<a href="">Защитные стёкла</a>
							<a href="">Защитные стёкла</a>
						</div>
					</div>
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
			Slide
		}
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

	.popularCategories{
		margin-top: 40px;
		background: #fff;
		border-radius: 4px;
		padding: 10px;
		box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);

		.title{
			margin-bottom: 5px;
			p{
				text-transform: uppercase;
				font-weight: bold;
				letter-spacing: 1px;
				font-size: 14px;
			}
		}

		.list{
			a{
				font-size: 14px;
				margin-right: 15px;
				&:last-child{
					margin-right: 0;
				}
			}
		}
	}
</style>
