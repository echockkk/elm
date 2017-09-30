<template>
	<header>
		<div class="header">
			<div class="left pic">
				<img src="">
			</div>
			<div class="content">
				<p><i></i><span></span></p>
				<p></p>
			</div>
		</div>
	</header>
</template>

<script>
	const ERR_OK = 0;
	export default {
		props: {
			seller: {
				type: Object
			}
		},
		created(){
			this.$http.get('/api/goods').then((response) => {
				response = response.body;
				if(response.body == ERR_OK) {
					this.goods = response.data;
					console.log(this.goods)
				}
			})
		}
	}
</script>
<style scoped>
	.header {
		width: 100%;
		background: #454344;
	}
	.header .pic {
		width: 2.133333rem;
		height: 2.133333rem;
		background: yellow;
	}
</style>