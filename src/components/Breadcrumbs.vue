<template>
	<div class="breadcrumbs">
		<a href="">Смартфоны</a>
		<a href="">Смартфоны</a>
		<p>Apple</p>
	</div>
</template>

<script>
	export default {
		
		props: {

		}
	}
</script>

<style lang="scss">
	.breadcrumbs{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 15px;		

		a, p{
			font-size: 13px;
		}

		a{
			color: #888888;
			margin-right: 8px;
			display: flex;
			align-items: center;
			transition: color .2s;

			&:after{
				content: "";
				display: block;
				height: 8px;
				width: 8px;
				//border: 1px solid red;
				background: url("../assets/img/icons/breadcrumbs-arrow.svg");
				background-size: contain;
				margin-top: 1px;
				margin-left: 8px;
				background-repeat: no-repeat;
			}

			&:hover{
				color: $accent;
			}
		}

		p{
			color: #5e5e5f;
		}
	}
</style>