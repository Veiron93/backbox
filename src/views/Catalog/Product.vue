<template>
	<div class="product">
		<div class="container">
			<div class="row">
				<div class="col-xl-9">
					<div class="info-product">
						<div class="name">
							<h1>Игровая приставка 108 игр</h1>
							<p>Код товара: <span>123</span></p>
						</div>

						<div class="media">
							
							<agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
								<div class="slide" >
									<img src="@/assets/img/test/tovar.jpg" alt="" class="1 glightbox2">
								</div>
								
								<div class="slide">
									<img src="@/assets/img/test/tovar-1.jpeg" alt="" class="2 glightbox2">
								</div>
							</agile>

							<agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
								<div class="slide" @click="$refs.thumbnails.goTo(1)">
									<img src="@/assets/img/test/tovar.jpg" alt="" class="1">
								</div>
								
								<div class="slide" @click="$refs.thumbnails.goTo(2)">
									<img src="@/assets/img/test/tovar-1.jpeg" alt="" class="2">
								</div>
							</agile>

						</div>

						<div class="details">
							<div class="description">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo hic perferendis vitae minus accusantium aspernatur ab voluptate saepe omnis debitis voluptas, molestiae quas eos molestias. At facilis distinctio quas.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xl-3">
					<div class="block-buy">
						<div class="price">
							<p><span>2600</span> ₽</p>
						</div>

						<div class="promo">
							<h3>Товар участвует в акциях</h3>

							<div class="promo-list">
								<a href="">Новогодняя распродажа</a>
								<a href="">Подарок за покупку</a>
							</div>
						</div>

						<div class="btn-buy">
							<a href="">
								<img src="@/assets/img/icons/black-box.svg" alt="">
								<span>Добавить в коробку</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
	// @ is an alias to /src
	import { VueAgile } from 'vue-agile';
	import GLightbox from 'glightbox'

	export default	{
		//name: 'product',
		components: {
			agile: VueAgile
		},

		data () {
			return {
				asNavFor1: [],
				asNavFor2: [],
				
				options1: {
					dots: false,
					fade: true,
					navButtons: true
				},
				
				options2: {
					//autoplay: true,
					//centerMode: true,
					slidesToShow: 5,
					dots: false,
					//navButtons: false,
					responsive: [
					{
						breakpoint: 600
					},
					
					{
						breakpoint: 1000
						
					}
				]
					
				},
				
				slides: [
						'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
						'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
						'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
						'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
						'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
						'https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
						'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
					],

				imageList: []
			}

			
		},
		mounted () {
			this.asNavFor1.push(this.$refs.thumbnails)
			this.asNavFor2.push(this.$refs.main)

			GLightbox({
				touchNavigation: true,
				loop: true,
				autoplayVideos: true,
				selector: 'glightbox2'
			});
		}
	}
</script>


<style lang="scss">
	@import "~../../../node_modules/glightbox/dist/css/glightbox.css";

	.product{
		.info-product{
			padding: 15px;
			background: #fff;
			box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);
			border-radius: 4px;

			display: flex;
			flex-wrap: wrap;

			.name{
				padding-bottom: 15px;
				margin-bottom: 20px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #ececec;
				width: 100%;

				h1{
					font-size: 18px;
					margin: 0;
					margin-right: 15px;
				}

				p{
					margin: 0;
					font-size: 13px;
					color: #848484;

					span{
						color: #848484;
					}
				}
			}

			.media{
				//border: 1px solid red;
				width: 50%;

				.main{
					//border: 1px solid red;
					text-align: center;
					margin-bottom: 20px;

					
					
					img{
						height: 240px;

						&:hover{
							cursor: zoom-in;
						}
					}		
					
					.agile__nav-button--prev{
						left: 0;
						background: url("../../assets/img/icons/slider-arrow-left.svg");
					}

					.agile__nav-button--next{
						right: 0;
						background: url("../../assets/img/icons/slider-arrow-right.svg");
					}

					.agile__nav-button{
						border: none;
						position: absolute;
						top: 0;
						height: 30px;
						width: 20px;
						font-size: 0;
						padding: 0;
						top: calc(50% - 15px);
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center;
						cursor: pointer;
					}
				}

				.thumbnails{
					padding: 0px 40px;

					.agile__list{

						.agile__track{

							.slide {
								border-bottom: 1px solid transparent;
								padding: 10px;
								transition: border-color .2s;

								&.agile__slide--active{
									//border-color: $accentHover;
								}
							}
						}	
					}

					.agile__nav-button--prev{
						left: 18px;
						background: url("../../assets/img/icons/slider-arrow-left.svg");
					}

					.agile__nav-button--next{
						right: 18px;
						background: url("../../assets/img/icons/slider-arrow-right.svg");
					}

					.agile__nav-button{
						border: none;
						//border: 1px solid red;
						position: absolute;
						top: 0;
						height: 16px;
						width: 10px;
						font-size: 0;
						padding: 0;
						top: calc(50% - 8px);
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center;
						cursor: pointer;
					}
				}
			}

			.details{
				//border: 1px solid red;
				width: 50%;
				padding-left: 30px;

				.description{
					p{
						font-size: 14px;
						margin-bottom: 0;
						line-height: 1.5em;
					}
				}
			}
		}

		.block-buy{
			padding: 30px 20px;
			background: linear-gradient(135deg, rgba(82,97,148,1) 0%, rgba(133,27,143,1) 100%);
			box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);
			border-radius: 4px;

			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.price{
				text-align: center;
				p{
					font-size: 36px;
					font-weight: bold;
					color: #fff;
					margin-bottom: 0;
					line-height: 1em;
					
					span{
						color: #fff;
						letter-spacing: 1px;
					}
				}
			}

			.promo{
				margin-top: 30px;
				//display: none;
				
				h3{
					color: #fff;
					font-size: 12px;
					font-weight: normal;
					text-transform: uppercase;
					text-align: center;
					letter-spacing: 1px;
					margin: 0;
				}

				.promo-list{
					margin-top: 6px;
					text-align: center;
					
					a{
						color: #fff;
						font-size: 12px;
						display: inline-block;
						line-height: 1.5em;
						border-bottom: 1px dashed #fff;
						margin-bottom: 5px;
					}
				}
			}

			.btn-buy{
				border-radius: 4px;
				background: #fff;
				width: 186px;
				height: 40px;
				margin: 30px auto 0;
				box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
				a{
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100%;

					img{
						height: 18px;
						margin-right: 7px;
						margin-top: 1px;
						display: block;
						
					}
					
					span{
						font-size: 14px;
					}
				}
			}
		}
	}
</style>
