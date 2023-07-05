<template>
	<div v-if="auth">
		<LoginPage/>
	</div>
	<div v-else>
		<Navigation/>
	</div>
</template>

<script>
import LoginPage from "@/pages/LoginPage"
import Navigation from '@/components/Navigation';
export default {
  name: 'App',
  components: {
		LoginPage,
		Navigation
  },
	computed: {
    auth: function () {
			if (typeof localStorage['token'] === "undefined") {
				return true
			}
			return false
		}
  },
	data() {
		return {
		}
	},
	methods: {
	}
}
</script>

<style>

</style>
