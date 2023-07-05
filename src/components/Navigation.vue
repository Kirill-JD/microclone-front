<template>
  <v-card style="box-shadow: none;">
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
				style="background-color: #c1ddda;"
      >
        <v-list>
          <v-list-item
						prepend-icon="mdi-account"
            :title="user.username"
            :subtitle="user.email"
          ></v-list-item><!-- prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" -->
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Главная" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-alert" title="Проекты" value="issue" to="/projects/"></v-list-item>
        </v-list>

				<v-divider></v-divider>

				<v-list>
          <v-list-item
						prepend-icon="mdi mdi-logout"
            title="Выйти"
						href="/login/"
						@click="logout"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
				<router-view/>
			</v-main>
    </v-layout>
  </v-card>
</template>

<script>
import { getUserApi } from "@/services/Api"
export default {
	methods: {
		logout() {
			localStorage.removeItem('token')
		}
	},
	data() {
		return {
			user: {}
		}
	},
	mounted() {
		getUserApi().then(json => {
			this.user = json
		})
	}
}
</script>

<style>
</style>