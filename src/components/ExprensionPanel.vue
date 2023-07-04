<template>
		<v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title style="background-color: #c1ddda;">
					Полная трассировка стека
				</v-expansion-panel-title>
        <v-expansion-panel-text>
					<v-list-item
						v-for="item in items"
						:key="item"
						variant="outlined"
						density="compact">
						<v-row>
							<v-col align-self="center">
								{{ item.module }} <span style="color: gray;">in</span> {{ item.function }} <span style="color: gray;">at line</span> {{ item.lineno }}
							</v-col>
							<v-col md="auto">
								<v-chip>
									{{ getChipText(item) }}
								</v-chip>
							</v-col>
						</v-row>
					</v-list-item>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
</template>


<script>
export default {
	props: {
		items: {}
	},
	data() {
		return {
			timeDifference: null
		}
	},
	methods: {
		getChipText(item) {
			if (item.in_app) {
				return "In App"
			}
			return "System"
		}
	}
}
</script>