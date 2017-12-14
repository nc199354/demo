<template>
	<div class="home">
		<mt-header fixed title="菜谱"></mt-header>
		<div class="content">
			<div class="item" v-for="item in list">
				<p class="item_title">{{item.categoryInfo.name}}</p>
				<ul class="item_box">
					<li v-for="ls in item.childs">
						<router-link :to="{path:'list',query:{ctgId:ls.categoryInfo.ctgId,title:ls.categoryInfo.name}}"><span>{{ls.categoryInfo.name}}</span></router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui'
	import { Toast } from 'mint-ui'
	export default {
		name:'Home',
		data(){
			return {
				list:[],
				title:'首页',
			}
		},
		created (){
			
			Indicator.open("加载中...");
			var $this = this;
			this.$http.get("/api/category/query?key=21ba379a8e0fc").then(function(res){
				Indicator.close();
				if(res.body.msg =="success"){
					$this.list = res.body.result.childs;
					console.log($this.list);
				}else{
					Toast("请求出错");
				}
			})
		},
		methods:{
			skip(id){
				console.log(id);
			}
		}
	}
</script>

<style scoped>
	.item_title{
		padding: 10px;
		border-bottom: 1px solid #e5e5e5;
	}
	.item_box{
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	.item_box li{
		width: 25%;
		padding: 0 10px;
		margin-bottom: 5px;
		padding-top: 10px;
		box-sizing: border-box;
	}
	.item_box li span{
		line-height: 30px;
		display: block;
		text-align: center;
		border-radius: 5px;
		font-size: 12px;
		border: 1px solid #e5e5e5;
	}
</style>