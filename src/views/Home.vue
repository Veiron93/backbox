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
						:autoplay="true" 
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

	.productCard{
		//border: 1px solid red;
		background: #fff;
		border-radius: 4px;
		box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.2);
		margin-bottom: 30px;
		height: calc(100% - 30px);
		position: relative;

		.photo{
			//border: 1px solid red;
			height: 200px;
			a{
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				padding: 20px;
				img{
					display: block;
					max-height: 100%;
					max-width: 100%;
				}
			}
		}

		.info{
			//border: 1px solid red;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: calc(100% - 200px);

			.name{
				padding: 0px 15px;
				//border: 1px solid red;
				a{
					font-size: 16px;
					line-height: 1.1em;

					&:hover{
						color: #526194;
					}
				}
			}

			.price_and_btn_add{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20px 0px 10px 15px;

				.price{
					p{
						font-weight: bold;
						font-size: 20px;
						line-height: 1em;
					}
				}

				.btn_add{
					//border: 1px solid red;
					height: 34px;
					width: 124px;
					border-radius: 4px 0px 0px 4px;
					background: #000;
					transition: background .2s;

					&:hover{
						background: #526194;
					}

					a{
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 0 10px;
						
						img{
							height: 20px;
							display: block;
						}

						span{
							color: #fff;
							font-size: 11px;
							text-transform: uppercase;
							line-height: 1.30em;
							letter-spacing: 1px;
						}

					}

					&.active{
						background: #526194;
					}
				}
			}
		}

		&--mini{
			//border: 1px solid red;
			//margin-left: 20px;
			//margin-right: 10px;
			margin-bottom: 0;
			height: 100%;

			.photo{
				//border: 1px solid red;
				height: 140px;
				a{
					padding: 15px;
				}
			}

			.info{
				//border: 1px solid red;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: calc(100% - 200px);

				.name{
					padding: 0px 10px;
					//border: 1px solid red;
					a{
						font-size: 16px;
						line-height: 1.1em;

						&:hover{
							color: #526194;
						}
					}
				}

				.price_and_btn_add{
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 10px 0px 10px 10px;

					.price{
						p{
							font-size: 18px;
						}
					}

					.btn_add{
						//border: 1px solid red;
						height: 34px;
						width: 40px;

						&:hover{
							background: #526194;
						}

						a{
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: space-between;
							padding: 0 10px;
							
							img{
								height: 20px;
								display: block;
								margin-right: 10px;
							}

							span{
								font-size: 11px;
								display: none;
							}

						}

						&.active{
							background: #526194;
						}
					}
				}
			}
		}
	}
</style>
