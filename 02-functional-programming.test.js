const { countEmojisInMessage } = require('./02-functional-programming')

// ð¡ HINT: Emojis can be found with the following RegEx: /\p{Emoji}/u
test('it should count emojis in a message', () => {
	const message = `Lorem ipsum dolor ðð sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod! ð tempor invidunt ut labore et dolore magnað aliquyam erat,
sed diam voluptua.ð® At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata ðð sanctus est Lorem ipsum dolor sit amet.ð`
	const expectedResult = { 'ð': 1, 'ð': 3, 'ð': 2, 'ð®': 1, 'ð': 1 }

	const emojiCounts = countEmojisInMessage(message)
	expect(emojiCounts).toMatchObject(expectedResult)
})
