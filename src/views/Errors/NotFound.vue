<template>
	<div class="container page-not-found">
		<div class="row">
			<div class="col-12">

				<div class="info">
					<img src="@/assets/img/404.svg" alt="">

					<p>Упс... Такой страницы не существует.</p>

					<div class="btn-back-to-index">
						<a href="">Вернуться на главную</a>
					</div>
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


				
			}	
		},

		methods: {

		},

		mounted () {
	
		}
	}
</script>


<style lang="scss">
	.page-not-found{
		.info{
			//border: 1px solid red;
			margin-top: calc(50% - 370px);
			img{
				height: 200px;
				margin: 0 auto 20px;
				display: block;
			}

			p{
				text-align: center;
				font-weight: bold;
				font-size: 20px;
				margin-bottom: 40px;
			}

			.btn-back-to-index{
				height: 40px;
				width: 220px;
				border-radius: 4px;
				background: $accent;
				margin: 0 auto;
				transition: background .2s;

				&:hover{
					background: $accentHover;
				}

				a{
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100%;
					color: #fff;
				}
			}
		}
	}
</style>
