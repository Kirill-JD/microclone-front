import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage"
import ProjectListPage from "@/pages/ProjectListPage"
import ProjectPage from "@/pages/ProjectPage"
import TestPage from "@/pages/TestPage"


const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/projects/',
		name: 'Projects',
		component: ProjectListPage,
	},
	{
		path: '/projects/:id',
		name: `Project`,
		component: ProjectPage,
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