<template>
	<div id="app" class='wrapper'>
		<Header	/>
		<div class="content">
			<router-view/>
		</div>
		<Footer	/>
	</div>
</template>

<script>
	export default {
		components: {
			Header: () => import('@/components/Header.vue'),
			Footer: () => import('@/components/Footer.vue')
		},
	}
</script>

<style lang="scss">
	@import "~../node_modules/normalize.css/normalize.css";
	@import "~../node_modules/bootstrap/scss/bootstrap-grid.scss";
	@import "@/resources/sass/main.scss";
</style>
