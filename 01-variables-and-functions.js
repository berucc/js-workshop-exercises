function createLikeString(likes) {
	if (likes === 0) {
		return `Dieser Beitrag gefällt noch keinem.`
	} else if (likes === 1) {
		return `Einer Person gefällt dieser Beitrag.`
	}
	return `${likes} Personen gefällt dieser Beitrag.`
}

function addUserToList(users, user) {
	if (users.includes(user)) {
		return
	}
	users.push(user)
}

function removeUserFromList(users, user) {
	const userIndex = users.indexOf(user)
	const userCopy = Array.from(users)
	userCopy.splice(userIndex, 1)
	return userCopy
}

function createFollowerString(user, ...follower) {
	if (follower.length === 1) {
		return `Auch ${follower[0]} folgt ${user}.`
	} else if (follower.length === 2) {
		return `Auch ${follower[0]} und ${follower[1]} folgen ${user}.`
	} else {
		return `Auch ${follower[0]} und ${
			follower.length - 1
		} andere folgen ${user}.`
	}
}

module.exports = {
	createLikeString,
	addUserToList,
	removeUserFromList,
	createFollowerString,
}
