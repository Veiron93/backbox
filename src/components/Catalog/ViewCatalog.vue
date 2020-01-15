<template>
	<div class="products-view">
		<p>Вид:</p>
		<div ref="list" @click="viewListGoods($event)" data-type="list"></div>
		<div ref="grid" @click="viewListGoods($event)" data-type="grid"></div>
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
				
				let activeBtnViewCatalog = event.currentTarget;
				let type = activeBtnViewCatalog.getAttribute("data-type");

				if(type == "list"){
					this.$refs.grid.classList.remove("active");
				}else if(type == "grid"){
					this.$refs.list.classList.remove("active");
				}

				activeBtnViewCatalog.classList.add("active");

				localStorage.viewListGoods = type;

				this.getTypeViewListGoods({
					result: type
				})
			}
		},

		mounted: function() {
			// применяюся стили для активного пункта Вида каталога
			this.$refs[this.active].classList.add("active");
		}
	};
</script>

<style lang="scss">
	.products-view {
		@include style-block;
		width: 100px;
		display: flex;
		align-items: center;
		padding: 0 10px;

		p {
			font-size: 14px;
		}

		> div {
			flex: none;
			margin-left: 10px;
			cursor: pointer;
			
			height: 14px;
			width: 14px;

			opacity: .4;
			transition: opacity 0.2s;

			&[data-type="list"]{
				background: url("../../assets/img/icons/listing.svg");
			}

			&[data-type="grid"]{
				background: url("../../assets/img/icons/table.svg");
			}

			&[data-type="list"], &[data-type="grid"]{
				background-size: cover;
				background-repeat: no-repeat;
			}

			&:hover{
				opacity: .8;
			}

			&.active{
				opacity: .7;
				cursor: default;
			}
		}
	}
</style>
