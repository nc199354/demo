<template>
	<div class="list">
		<mt-header fixed :title="title">
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="content">
			<ul v-infinite-scroll="getList" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<li v-for="item in list" class="item">
					<router-link :to="{path:'details',query:{id:item.menuId}}">
						<img v-lazy="item.thumbnail"/>
						<p class="name">{{item.name}}</p>
						<p class="cls">
							<span v-for="ls in item.ctgTitles">{{ls}}</span>
						</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	export default{
		name:"list",
		data(){
			return {
				title:"",
				page:1,
				loading:false,
				id:null,
				list:[],
				noList:false,
			}
		},
		created(){
			this.id = this.$route.query.ctgId;
			this.title = this.$route.query.title;
		},
		methods:{
			getList(){
				var $this = this;
				if(this.noList){
					return;
				}
				this.loading = true;
				var data = {
					cid:this.id,
					key:"21ba379a8e0fc",
					page:this.page,
					size:20,
				}
				Indicator.open("加载中...");
				this.$http.get("/api/menu/search",{params:data}).then(function(res){
					Indicator.close();
					if(res.body.msg =="success"){
						var data = res.body.result.list;
						if(data.length>0){
							for(var i=0;i<data.length;i++){
								data[i].ctgTitles = data[i].ctgTitles.split(",");
								$this.list.push(data[i]);
							}
							$this.page = res.body.result.curPage+1;
							console.log($this.list);
							$this.loading = false;
						}else{
							$this.noList = true;
						}
					}
				});
			}
		}
	}
</script>

<style scoped>
	.item{
		position: relative;
		height: 70px;
		padding: 0 10px;
		padding-left: 80px;
		border-bottom: 1px solid #f0f0f0;
		padding-top: 5px;
		
	}
	.item img{
		position: absolute;
		width: 60px;
		height: 60px;
		left: 10px;
		top: 50%;
		margin-top: -30px;
		border-radius: 5px;
	}
	.cls span{
		font-size: 12px;
		display: inline-block;
		margin-right: 5px;
		background: #f39800;
		color:#fff;
		padding: 2px 5px;
		border-radius: 5px;
	}
	img[lazy="loading"]{
		background: #e5e5e5;
	}
	img[lazy="error"]{
		background: #e5e5e5;
	}
</style>