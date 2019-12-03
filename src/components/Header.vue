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
					<router-link to="/about">Акции</router-link>
					<router-link to="/about">Доставка и оплата</router-link>
				</nav>
			</div>
		</div>

		<div class="bottom">
			<div class="bottom-wrapper">
				<div class="catalog-navigation">
					<a href="">Аксессуары</a>
					<a href="">Компьютеры</a>
					<a href="">Аудио</a>
					<a href="">Чехлы</a>
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
					height: 44px;
					margin-right: 50px;
					

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

					a{
						margin-left: 25px;
					}
				}
			}
		}

		.bottom{
			//background: $accent;
			background: #000;
			
			.bottom-wrapper{
				padding-top: 8px;
				padding-bottom: 8px;

				.catalog-navigation{
					display: flex;
					justify-content: center;

					a{
						color: #fff;
						text-transform: uppercase;
						font-size: 12px;
						margin-right: 40px;
						letter-spacing: 1px;
						line-height: 1em;
						padding: 3px 0;
						

						display: flex;
						flex-direction: column;
						align-items: center;

						//border-bottom: 1px solid transparent;
						transition: border-color .2s;
						
						&:last-child{
							margin-right: 0;
						}

						&:nth-child(1){
							//border-color: #526194;
						}

						&:hover{
							//border: 1px solid red;
							//border-color: #247ea9;
						}
					}
				}
			}
			
		}
	}
</style>