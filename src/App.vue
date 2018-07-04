<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<div>
			<router-view></router-view>
		</div>
		<div>
			<router-link to="/">1</router-link>
			<router-link to="/2">2</router-link>
		</div>
	</div>
</template>
<script>
export default{
	name:'app',
	data(){
		return {
			msg:"hello ssr"
		}
	}
}
</script>
<style>

</style>
