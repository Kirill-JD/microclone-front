export const getIssuesApi = async () => {
	return await fetch('/api/?format=json')
	.then(response => response.json())
}