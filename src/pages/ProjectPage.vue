<template>
	<div>
		<div class="pa-5">
			<h1>Ошибки</h1>
		</div>
		<div class="px-5 py-2" v-for="problem in problems" :key="problem.id">
			<ProblemItem
				:problem="problem"/>
		</div>
	</div>
</template>

<script>
import ProblemItem from "@/components/ProblemItem"
import {getProblemsByIdApi} from "@/services/Api"
export default {
	components: {
		ProblemItem
	},
	data() {
		return {
			id: this.$route.params['id'],
			problems: {}
		}
	},
	mounted() {
		getProblemsByIdApi(this.id).then(json => {
			this.problems = json
		})
	}
}
</script>