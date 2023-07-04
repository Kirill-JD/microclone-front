<template>
	<div v-if="token === null">
		<LoginPage/>
	</div>
	<div v-else>
		<Navigation/>
	</div>
</template>

<script>
import LoginPage from "@/pages/LoginPage"
import Navigation from '@/components/Navigation';
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
		LoginPage,
		Navigation
  },
	computed: {
    ...mapState(['token'])
  },
	data() {
		return {
		}
	},
	methods: {
		auth() {
			if (typeof localStorage["cart"] === "undefined") {
				return true
			}
			return false
		}
	}
}
</script>

<style>

</style>
