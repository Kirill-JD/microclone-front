<template>
	<div class="pa-5">
		<h2>{{ value.type }}</h2>
		<h4>{{ value.value }}</h4>

		<v-card
			:title="`Event_id: ${problem.event_id}`"
			class="pa-3"
		>
			<h4>Tags</h4>

			<h3>Трассировка стека</h3>
			<ExprensionPanel class="py-5"
				:items="frames"/>

			<h3 class="pb-4 pt-6">Заголовки</h3>
			<MapComponent :map="headers"/>

			<h3 class="pb-4 pt-6">Зависимости</h3>
			<MapComponent :map="modules"/>

			<h3 class="pb-4 pt-6">SDK</h3>
			<MapComponent :map="sdk"/>
		</v-card>
	</div>
</template>

<script>
import {getProblemByIdApi} from "@/services/Api"
import MapComponent from "@/components/MapComponent"
import ExprensionPanel from "@/components/ExprensionPanel"
export default {
	components: {
		ExprensionPanel,
		MapComponent
	},
	data() {
		return {
			id: this.$route.params['problemId'],
			problem: {},
			value: {},
			frames: [],
			headers: {},
			modules: {},
			sdk: {}
		}
	},
	mounted() {
		getProblemByIdApi(this.id).then(json => {
			this.problem = json
			this.value = this.problem.exception.values[0]
			this.frames = this.problem.exception.values[0].stacktrace.frames.reverse()
			this.headers = new Map(Object.entries(this.problem.request.headers))
			this.modules = new Map(Object.entries(this.problem.modules))
			this.sdk = new Map(Object.entries({"Название": this.problem.sdk.name, "Версия": this.problem.sdk.version}))
		})
	}
}
</script>