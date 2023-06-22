<template>
	<v-card style="background-color: #c1ddda;" class="pa-2">
		<div>
			{{ project }}
		</div>
		<router-link :to="`/projects/${project.id}`">
			Подробнее
		</router-link>
	</v-card>
</template>

<script>
export default {
	props: {
		project: [],
		id: String
	}
}
</script>