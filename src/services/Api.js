import router from "@/router/router"

export const getUserApi = async () => {
	return await fetch('/api/v1/user/?format=json', {
		method: "GET",
		headers: {
			"authorization": `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then(response => response.json())
}

export const getProjectIssuesApi = async () => {
	return await fetch('/api/v1/projects/?format=json', {
		method: "GET",
		headers: {
			"authorization": `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then(response => response.json())
}

export const getProblemsByIdApi = async (id) => {
	return await fetch(`/api/v1/problems/${id}/?format=json`, {
		method: "GET",
		headers: {
			"authorization": `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then(response => response.json())
}

export const getProblemByIdApi = async (id) => {
	return await fetch(`/api/v1/problem/${id}/?format=json`, {
		method: "GET",
		headers: {
			"authorization": `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then(response => response.json())
}

export const getPlatform = async () => {
	return await fetch(`/api/v1/platform/?format=json`, {
		method: "GET",
		headers: {
			"authorization": `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then(response => response.json())
}

export const setProject = async (project) => {
	return await fetch(`/api/v1/project/?format=json`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
			"authorization": `Bearer ${localStorage.getItem('token')}`
		},
		body: JSON.stringify(project)
	})
	.then(response => {
		router.push(`/manual/${response.body}`)
	})
}

export const getProject = async (id) => {
	return await fetch(`/api/v1/project/${id}/?format=json`, {
		method: "GET",
		headers: {
			"authorization": `Bearer ${localStorage.getItem('token')}`
		}
	})
	.then(response => response.json())
}