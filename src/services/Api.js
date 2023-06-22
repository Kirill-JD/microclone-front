export const getProjectIssuesApi = async () => {
	return await fetch('/api/projects/?format=json')
	.then(response => response.json())
}

export const getProblemsByIdApi = async (id) => {
	return await fetch(`/api/problems/${id}/?format=json`)
	.then(response => response.json())
}

export const getProblemByIdApi = async (id) => {
	return await fetch(`/api/problem/${id}/?format=json`)
	.then(response => response.json())
}