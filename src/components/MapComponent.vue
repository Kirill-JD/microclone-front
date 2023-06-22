<template>
	<div v-for="[k, v] in map" :key="k">
		<v-row>
			<v-col cols="2">
				<b style="color: gray;">{{k}}</b>
			</v-col>
			<v-col>
				<v-card style="background-color: #c1ddda;" class="px-2">
					{{v}}
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	props: {
		map: Map
	}
}
</script>