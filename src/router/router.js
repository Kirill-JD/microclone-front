import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/HomePage"
import ProjectListPage from "@/pages/ProjectListPage"
import ProjectPage from "@/pages/ProjectPage"
import ProblemPage from "@/pages/ProblemPage"
import LoginPage from "@/pages/LoginPage"
import ManualPage from "@/pages/ManualPage"


const routes = [
	{
		path: '/',
		component: HomePage,
		meta: {
			needLogin: true
		}
	},
	{
		path: '/projects/',
		component: ProjectListPage,
	},
	{
		path: '/projects/:id',
		component: ProjectPage,
	},
	{
		path: '/projects/:id/:problemId',
		component: ProblemPage,
	},
	{
		path: '/login/',
		name: "login",
		component: LoginPage,
	},
	{
		path: '/manual/:id',
		component: ManualPage,
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router