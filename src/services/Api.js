export const getProjectIssuesApi = async () => {
	return await fetch('/api/get_project_list/?format=json')
	.then(response => response.json())
}

export const getProblemByIdApi = async (id) => {
	return await fetch(`/api/get_problem_list/${id}/?format=json`)
	.then(response => response.json())
}