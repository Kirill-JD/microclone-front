<template>
	<v-card style="background-color: #c1ddda;" class="pa-2">
		<v-row>
			<v-col align-self="center">
				<h2 class="pl-4">{{ project.name }} ({{ String(project.platform).toLowerCase() }})</h2></v-col>
			<v-col align-self="center" md="auto" class="pr-10">
				<router-link :to="`/projects/${project.id}`">
					Подробнее
				</router-link>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
export default {
	props: {
		project: {},
		id: String
	}
}
</script>