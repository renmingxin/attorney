import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('./views/init/login.vue')
        },
		{
			path: '/main',
			name: 'main',
			redirect:'/question',
			component: HomePage,
			children: [
				{
					path: '/homepage2',
					name: 'homePage2',
					component: () => import('./views/HomePage2.vue')
				},
				{
					path: '/question',
					name: 'question',
					component: () => import('./views/question/questionList.vue')
				},
				{
					path: '/questionDetails',
					name: 'questionDetails',
					component: () => import('./views/question/questionDetails.vue')
				},
				{
					path: '/issue',
					name: 'issue',
					component: () => import('./views/question/issue.vue')
				},
				{
					path: '/helpList',
					name: 'helpList',
					component: () => import('./views/help/helpList.vue')
				},
				{
					path: '/userDetails',
					name: 'userDetails',
					component: () => import('./views/user/userDetails.vue')
				},
				{
					path: '/control',
					name: 'Control',
					component: () => import('./views/control.vue'),
					children: [{
						path: 'controlFile',
						name: 'ControlFile',
						component: () => import('./views/controlFile.vue')
					},
					{
						path: 'barCodeReader',
						name: 'BarCodeReader',
						component: () => import('./views/barCodeReader.vue')
					},
					{
						path: 'team',
						name: 'Team',
						component: () => import('./views/team.vue')
					},
					{
						path: 'order',
						name: 'Order',
						component: () => import('./views/order.vue')
					},
					{
						path: 'notice',
						name: 'Notice',
						component: () => import('./views/notice.vue')
					}, {
						path: 'rubbish',
						name: 'Rubbish',
						component: () => import('./views/rubbish.vue')
					}
					]
				},
			]

		},

		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	]
})
