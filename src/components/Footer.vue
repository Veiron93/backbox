<template>
	<footer>
		<p>BlackBox - Интернет магазин аксессуаров г. Южно-Сахалинск</p>
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
		padding: 30px;
		text-align: center;

		p{
			font-size: 12px;
		}
	}
</style>