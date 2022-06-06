const axios = require('axios')

function getPost() {
	return Promise.resolve({ text: 'Lorem ipsum.' })
}

function getUser() {
	return axios
		.get('https://reqres.in/api/users/2')
		.then((response) => response.data)
}

function getAvatarOfUser(email) {
	return axios
		.get('https://reqres.in/api/users')
		.then((response) => {
			return response.data.find((user) => user.email === email)
		})
		.then((user) => {
			return axios.get(`https://reqres.in/api/users/${user.id}`)
		})
		.then((userResponse) => {
			return userResponse.data.avatar
		})
}

module.exports = { getPost, getUser, getAvatarOfUser }
