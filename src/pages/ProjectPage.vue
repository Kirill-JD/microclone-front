<template>
	<div>
		{{ problems }}
	</div>
</template>

<script>
import {getProblemByIdApi} from "@/services/Api"
export default {
	data() {
		return {
			id: this.$route.params['id'],
			problems: {}
		}
	},
	mounted() {
		getProblemByIdApi(this.id).then(json => {
			this.problems = json
		})
	}
}
</script>