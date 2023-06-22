<template>
	<v-card style="background-color: #c1ddda;" class="pa-3">
		<v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>
					<v-row>
						<v-col align-self="center">
							<div>
								<b>{{ problem.exception.values[0].type }}</b>
							</div>
						</v-col>
						<v-col align-self="center">
							<div>
								{{ problem.exception.values[0].value }}
							</div>
						</v-col>
						<v-col align-self="center">
							<div>
								{{ timeDifference }}
							</div>
						</v-col>
						<v-col align-self="center">
							<div>
								<v-chip style="color: red;">
									{{ problem.level }}
								</v-chip>
							</div>
						</v-col>
					</v-row>
				</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-row>
						<v-col align-self="center" md="auto">
							<table>
								<tr>
									<th class="text-left">
										Платформа
									</th>
									<td>{{ problem.platform }}</td>
								</tr>
								<tr>
									<th class="text-left">
										URL
									</th>
									<td>{{problem.request.url}}</td>
								</tr>
								<tr>
									<th class="text-left">
										Заголовки
									</th>
									<td>{{problem.request.headers}}</td>
								</tr>
								<tr>
									<th class="text-left pr-3">
										Функция с проблемой
									</th>
									<td>{{problem.exception.values[0].stacktrace.frames[0].function}}</td>
								</tr>
							</table>
						</v-col>
					</v-row>
					<div>
						<router-link :to="`/projects/${problem.projectId}/${problem.id}`">
							Подробнее
						</router-link>
					</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
	</v-card>
</template>


<script>
export default {
	props: {
		problem: {}
	},
	data() {
		return {
			timeDifference: null
		}
	},
	methods: {
    calcTimeDiff() {
      var currTime = new Date()
      var stubDate = new Date()
      stubDate.setTime(this.problem.timestamp*1000)
      var diff = currTime.getTime() - stubDate.getTime()
      var seconds = Math.round(Math.abs(diff / 1000))
			let d = Math.floor(seconds / (3600 * 24));
			let h = Math.floor(seconds % (3600 * 24) / 3600);
			let m = Math.floor(seconds % 3600 / 60);
			let s = Math.floor(seconds % 60);
			this.timeDifference = "Создано " + d + "д " + h + ":" + m + ":" + s + " назад";
    }
	},
	mounted() {
    setInterval( () => this.calcTimeDiff(), 1000)
  }
}
</script>