<template>
	<div class="text-center">
    <v-dialog
      v-model="dialog"
			transition="dialog-top-transition"
			max-width="500"
    >
      <template v-slot:activator="{ props }">
				<v-btn density="compact" rounded="lg" size="x-large" prepend-icon="mdi-plus" style="background-color: #c1ddda;" v-bind="props">
					Создать проект
				</v-btn>
      </template>

      <v-card
					class="pa-5"
					elevation="8"
					rounded="lg"
				>
        <v-card-text>
          <v-select
						v-model="project.platform"
						label="Платформа"
						:items="platforms"
						:item-title="getItemText"
						return-object
						variant="outlined"
					/>
					<v-text-field
						v-model="project.name"
						label="Название проекта"
						variant="outlined"
					/>
        </v-card-text>
        <v-card-actions class="pa-5">
          <v-btn style="background-color: #c1ddda;" block @click="createProject">Создать</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getPlatform, setProject } from "@/services/Api"
  export default {
    data () {
      return {
        dialog: false,
				platforms: [],
				project: {
					name: '',
					platform: ''
				}
      }
    },
		methods: {
			createProject() {
				setProject(this.project)
			},
			getItemText(item) {
				return String(item).toLowerCase()
			}
		},
		mounted() {
			getPlatform().then(json => {
				this.platforms = json
			})
		}
  }
</script>