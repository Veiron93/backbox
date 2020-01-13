<template>
	<div class="productItem">
		<div class="photo">
			<a href>
				<img src="@/assets/img/test/tovar-1.jpeg" alt />
			</a>

			<div v-if="stocks" class="stikers">
				<div v-for="stock in stocks" v-bind:key="stock.id" class="item rassrochka24">
					<img v-bind:src="stock.img" alt="">
					<div class="tooltip"></div>
				</div>
			</div>
		</div>

		<div class="info">
			<div class="name">
				<a href="">Игровая консоль c цветным экраном 108 игр</a>
				<p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, similique! Asperiores quae minima dolore beatae fugiat laboriosam ducimus facere aspernatur odio, nulla ab ratione nobis! Quam reiciendis illo iure dolorem!</p>
			</div>

			<div class="price_and_btn_buy">
				<div class="price">
					<p>1500<span>₽</span></p>
				</div>

				<div class="btn_buy">
					<a v-if="state" href="" class="toCart">
						<img src="@/assets/img/icons/white-box-close.svg" alt="">
						<span>В коробке</span>
					</a>

					<a v-else href="" class="addProduct">
						<img src="@/assets/img/icons/white-box.svg" alt="">
						<span>Добавить <br> в коробку</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "productItem",
		props: {
			state: Boolean,
			stocks: Array
		}
	};
</script>

<style lang="scss">

	.productItem {
		@include style-block;
		position: relative;

		.photo{
			a{
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;

				img{
					display: block;
					max-height: 100%;
					max-width: 100%;
				}
			}

			.stikers{
				//border: 1px solid red;
				border-radius: 4px;
				position: absolute;
				top: 10px;
				left: 10px;

				.item{
					//border: 1px solid red;
					border-radius: 4px;
					height: 30px;
					width: 60px;
					padding: 3px 5px;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;

					margin-bottom: 6px;

					&:last-child{
						margin-bottom: 0;
					}

					img{
						display: block;
					}

					&.rassrochka24{
						background: rgba(#ffc800, .8);
					}
				}
			}
		}

			.info{
				//border: 1px solid red;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.name{
					a{
						&:hover{
							color: #526194;
						}
					}
				}

				.price_and_btn_buy{
					display: flex;
					align-items: center;
					justify-content: space-between;

					.price{
						position: relative;

						p{
							font-weight: bold;
							font-size: 20px;
							line-height: 1em;
						}

						.old-price{
							font-size: 15px;
							font-weight: normal;
							//border: 1px solid red;
							position: absolute;
							display: flex;
							align-items: center;
							margin-top: -16px;
							margin-left: 3px;
							color: #9a9a9a;

							&:before{
								content: '';
								width: calc(100% + 6px);
								display: block;
								height: 1px;
								background: #9a9a9a;
								position: absolute;
								left: -3px;
							}
						}
					}

					.btn_buy{
						//border: 1px solid red;
						height: 34px;
						width: 124px;
						border-radius: 4px 0px 0px 4px;
						overflow: hidden;

						a{
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: space-between;
							padding: 0 10px;


							&.addProduct{
								background: #000;
								transition: background .2s;

								&:hover{
									background: #526194;
								}
							}

							&.toCart{
								background: #526194;
							}
							
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
					}
				}
			}

	}

	.grid{
		.productItem {
			
			.photo{
				//border: 1px solid red;
				height: 200px;
				padding: 20px;

				.stikers{
					//border: 1px solid red;
					border-radius: 4px;
					position: absolute;
					top: 10px;
					left: 10px;

					.item{
						//border: 1px solid red;
						border-radius: 4px;
						height: 30px;
						width: 60px;
						padding: 3px 5px;
						display: flex;
						align-items: center;
						justify-content: center;
						position: relative;

						margin-bottom: 6px;

						&:last-child{
							margin-bottom: 0;
						}

						img{
							display: block;
						}

						&.rassrochka24{
							background: rgba(#ffc800, .8);
						}
					}
				}
			}

			.info{
				//border: 1px solid red;
				height: calc(100% - 200px);

				.name{
					padding: 0px 15px;
					//border: 1px solid red;
					a{
						font-size: 16px;
						line-height: 1.1em;
					}

					.description{
						display: none;
					}
				}

				.price_and_btn_add{
					padding: 20px 0px 10px 15px;

					.price{
						//border: 1px solid red;

						p{
							font-weight: bold;
							font-size: 20px;
							line-height: 1em;
						}

						.old-price{
							font-size: 15px;
							font-weight: normal;
							//border: 1px solid red;
							position: absolute;
							display: flex;
							align-items: center;
							margin-top: -16px;
							margin-left: 3px;
							color: #9a9a9a;

							&:before{
								content: '';
								width: calc(100% + 6px);
								display: block;
								height: 1px;
								background: #9a9a9a;
								position: absolute;
								left: -3px;
							}
						}
					}

					.btn_add{
			
					}
				}
			}
		}
	}


	.list{
		.productItem{
			width: 100%;
			display: flex;

			.photo{
				//border: 1px solid red;
				width: 160px;
				padding: 20px;
				flex: none;

				.stikers{
					//border: 1px solid red;
					border-radius: 4px;
					position: absolute;
					top: 10px;
					left: 10px;

					.item{
						//border: 1px solid red;
						border-radius: 4px;
						height: 30px;
						width: 60px;
						padding: 3px 5px;
						display: flex;
						align-items: center;
						justify-content: center;
						position: relative;

						margin-bottom: 6px;

						&:last-child{
							margin-bottom: 0;
						}

						img{
							display: block;
						}

						&.rassrochka24{
							background: rgba(#ffc800, .8);
						}
					}
				}
			}


			.info{
				//border: 1px solid red;
				width: 100%;
				padding: 10px;
				padding-left: 20px;

				.name{			
					//border: 1px solid red;
					margin-bottom: 10px;

					a{
						font-size: 18px;
						line-height: 1.35em;
					}

					.description{
						margin-top: 10px;
						font-size: 14px;
						line-height: 1.5em;
						color: #6b6b6b;
					}
				}

				.price_and_btn_buy{

					.price{
						//border: 1px solid red;

						p{
							font-weight: bold;
							font-size: 20px;
							line-height: 1em;
						}

						.old-price{
							font-size: 15px;
							font-weight: normal;
							//border: 1px solid red;
							position: absolute;
							display: flex;
							align-items: center;
							margin-top: -16px;
							margin-left: 3px;
							color: #9a9a9a;

							&:before{
								content: '';
								width: calc(100% + 6px);
								display: block;
								height: 1px;
								background: #9a9a9a;
								position: absolute;
								left: -3px;
							}
						}
					}

					.btn_buy{
						margin-right: -10px;
					}
				}
			}
		}
	}
</style>
