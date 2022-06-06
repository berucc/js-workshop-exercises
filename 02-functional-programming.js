function countEmojisInMessage(message) {
	// ⚠️ NOTE: message.split('') does not work since emojis consist of several characters.
	return Array.from(message)
		.filter(isCharacterAnEmoji)
		.reduce(emojiListToCountObject, {})
}

function isCharacterAnEmoji(character) {
	const emojiRegex = /\p{Emoji}/u
	return emojiRegex.test(character)
}

function emojiListToCountObject(prev, current) {
	prev[current] = prev[current] ? prev[current] + 1 : 1
	return prev
}

module.exports = { countEmojisInMessage }
