<template>
	<div class="details">
		<div class="content">
			<h3 class="title">{{data.title}}</h3>
			<p class="sumary">{{data.sumary}}</p>
			<div class="img">
				<img :src="data.img" style="width: 100%;" v-if="data.img"/>
			</div>
			<div class="ingredients" v-if="data.ingredients">
				<p>食材</p>
				<ul>
					<li v-for="item in data.ingredients">
						{{item}}
					</li>
				</ul>
			</div>
			<div class="method_box">
				<p class="method_title">步骤</p>
				<div class="item" v-for="item in data.method">
					<p>{{item.step}}</p>
					<img :src="item.img" v-if="item.img" style="width: 100%;"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Details',
		data(){
			return {
				name:"",
				title:"",
				data:[],
			}
		},
		created(){
			var id = this.$route.query.id;
			var $this = this;
			this.$http.get("/api/menu/query?key=21ba379a8e0fc&id="+id).then(function(res){
				if(res.body.msg =="success"){
					var data = res.body.result;
					$this.name = data.name;
					if (data.recipe.ingredients){
			        	data.recipe.ingredients = JSON.parse(data.recipe.ingredients);
			        }
					data.recipe.method = JSON.parse(data.recipe.method);
					$this.data = data.recipe;
					console.log($this.data);
				}
			});
		}
	}
</script>

<style scoped>
	.content{
		padding: 0 10px;
		margin: 0;
	}
	.title{
		text-align: center;
		line-height: 3;
		display: block;
		font-weight: 600;
		font-size: 16px;
	}
	.sumary{
		text-indent: 2em;
		font-size: 14px;
		color: #333;
	}
	.method_box .item{
		color:#333;
		text-indent:2em;
		font-size: 14px;
	}
</style>