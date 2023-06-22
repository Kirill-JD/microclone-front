<template>
	<div>
		<div class="pa-5">
			<h1>Проекты</h1>
		</div>
		<div class="px-5 py-2" v-for="project in projects" :key="project.id">
			<ProjectItem
				:project="project"
				:id="project.id"/>
		</div>
	</div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem"
import {getProjectIssuesApi} from "@/services/Api"
export default {
	data() {
		return {
			projects: {}
		}
	},
	components: {
		ProjectItem
	},
	mounted() {
		getProjectIssuesApi().then(json => {
			this.projects = json
		})
	}
}
</script>