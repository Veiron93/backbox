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
					<a href="" target="_blank">
						<img src="@/assets/img/icons/social/instagram.svg" alt="">
					</a>
					<a href="" target="_blank">
						<img src="@/assets/img/icons/social/instagram.svg" alt="">
					</a>
					<a href="" target="_blank">
						<img src="@/assets/img/icons/social/instagram.svg" alt="">
					</a>
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

				<MenuCatalog />
				

				<div class="main-catalog-categories-header">
					<p>Аксессуары для:</p>
					<a href="">Гаджетов</a>
					<a href="">Компьютеров</a>
					<a href="">Автомобилей</a>
					<a href="">Дома</a>
				</div>

				<MiniCart/>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		components: {
			MenuCatalog: () => import('@/components/Catalog/MenuCatalog'),
			MiniCart: () => import('@/components/MiniCart'),
		},

		data (){
			return {
			
			}
		},

		props: {

		},
		methods: {
			
		},

		created: function (){
			//console.log(this.catalogMenu[0])
		}
	}
</script>

<style lang="scss">
	header{
		margin-bottom: 30px;
		box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);

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


				.socials{
					//border: 1px solid red;
					margin-left: auto;
					width: 200px;
					display: flex;
					align-items: center;
					justify-content: center;

					a{
						margin-right: 15px;

						&:last-child{
							margin-right: 0;
						}

						img{
							height: 20px;
							display: block;
						}
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
			background: #000;
			
			.bottom-wrapper{
				position: relative;
				display: flex;
				align-items: center;
				height: 40px;

				.main-catalog-categories-header{
					display: flex;
					margin-left: 182px;

					p, a{
						color: #fff;
						font-size: 12px;
						text-transform: uppercase;
						letter-spacing: 1px;
						line-height: 1em;
					}
					
					p{
						margin-right: 30px;
					}

					a{
						margin-right: 34px;
						
						&:nth-child(1){
							
						}

						&:hover{
							
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