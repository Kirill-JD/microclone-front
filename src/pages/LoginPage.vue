<template>
  <div>
		<v-sheet class="pa-12" rounded>
			<v-card
				class="mx-auto pa-12 pb-8"
				elevation="8"
				max-width="448"
				rounded="lg"
			>
				<div class="text-subtitle-1 text-medium-emphasis">Account</div>

				<v-text-field
					v-model="user.email"
					density="compact"
					placeholder="Email address"
					prepend-inner-icon="mdi-email-outline"
					variant="outlined"
				/>

				<div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
					Password

					<a
						class="text-caption text-decoration-none text-blue"
						href="#"
						rel="noopener noreferrer"
						target="_blank"
					>
						Forgot login password?</a>
				</div>

				<v-text-field
					v-model="user.password"
					:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
					:type="visible ? 'text' : 'password'"
					density="compact"
					placeholder="Enter your password"
					prepend-inner-icon="mdi-lock-outline"
					variant="outlined"
					@click:append-inner="visible = !visible"
				/>

				<v-btn
					block
					class="mb-8"
					color="blue"
					size="large"
					variant="tonal"
					@click="login()"
				>
					Войти
				</v-btn>

				<v-card-text class="text-center">
					<a
						class="text-blue text-decoration-none"
						href="#"
						rel="noopener noreferrer"
						target="_blank"
					>
						Зарегистрироваться <v-icon icon="mdi-chevron-right"></v-icon>
					</a>
				</v-card-text>
			</v-card>
		</v-sheet>
  </div>
</template>

<script>
// import AuthService from "@/services/AuthService";
// import router from "@/router";
export default {
  data() {
    return {
			visible: false,
      user: {
        email: "",
        password: "",
      }
    };
  },
	methods:{
		login(){
			fetch(`/authenticate/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=utf-8"
				},
				body: JSON.stringify(this.user)
			})
			.then(response => response.json())
			.then(json => {
				this.$store.dispatch('setToken', json.jwtToken);
				this.$router.push(`/`)
			})
			.catch(() => {
				alert("Неверные данные для входа")
			})
		}
	}
};
</script>