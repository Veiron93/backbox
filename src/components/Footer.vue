<template>
	<footer>
		<p>BLACKBOX</p>
		<p>Интернет магазин аксессуаров г. Южно-Сахалинск</p>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		props: {

		}
	}
</script>

<style lang="scss">
	footer{
		border-top: 1px solid $gray;
		margin-top: 100px;
		padding: 20px;
		text-align: center;

		p{
			font-size: 12px;

			&:nth-child(1){
				text-transform: uppercase;
				font-weight: bold;
				margin-bottom: 6px;
			}
		}
	}
</style>