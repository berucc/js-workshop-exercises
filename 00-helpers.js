const { when } = require('jest-when')
const axios = require('axios')
const USER_LIST_RESPONSE = require('./00-users-response.json')

function mockGetUser(user) {
	when(axios.get)
		.calledWith('https://reqres.in/api/users/2')
		.mockResolvedValue({ data: user })
}
function mockGetUsers() {
	when(axios.get)
		.calledWith('https://reqres.in/api/users')
		.mockResolvedValue(USER_LIST_RESPONSE)
}

module.exports = { mockGetUser, mockGetUsers }
