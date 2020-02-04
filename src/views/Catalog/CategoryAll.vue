<template>
	<div class="category-all">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="heading-page">
						<h1>Аксессуары для:</h1>
					</div>
				</div>

				<div class="col-12">
					<div class="list-categories">
						
						<div class="root-category">
							<div class="name-root-category">
								<div class="icon">
									<img src="@/assets/img/icons/black-box.svg" />
								</div>
								
								<p>Гаджетов</p>
							</div>

							<div class="row sub-categories">
								
								<div class="col-xl-3 sub-category">
									<div class="name">
										<div class="icon">
											<img src="@/assets/img/icons/black-box.svg" />
										</div>
										<p>Смартфоны</p>
									</div>

									<div class="sub">
										<router-link to="/">Защитные стёкла</router-link>
									</div>
								</div>							
							</div>					
						</div>
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
	.category-all{

		.heading-page{
			h1{
				font-size: 18px;
			}
		}

		.list-categories{
			//border: 1px solid red;
			margin-top: 10px;

			.root-category{

				margin-bottom: 20px;

				.name-root-category{
					display: flex;
					align-items: center;
					margin-bottom: 20px;

					.icon{
						height: 44px;
						width: 44px;
						display: flex;
						align-items: center;
						//justify-content: center;
						margin-right: 15px;
					}
					
					p{
						font-size: 28px;
					}
				}

				.sub-categories{

					.sub-category{
						margin-bottom: 40px;

						.name{
							display: flex;
							align-items: center;
							margin-bottom: 12px;

							.icon{
								height: 22px;
								width: 22px;
								display: flex;
								align-items: center;
								justify-content: center;
								margin-right: 10px;
							}

							p{
								font-size: 20px;
							}
						}

						.sub{
							display: flex;
							flex-direction: column;
							margin-left: 33px;

							a{
								margin-bottom: 12px;
								font-size: 15px;

								&:last-child{
									margin-bottom: 0;
								}
							}
						}
					}
				}
			}
		}
	}
	
</style>
