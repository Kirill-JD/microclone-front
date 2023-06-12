<template>
	<div>
		<v-card>
			{{ issue }}
		</v-card>
	</div>
</template>

<script>
import {getIssuesApi} from "@/services/Api"
export default {
	data() {
		return {
			issue: {}
		}
	},
	mounted() {
		getIssuesApi().then(json => {
			this.issue = json
		})
	}
}
</script>