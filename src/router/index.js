import Vue from 'vue'
import Router from 'vue-router'
import Question from '@/components/question'
import Home from '@/components/home'
import Score from '@/components/score'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/question',
		name: 'question',
		component: Question
	}, {
		path: '/score',
		name: 'score',
		component: Score
	}]
})