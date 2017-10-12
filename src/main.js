// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store/'

//Vue.use(Vuex) //use()的作用：提供了一种机制将状态从根组件注入到每个子组件中，子组件能通过this.$store访问到
Vue.use(VueRouter)

// const store = new Vuex.Store({
//   state: {}, //存储状态值
//   actions: {},
//   mutations: {}, //状态值的改变方法，操作状态值，提交mutations是更改vuex状态的唯一方法
//   getters: {}, //在store中定义getters（可以认为是store的计算属性）Getters接受state作为其第一个函数
//   modules: {}
// })
// export default store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})