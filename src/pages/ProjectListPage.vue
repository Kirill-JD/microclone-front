<template>
	<div>
		<v-card v-for="project in projects" :key="project.id">
			{{ project }}
			<router-link :to="`/projects/${project.id}`">
				Подробнее
			</router-link>
		</v-card>
	</div>
</template>

<script>
import {getProjectIssuesApi} from "@/services/Api"
export default {
	data() {
		return {
			projects: {}
		}
	},
	mounted() {
		getProjectIssuesApi().then(json => {
			this.projects = json
		})
	}
}
</script>