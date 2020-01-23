<template>
	<div class="menu-catalog">

		<div class="btn-catalog">
			<img src="@/assets/img/icons/menu.svg" alt="Меню" />
			<span>Каталог товаров</span>
		</div>

		<div class="root-categories">
			<div class="title-root-categories">
				<p>Аксессуары для</p>
			</div>

			<div class="list-root-categories">
				
				<div class="root-category">
					<div class="icon">
						<img src="@/assets/img/icons/black-box.svg" alt="Для автомобилей" />
					</div>

					<div class="links">
						<router-link to="/" class="main-link">Автомобилей</router-link>

						<div class="hot-sub-categories">
							<router-link to="/">Модуляторы</router-link>
							<router-link to="/">Модуляторы</router-link>
						</div>
					</div>

					
					<!-- дочерние категории-->

					<div class="sub-categories">

						<div class="column">
							<div class="sub_category">
								<div class="main-category">
									<div class="icon">
										<img src="@/assets/img/icons/smartphone.svg" alt />
									</div>
									<router-link to="/">Смартфоны</router-link>
								</div>

								<div class="sub">
									<a href>Защитные стёкла</a>
									<a href>Гидрогель плёнки</a>
									<a href>Защитные стёкла</a>
									<a href>Чехлы</a>
									<a href>Защитные стёкла</a>

									<router-link to="/" class="all-categories">
										Все категории
										<span>></span>
									</router-link>
								</div>
							</div>

							<div class="sub_category">
								<div class="main-category">
									<div class="icon">
										<img src="@/assets/img/icons/watch.svg" alt />
									</div>
									<router-link to="/">Смарт-часы</router-link>
								</div>

								<div class="sub">
									<a href>Защитные стёкла</a>
									<a href>Защитные стёкла</a>
									<a href>Чехлы</a>
								</div>
							</div>

							<div class="sub_category">
								<div class="main-category">
									<div class="icon">
										<img src="@/assets/img/icons/airpods.svg" alt />
									</div>
									<router-link to="/">AirPods</router-link>
								</div>

								<div class="sub">
									<a href>Чехлы</a>
								</div>
							</div>
						</div>

						<div class="column-ads">
							<div class="item">
								<router-link to="/">
									<img src alt />
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {},
		methods: {}
	};
</script>

<style lang="scss">
	.menu-catalog {
		position: absolute;
		top: 0;
		//border: 1px solid red;

		&:hover>.root-categories {
			display: block;
		}

		.btn-catalog {
			height: 40px;
			display: flex;
			align-items: center;

			img, span{
				cursor: pointer;
			}
			
			img {
				height: 14px;
				margin-right: 7px;
			}

			span {
				color: #fff;
				font-size: 13px;
			}
		}

		.root-categories {
			//border: 1px solid red;
			background: #fff;
			box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.25);
			padding: 20px 0;

			position: relative;
			z-index: 999;

			//display: none;

			.title-root-categories {
				margin-left: 20px;
				margin-right: 20px;
				margin-bottom: 15px;
				padding: 5px;
				border-radius: 4px;
				background: $font;
				text-align: center;

				p {
					margin-bottom: 0;
					color: #fff;
					text-transform: uppercase;
					letter-spacing: 2px;
					font-size: 12px;
				}
			}

			.list-root-categories {
				
				.root-category {
					//border: 1px solid red;
					padding: 10px 20px;

					display: flex;
					align-items: center;

					&:hover {
						background: #f5f5f5;

						.sub-categories {
							display: flex;
						}
					}

					.icon {
						width: 30px;
						height: 30px;
						flex: none;
						margin-right: 10px;

						img {
							height: 30px;
							display: block;
						}
					}

					.links {
						.main-link {
							line-height: 1em;
							text-transform: uppercase;
							font-weight: bold;
						}

						.hot-sub-categories {
							margin-top: 2px;

							a {
								font-size: 13px;
								line-height: 1em;

								&:nth-child(2) {
									margin-left: 10px;
								}
							}
						}
					}

					// дочерние категории
					.sub-categories {
						position: absolute;
						top: 0;
						left: 0;
						margin-left: 100%;

						background: #fff;
						box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.25);

						//display: flex;

						display: none;

						.column {
							//border: 1px solid red;
							padding: 20px;
							width: 260px;
							flex: none;

							.sub_category {
								margin-bottom: 20px;

								&:last-child {
									margin-bottom: 0;
								}

								.main-category {
									margin-bottom: 6px;
									display: flex;
									align-items: center;

									.icon {
										//border: 1px solid red;
										width: 26px;
										height: 26px;
										flex: none;
										margin-right: 8px;

										img {
											display: block;
											max-height: 26px;
										}
									}

									a {
										font-size: 16px;
										font-weight: bold;
									}
								}

								.sub {
									display: flex;
									flex-direction: column;
									margin-bottom: 10px;
									margin-left: 34px;

									a {
										display: inline-block;
										margin-bottom: 8px;
										font-size: 14px;

										&:last-child {
											margin-bottom: 0;
										}
									}

									.all-categories {
										font-weight: bold;
										font-size: 13px;
										margin-top: 2px;

										span {
											margin-left: 2px;
										}
									}
								}
							}
						}

						.column-ads {
							width: 260px;
							//border: 1px solid;
							flex: none;

							.item {
								//border: 1px solid red;
								height: 450px;
								background: blue;

								a {
									display: block;
									height: 100%;
								}
							}
						}
					}
				}
			}
		}
	}
</style>