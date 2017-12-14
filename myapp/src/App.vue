<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	*{margin: 0;padding: 0;}
	ul,li{list-style: none;}
	a{
		text-decoration: none;
		color: #333;
	}
	.mint-header{
		background: #f39800;
	}
	.content{
		margin-top: 40px;
	}
</style>
