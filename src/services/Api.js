import store from "@/store"
// import router from "@/router/router"

export const getProjectIssuesApi = async () => {
	return await fetch('/api/projects/?format=json', {
		method: "GET",
		headers: {
			"authorization": `Bearer ${store.state.token}`
		}
	})
	.then(response => response.json())
}

export const getProblemsByIdApi = async (id) => {
	return await fetch(`/api/problems/${id}/?format=json`, {
		method: "GET",
		headers: {
			"authorization": `Bearer ${store.state.token}`
		}
	})
	.then(response => response.json())
}

export const getProblemByIdApi = async (id) => {
	return await fetch(`/api/problem/${id}/?format=json`, {
		method: "GET",
		headers: {
			"authorization": `Bearer ${store.state.token}`
		}
	})
	.then(response => response.json())
}

export const getPlatform = async () => {
	return await fetch(`/api/platform/?format=json`, {
		method: "GET",
		headers: {
			"authorization": `Bearer ${store.state.token}`
		}
	})
	.then(response => response.json())
}

export const setProject = async (project) => {
	return await fetch(`/api/project/?format=json`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
			"authorization": `Bearer ${store.state.token}`
		},
		body: JSON.stringify(project)
	})
	.then(response => response.json())
	.then(json => {
		// router.push(`/manual/${json.uid}`)
		return json
	})
}