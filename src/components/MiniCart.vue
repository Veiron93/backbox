<template>
	<div class="mini-cart">
		<router-link to="/cart">
			<div class="icon">
				<img src="@/assets/img/icons/white-box.svg" alt="">
			</div>

			<div class="count">
				<p>1</p>
			</div>

			<div class="price">
				<p>0 <span>₽</span></p>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		props: {

		}
	}
</script>

<style lang="scss">
	.mini-cart{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;

		a{
			display: flex;
			align-items: center;

			.icon{
				display: flex;
				align-items: center;
				margin-right: 15px;
				img{
					height: 20px;
					display: block;
				}
			}

			.count{
				//border: 1px solid red;
				background: $accentHover;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 1px 3px;
				border-radius: 4px;
				position: absolute;
				margin-top: -2px;
				margin-left: 11px;
				top: 0;
				display: none;

				p{
					font-size: 12px;
					color: #fff;
					line-height: 1em;
				}
			}

			.price{
				p{
					font-size: 13px;
					color: #fff;
					letter-spacing: 1px;

					span{
						font-size: 12px;
						color: #fff;
					}
				}
			}			
		}
	}
</style>