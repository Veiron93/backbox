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
						<p>Защитный чехол iPhone XS</p>
					</div>
				</div>
			</div>

			<div class="col">
				<div class="form-order">

				</div>
			</div>
		</div>
	</div>
</template>


<style lang="scss">
	.cart{
		.cart-box{
			//border: 1px solid red;
			background: #fff;
			height: 400px;
			padding: 10px;
			box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);

			.list-goods{
				p{
					color: #000;
				}
			}
		}

		.form-order{
			//border: 1px solid red;
			
			height: 400px;
			box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15);
			background: #000;
		}
	}
</style>
