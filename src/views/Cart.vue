<template>
	<div class="container cart">
		<div class="row">
			<div class="col-12">
				<div class="heading-page">
					<h1>Коробка</h1>
				</div>
			</div>

			<div class="col-xl-9">
				<div class="cart-box">
					<div class="list-goods">
						<div class="item">
							<div class="photo">
								<a href="">
									<img src="@/assets/img/test/tovar-1.jpeg" alt="">
								</a>
							</div>

							<div class="name">
								<a href="">Защитный чехол iPhone XS</a>
								<p>Код товара: <span>45363</span></p>
							</div>

							<div class="count">
								<button data-type="minus">-</button>
								<input type="number" value="1">
								<button data-type="plus">+</button>
							</div>

							<div class="price">
								<p class="price-tovar"><span>1050</span> ₽</p>
								<p class="summa"><span>2</span> шт. × <span>2100</span> ₽</p>
							</div>

							<div class="del">
								<img src="@/assets/img/icons/delete.svg" alt="">
							</div>
						</div>

						<div class="item">
							<div class="photo">
								<a href="">
									<img src="@/assets/img/test/tovar-1.jpeg" alt="">
								</a>
							</div>

							<div class="name">
								<a href="">Защитный чехол Samsung Galaxy S10 Plus Чёрный изумруд</a>
								<p>Код товара: <span>22</span></p>
							</div>

							<div class="count">
								<button data-type="minus">-</button>
								<input type="number" value="1">
								<button data-type="plus">+</button>
							</div>

							<div class="price">
								<p class="price-tovar"><span>780</span> ₽</p>
								<p class="summa"><span>13</span> шт. × <span>12100</span> ₽</p>
							</div>

							<div class="del">
								<img src="@/assets/img/icons/delete.svg" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xl-3">
				<div class="form-order">
					<div class="delivery-section">
						
						<div class="title">
							<p>Доставка</p>
						</div>

						<form class="list-delivery">

							<div class="item">
								<label>
									<input type="radio" value="Бесплатно" v-model="selectDelivery">
									<span>Самовывоз</span>
								</label>
							</div>

							<div class="item">
								<label>
									<input type="radio" v-bind:value="{code:'ys', price:'200'}" v-model="selectDelivery">
									<span>Доставка по Южно-Сахалинску</span>
								</label>
							</div>

							<div class="item">
								<p>Доставка по Сахалинской области в пределах 30км <img src="@/assets/img/icons/arrow-bottom-black.svg" alt=""></p>
								
								<div class="list-cities">
									<label v-for="city in cityDelivery" v-bind:key="city.id">
										<input type="radio" v-bind:value="{code:city.code, price:city.price}"  v-model="selectDelivery">
										<span>{{city.name}} - {{city.price}}</span>
									</label>
								</div>
							</div>
						</form>
					</div>

					<div class="promocode-section">
						<div class="title">
							<p>Промокод</p>
						</div>

						<div class="promocode-form">
							<form>
								<input name="promocode" type="text" placeholder="Введите промокод" v-model="promocode">
								<button>
									<img src="@/assets/img/icons/check-white.svg" alt="">
								</button>
							</form>

							<div v-if="infoPromocode" class="info-promocode">
								<p>{{infoPromocode}}</p>
							</div>
						</div>
					</div>

					<div class="total-price-section">
						<div class="title">
							<p>Итого</p>
						</div>

						<div class="list-price">
							<div class="item delivery">
								<p>Доставка:</p>
								<p>
									<span v-if="selectDelivery.code">{{selectDelivery.price}} ₽</span> 
									<span v-else>{{selectDelivery}}</span>
								</p>
							</div>

							<div v-if="promocode" class="item promocode">
								<p>Промокод:</p>
								<p><span>-350</span> ₽</p>
							</div>

							<div class="item total">
								<p>Всего к оплате:</p>
								<p><span>1350</span> ₽</p>
							</div>
						</div>
					</div>

					<a class="btn-buy" href="#">Оформить заказ</a>
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
			
		},

		data () {
			return {
				selectDelivery: "",
				promocode: "",
				infoPromocode: "Промокод не активен",
				cityDelivery: [
					{"id":"22", "code":"dal", "name": "с. Дальнее", "price": "250"},
					{"id":"33", "code":"lug", "name": "Луговое", "price": "300"},
					{"id":"44", "code":"tro", "name": "Троицкое", "price": "300"}
				],

				promocodesTest: [
					{"id":"1", "code":"12345", "price":"200"},
					{"id":"2", "code":"321", "price":"100"}
				]
			}	
		},

		methods: {
		
		},

		mounted () {

		}
	}
</script>


<style lang="scss">

	.cart{
		.cart-box{
			//border: 1px solid red;
			background: #fff;
			padding: 0 20px;
			box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);
			border-radius: 4px;

			.list-goods{

				.item{
					border-bottom: 1px solid #ececec;
					display: flex;
					padding: 20px 0px;
					
					&:last-child{
						border: none;
					}

					.photo{
						width: 70px;
						height: 70px;
						margin-right: 30px;
						a{
							img{
								max-width: 100%;
								max-height: 100%;
							}
						}
					}

					.name{
						width: 350px;
						margin-right: 30px;
						//border: 1px solid red;

						a{
							font-size: 16px;
							line-height: 1.35em;
						}

						p{
							font-size: 13px;
							margin-top: 7px;
							color: #808080;
							span{
								color: #808080;
							}
						}
					}

					.count{
						width: 120px;
						//border: 1px solid red;
						margin-right: 30px;
						display: flex;

						button, input{
							outline: none;
							border: 1px solid #d4d4d4;
						}

						button{
							height: 30px;
							width: 30px;
							font-size: 19px;
							color: #808080;
							background: none;
							cursor: pointer;

							&[data-type="minus"]{
								border-right: none;
								border-radius: 4px 0 0 4px;
							}

							&[data-type="plus"]{
								border-left: none;
								border-radius: 0 4px 4px 0;
							}
						}

						input{
							width: 30px;
							height: 30px;
							-moz-appearance: textfield;
							text-align: center;
							border-right: none;
							border-left: none;
							font-size: 14px;
						}

						input::-webkit-outer-spin-button,
						input::-webkit-inner-spin-button {
							appearance: none;
							margin: 0;
						}
					}

					.price{
						//border: 1px solid red;

						.price-tovar{
							font-size: 20px;
							font-weight: bold;
							margin-bottom: 5px;
							line-height: 1em;
						}

						.summa{
							font-size: 14px;
							color: #808080;
							line-height: 1em;

							span{
								color: #808080;
							}
						}
						
					}

					.del{
						margin-left: auto;
						cursor: pointer;
						img{
							height: 16px;
						}
					}
				}
			}
		}

		.form-order{
			//border: 1px solid red;
			box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);
			background: #fff;
			border-radius: 4px;
			padding: 15px;

			.delivery-section{
				border-bottom: 1px solid #ececec;
				padding-bottom: 15px;
				margin-bottom: 15px;

				.title{
					margin-bottom: 12px;
					p{
						text-transform: uppercase;
						font-size: 14px;
						font-weight: bold;
					
					}
				}

				.list-delivery{
					.item{
						margin-bottom: 12px;

						&:last-child{
							margin-bottom: 0;
						}

						//border: 1px solid red;

						label{
							display: flex;
							cursor: pointer;
							
							input{
								margin-top: 1px;
								margin-right: 8px;

								border: 1px solid #bebdbd;
								width: 14px;
								height: 14px;

								flex: none;
								border-radius: 50%;

								appearance: none;
								outline: none;
								cursor: pointer;

								&:before{
									content: "";
									display: block;
									height: 10px;
									width: 10px;
									border-radius: 50%;
									margin-top: 1px;
									margin-left: 1px;
								}

								&:checked{
									&:before{
										background: $accent;
									}
								}
							}

							span{
								font-size: 13px;
								line-height: 1.35em;
							}
						}

						p{
							font-size: 13px;
							line-height: 1.35em;
							display: flex;
							align-items: center;

							img{
								margin-left: 5px;
								height: 10px;
							}
						}

						.list-cities{
							margin-top: 10px;

							label{
								margin-bottom: 5px;
							}
						}
					}
				}
			}

			.promocode-section{
				border-bottom: 1px solid #ececec;
				padding-bottom: 15px;
				margin-bottom: 15px;

				.title{
					margin-bottom: 12px;
					p{
						text-transform: uppercase;
						font-size: 14px;
						font-weight: bold;
					
					}
				}

				.promocode-form{
					form{
						display: flex;

						input, button{
							outline: none;
						}

						input{
							height: 34px;
							font-size: 14px;
							padding: 0px 38px 0 5px;
							border-radius: 4px;
							border: 1px solid rgba(168, 166, 166, 0.747);
							background: #fff;
							width: 100%;
						}

						button{
							height: 26px;
							width: 26px;
							border-radius: 4px;
							background: $accentHover;
							border: none;
							margin-top: 4px;
							margin-left: -30px;
							cursor: pointer;
							display: flex;
							align-items: center;
							justify-content: center;

							img{
								height: 10px;
							}
						}
					}

					.info-promocode{
						margin-top: 10px;
						font-size: 14px;

						p{
							color: red;
						}
						
					}
				}	
			}

			.total-price-section{
				.title{
					margin-bottom: 12px;
					p{
						text-transform: uppercase;
						font-size: 14px;
						font-weight: bold;
					
					}
				}

				.list-price{
					.item{
						display: flex;
						justify-content: space-between;

						p{
							font-size: 14px;
							margin-bottom: 10px;
							line-height: 1em;
						}

						&.total{
							p{
								font-weight: bold;
							}
						}
					}
					
				}

			}

			.btn-buy{
				text-transform: uppercase;
				border-radius: 4px;
				font-size: 13px;
				background: $accentHover;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 156px;
				height: 38px;
				margin: 20px auto 0;
				letter-spacing: .5px;
			}
		}
	}
</style>
