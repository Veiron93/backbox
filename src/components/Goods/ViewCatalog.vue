<template>
	<div class="products-view">
		<p>Вид:</p>

		<div ref="list" class="item" @click="viewListGoods($event)" data-view-catalog="list">
			<img src="@/assets/img/icons/listing.svg">
		</div>

		<div ref="grid" class="item" @click="viewListGoods($event)" data-view-catalog="grid">
			<img src="@/assets/img/icons/table.svg">
		</div>
	</div>
</template>

<script>
	export default {
		props: ['getTypeViewListGoods', 'active'],

		data () {
			return {
				
			}	
		},

		methods: {
			viewListGoods(event){

				let type = event.currentTarget.getAttribute("data-view-catalog");

				localStorage.viewListGoods = type;

				this.getTypeViewListGoods({
					result: type
				})
			}
		},

		computed: {
			
		},

		mounted: function() {
			//let test = document.querySelector(".item[data-view-catalog='list'>]");
			
			let test = this.$refs.list

			console.log(test)
		}
	};
</script>

<style lang="scss">
	.products-view {
		@include style-block;
		width: 100px;
		flex: none;
		display: flex;
		align-items: center;
		padding: 0 10px;

		p {
			font-size: 14px;
		}

		.item {
			margin-left: 10px;
			cursor: pointer;

			img {
				height: 14px;
				opacity: 0.5;
				display: block;
				transition: opacity 0.2s;
			}

			&:hover {
				img {
					opacity: 0.8;
				}
			}

			&.active {
				cursor: default;
			}
		}
	}
</style>
