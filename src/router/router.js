import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage"
import IssuesListPage from "@/pages/IssuesListPage"
import TestPage from "@/pages/TestPage"


const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/issues/',
		name: 'Issues',
		component: IssuesListPage,
	},
	{
		path: '/1/',
		component: TestPage,
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router