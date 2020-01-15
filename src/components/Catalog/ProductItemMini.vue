<template>
	<div class="product-item-mini">
		<div class="photo">
			<a href>
				<img src="@/assets/img/test/tovar-1.jpeg" alt />
			</a>
		</div>

		<div v-if="stocks" class="stikers">
			<div v-for="stock in stocks" v-bind:key="stock.id" v-bind:style="{background:stock.background}">
				<a href="#" @click="show()" v-bind:style="{color:stock.color}">{{stock.title}}</a>
			</div>
		</div>

		<div class="info">
			<div class="name">
				<a href="">Игровая консоль c цветным экраном 108 игр</a>
			</div>

			<div class="price_and_btn_buy">
				<div class="price">
					<p class="old-price">2000</p>
					<p>1 500<span>pуб.</span></p>
				</div>

				<div class="btn_buy">
					<a v-if="state" href="" class="to-cart">
						<img src="@/assets/img/icons/white-box-close.svg" alt="">
					</a>

					<a v-else href="" class="add-product">
						<img src="@/assets/img/icons/white-box.svg" alt="">
					</a>
				</div>
			</div>

			
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			state: Boolean,
			stocks: Array
		},
		methods: {
			show () {
				this.$modal.show('bar');
			},
			hide () {
				this.$modal.hide('bar');
			}
		}
	};
</script>

<style lang="scss">

	.product-item-mini {
		@include style-block;
		position: relative;
		transition: box-shadow .2s;

		&:hover{
			box-shadow: 0 1px 5px 0 rgba(0,0,0,0.2);
		}

		.photo{
			height: 140px;
			a{
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				padding: 15px;

				img{
					display: block;
					max-height: 100%;
					max-width: 100%;
				}
			}
		}

		.stikers{
			position: absolute;
			top: 10px;
			left: 10px;

			> div{
				border-radius: 4px;
				height: 24px;

				a{
					display: flex;
					align-items: center;
					height: 100%;
					font-size: 8px;
					text-transform: uppercase;
					letter-spacing: 1px;
					padding: 0 8px;
				}
			}
		}

		.info{
			//border: 1px solid red;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.name{
				padding: 0px 10px;
				font-size: 16px;
				line-height: 1.1em;

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
				padding: 10px 0px 10px 10px;

				.price{
					display: flex;

					p{
						font-weight: bold;
						font-size: 16px;
						line-height: 1em;

						span{
							margin-left: 4px;
							color: #000;
							font-size: 13px;
						}
					}

					.old-price{
						font-size: 12px;
						font-weight: normal;
						//border: 1px solid red;
						position: absolute;
						display: flex;
						align-items: center;
						margin-top: -12px;
						margin-left: 3px;
						color: #b5b5b5;

						&:before{
							content: '';
							width: calc(100% + 6px);
							display: block;
							height: 1px;
							background: #b5b5b5;
							position: absolute;
							left: -3px;
						}
					}
				}


				.btn_buy{
					//border: 1px solid red;
					height: 28px;
					width: 36px;
					border-radius: 4px 0px 0px 4px;
					overflow: hidden;
					

					a{
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: space-between;
						padding: 0 10px;


						&.add-product{
							background: #000;
							transition: background .2s;

							&:hover{
								background: #526194;
							}
						}

						&.to-cart{
							background: #526194;
						}
							
						img{
							height: 18px;
							display: block;
						}
					}
				}
			}
		}
	}
</style>
