<template>
	<div>
		<div class="pa-5">
			<v-row>
				<v-col align-self="center">
					<h1>Проекты</h1>
				</v-col>
				<v-col align-self="center" class="ms-auto" md="auto">
					<CreateProjectDialog/>
				</v-col>
			</v-row>
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
import CreateProjectDialog from "@/components/CreateProjectDialog"
export default {
	data() {
		return {
			projects: {}
		}
	},
	components: {
		ProjectItem,
		CreateProjectDialog
	},
	mounted() {
		getProjectIssuesApi().then(json => {
			this.projects = json
		})
	}
}
</script>