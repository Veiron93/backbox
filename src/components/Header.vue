<template>
	<header>
		<div class="top">
			<div class="top-wrapper">
				<div class="logo">
					<router-link to="/">
						<img src="@/assets/img/logo.svg" alt="">
						<span>BlackBox</span>
					</router-link>
				</div>

				<div class="description">
					<p>Интернет магазин аксессуаров г. Южно-Сахалинск</p>
				</div>

				<div class="socials">
					<div class="item">
						<a href="">
							<img src="" alt="">
						</a>
					</div>
				</div>

				<nav>
					<router-link to="/actions">
						<img src="@/assets/img/icons/percentage.svg" alt="">
						<span>Акции</span>
					</router-link>

					<router-link to="/delivery">
						<img src="@/assets/img/icons/delivery-man.svg" alt="">
						<span>Доставка и оплата</span>
					</router-link>
				</nav>
			</div>
		</div>

		<div class="bottom">
			<div class="bottom-wrapper">
				<div class="btn-catalog">
					<img src="@/assets/img/icons/menu.svg" alt="">
					<span>Каталог товаров</span>
				</div>

				<div class="catalog-navigation">
					<p>Аксессуары для:</p>
					<a href="">Гаджетов</a>
					<a href="">Компьютеров</a>
					<a href="">Автомобилей</a>
					<a href="">Дома</a>
				</div>

				<div class="mini-cart">
					<router-link to="/cart">
						<img src="@/assets/img/icons/white-box.svg" alt="">
						<span>1450 <span>₽</span></span>
					</router-link>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		props: {

		}
	}
</script>

<style lang="scss">
	header{
		// border: 1px solid red;
		margin-bottom: 30px;
		box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);

		.top, .bottom{
			.top-wrapper, .bottom-wrapper{
				max-width: 1140px;
				margin: 0 auto;
				padding: 0px 15px;
			}
		}

		.top{
			//border: 1px solid red;
			background: #fff;

			.top-wrapper{
				display: flex;
				align-items: center;
				//justify-content: space-between;
				
				.logo{
					//border: 1px solid red;
					height: 46px;
					margin-right: 59px;
					

					a{
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;

						img{
							height: 36px;
							display: block;
							margin-right: 10px;
						}

						span{
							font-weight: bold;
							text-transform: uppercase;
							font-size: 14px;
						}
					}
				}

				.description{
					p{
						font-size: 13px;
					}
				}

				nav{
					margin-left: auto;
					display: flex;
					align-items: center;

					a{
						margin-left: 25px;
						
						display: flex;
						align-items: center;

						img{
							height: 18px;
							margin-right: 5px;
						}

						span{
							font-size: 15px;
						}
					}
				}
			}
		}

		.bottom{
			//background: $accent;
			background: #000;
			
			.bottom-wrapper{
				padding-top: 12px;
				padding-bottom: 12px;
				position: relative;

				display: flex;
				align-items: center;

				.btn-catalog{
					//border: 1px solid red;
					display: flex;
					align-items: center;
					margin-right: 60px;
					cursor: pointer;

					img{
						height: 14px;
						margin-right: 6px;
					}

					span{
						color: #fff;
						font-size: 13px;
					}
				}

				.catalog-navigation{
					display: flex;
					justify-content: center;
					align-items: center;
					
					p{
						color: #fff;
						font-size: 12px;
						padding: 3px 0;
						margin-right: 30px;
						text-transform: uppercase;
						letter-spacing: 1px;
					}

					a{
						color: #fff;
						text-transform: uppercase;
						font-size: 12px;
						margin-right: 34px;
						letter-spacing: 1px;
						line-height: 1em;
						padding: 3px 0;		

						display: flex;
						flex-direction: column;
						align-items: center;


						//border-bottom: 1px solid transparent;
						transition: border-color .2s;
						
						// &:last-child{
						// 	margin-right: 0;
						// }

						&:nth-child(1){
							//border-color: #526194;
						}

						&:hover{
							//border: 1px solid red;
							//border-color: #247ea9;
						}
					}
				}

				.mini-cart{
					margin-left: auto;

					display: flex;
					align-items: center;
					justify-content: flex-end;

					a{
						display: flex;
						align-items: center;

						img{
							height: 20px;
							margin-right: 5px;
						}

						span{
							font-size: 13px;
							color: #fff;
							letter-spacing: 1px;

							span{
								font-size: 12px;
							}
						}
						
					}
				}
			}
		}
	}
</style>