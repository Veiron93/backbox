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

				<MiniCart/>
			</div>
		</div>

		<div class="menu-catalog">
			<div class="menu-catalog_root">

				<div class="title-menu-catalog">
					<p>Аксессуары для</p>
				</div>

				<div class="list-root-categories">
					<div class="item">
						<div class="icon">
							<img src="@/assets/img/icons/delete.svg" alt="">
						</div>

						<div class="category">
							<div class="main-category">
								<router-link to="/">Гаджетов</router-link>
							</div>

							<div class="sub">
								<a href="">Модуляторы</a>
								<a href="">Автовизитки</a>
							</div>
						</div>
					</div>

					<div class="item">
						<div class="icon">
							<img src="@/assets/img/icons/delete.svg" alt="">
						</div>

						<div class="category">
							<div class="main-category">
								<router-link to="/">Гаджетов</router-link>
							</div>

							<div class="sub">
								<a href="">Модуляторы</a>
								<a href="">Автовизитки</a>
							</div>
						</div>
					</div>

					<div class="item">
						<div class="icon">
							<img src="@/assets/img/icons/delete.svg" alt="">
						</div>

						<div class="category">
							<div class="main-category">
								<router-link to="/">Гаджетов</router-link>
							</div>

							<div class="sub">
								<a href="">Модуляторы</a>
								<a href="">Автовизитки</a>
							</div>
						</div>
					</div>

					<div class="item">
						<div class="icon">
							<img src="@/assets/img/icons/delete.svg" alt="">
						</div>

						<div class="category">
							<div class="main-category">
								<router-link to="/">Гаджетов</router-link>
							</div>

							<div class="sub">
								<a href="">Модуляторы</a>
								<a href="">Автовизитки</a>
							</div>
						</div>
					</div>

					<div class="item">
						<div class="icon">
							<img src="@/assets/img/icons/delete.svg" alt="">
						</div>

						<div class="category">
							<div class="main-category">
								<router-link to="/">Гаджетов</router-link>
							</div>

							<div class="sub">
								<a href="">Модуляторы</a>
								<a href="">Автовизитки</a>
							</div>
						</div>
					</div>


					<div class="item">
						<div class="icon">
							<img src="@/assets/img/icons/black-box.svg" alt="">
						</div>

						<div class="category">
							<div class="main-category">
								<router-link to="/">Автомобилей</router-link>
							</div>

							<div class="sub">
								<a href="">Модуляторы</a>
								<a href="">Автовизитки</a>
							</div>
						</div>



						<!-- дочерние категории-->

						<div class="sub_categories">

							<div class="column">
								<div class="sub_category">
									<div class="main-category">
										<div class="icon">
											<img src="@/assets/img/icons/smartphone.svg" alt="">
										</div>
										<router-link to="/">Смартфоны</router-link>
									</div>

									<div class="sub">
										<a href="">Защитные стёкла</a>
										<a href="">Гидрогель плёнки</a>
										<a href="">Защитные стёкла</a>
										<a href="">Чехлы</a>
										<a href="">Защитные стёкла</a>
										<a href="">Чехлы</a>
									</div>
								</div>

								<div class="sub_category">
									<div class="main-category">
										<div class="icon">
											<img src="@/assets/img/icons/watch.svg" alt="">
										</div>
										<router-link to="/">Смарт-часы</router-link>
									</div>

									<div class="sub">
										<a href="">Защитные стёкла</a>
										<a href="">Защитные стёкла</a>
										<a href="">Чехлы</a>
									</div>
								</div>

								<div class="sub_category">
									<div class="main-category">
										<div class="icon">
											<img src="@/assets/img/icons/airpods.svg" alt="">
										</div>
										<router-link to="/">AirPods</router-link>
									</div>

									<div class="sub">
										<a href="">Чехлы</a>
									</div>
								</div>
							</div>

							<div class="column">
								<div class="sub_category">
									<div class="main-category">
										<div class="icon">
											<img src="@/assets/img/icons/smartphone.svg" alt="">
										</div>
										<router-link to="/">Смартфоны</router-link>
									</div>

									<div class="sub">
										<a href="">Защитные стёкла</a>
										<a href="">Гидрогель плёнки</a>
										<a href="">Защитные стёкла</a>
										<a href="">Чехлы</a>
										<a href="">Защитные стёкла</a>

										<router-link to="/" class="all-categories">Все категории <span>></span></router-link>
									</div>
								</div>

								<div class="sub_category">
									<div class="main-category">
										<div class="icon">
											<img src="@/assets/img/icons/watch.svg" alt="">
										</div>
										<router-link to="/">Смарт-часы</router-link>
									</div>

									<div class="sub">
										<a href="">Защитные стёкла</a>
										<a href="">Защитные стёкла</a>
										<a href="">Чехлы</a>
									</div>
								</div>

								<div class="sub_category">
									<div class="main-category">
										<div class="icon">
											<img src="@/assets/img/icons/airpods.svg" alt="">
										</div>
										<router-link to="/">AirPods</router-link>
									</div>

									<div class="sub">
										<a href="">Чехлы</a>
									</div>
								</div>
							</div>

							<div class="column-ads">
								<div class="item">
									<router-link to="/">
										<img src="" alt="">
									</router-link>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		components: {
			MiniCart: () => import('@/components/MiniCart'),
		},
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
				}
			}
		}
	}
</style>