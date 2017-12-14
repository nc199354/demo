import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Details from '@/components/Details'
Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:"/",
  		redirect:"/home"
  	},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
    	path:'/list',
    	name:'List',
    	component:List
    },
    {
    	path:'/details',
    	name:'Details',
    	component:Details
    }
  ]
})
