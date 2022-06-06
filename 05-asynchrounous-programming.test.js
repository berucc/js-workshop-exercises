const {
	getUser,
	getPost,
	getAvatarOfUser,
} = require('./05-asynchronous-programming')
const axios = require('axios')
const flushPromises = require('flush-promises')
const { mockGetUser, mockGetUsers } = require('./00-helpers')

jest.mock('axios')

const USER = {
	id: 2,
	email: 'jane.doe@soocial.com',
	first_name: 'Jane',
	last_name: 'Doe',
	avatar: 'https://reqres.in/img/faces/2-image.jpg',
}

test('getUser should resolve with a post object', () => {
	expect.assertions(1)
	expect(getPost()).resolves.toEqual({ text: 'Lorem ipsum.' })
})

test('getUser should trigger an asynchronous REST call', () => {
	mockGetUser(USER)
	expect.assertions(2)

	const userPromise = getUser()
	expect(axios.get).toHaveBeenCalledWith('https://reqres.in/api/users/2')
	expect(userPromise).resolves.toEqual(USER)
})

test('getAvatarOfUser should search for user with given mail and return the avatar url', async () => {
	mockGetUsers()
	mockGetUser(USER)
	expect.assertions(3)

	const avatarPromise = getAvatarOfUser('janet.weaver@reqres.in')
	await flushPromises()
	expect(axios.get).toHaveBeenCalledWith('https://reqres.in/api/users')
	expect(axios.get).toHaveBeenCalledWith('https://reqres.in/api/users/2')
	expect(avatarPromise).resolves.toEqual(USER.avatar)
})
