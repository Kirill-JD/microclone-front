<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
						prepend-icon="mdi-account"
            title="UserName"
            subtitle="test@gmailcom"
          ></v-list-item><!-- prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" -->
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Issues" value="issue" to="/projects/"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred" to="/1"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: auto">
				<router-view/>
			</v-main>
    </v-layout>
  </v-card>
</template>