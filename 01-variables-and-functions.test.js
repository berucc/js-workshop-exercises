const {
	createLikeString,
	addUserToList,
	removeUserFromList,
	createFollowerString,
} = require('./01-variables-and-functions')

it('should return a string with the current likes', () => {
	expect(createLikeString(12)).toBe('12 Personen gefällt dieser Beitrag.')
	expect(createLikeString(42)).toBe('42 Personen gefällt dieser Beitrag.')
	expect(createLikeString(1)).toBe('Einer Person gefällt dieser Beitrag.')
	expect(createLikeString(0)).toBe('Dieser Beitrag gefällt noch keinem.')
})

it('should add a given user to a list of users if it is not already part of the list', () => {
	const users = []

	addUserToList(users, 'Mark')
	expect(users).toHaveLength(1)
	expect(users).toContain('Mark')

	addUserToList(users, 'Jane')
	expect(users).toHaveLength(2)
	expect(users).toContain('Jane')

	addUserToList(users, 'Mark')
	expect(users).toHaveLength(2)
})

it('should remove a given user of the user list without modifying the original list', () => {
	const users = ['Jane', 'Joe', 'Mark', 'Ronja']
	const usersWithoutMark = removeUserFromList(users, 'Mark')
	expect(usersWithoutMark).toHaveLength(3)
	expect(usersWithoutMark).not.toContain('Mark')
	expect(users).toHaveLength(4)
})

it('should return a string with the follower of a user', () => {
	expect(createFollowerString('Mark', 'Jane')).toBe('Auch Jane folgt Mark.')
	expect(createFollowerString('Mark', 'Jane', 'Joe')).toBe(
		'Auch Jane und Joe folgen Mark.'
	)
	expect(createFollowerString('Mark', 'Jane', 'Joe', 'Lisa', 'Peter')).toBe(
		'Auch Jane und 3 andere folgen Mark.'
	)
})
