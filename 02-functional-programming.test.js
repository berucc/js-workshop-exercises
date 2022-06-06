const { countEmojisInMessage } = require('./02-functional-programming')

// 💡 HINT: Emojis can be found with the following RegEx: /\p{Emoji}/u
test('it should count emojis in a message', () => {
	const message = `Lorem ipsum dolor 👋🙂 sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod! 😉 tempor invidunt ut labore et dolore magna🙂 aliquyam erat,
sed diam voluptua.😮 At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata 😉😇 sanctus est Lorem ipsum dolor sit amet.🙂`
	const expectedResult = { '👋': 1, '🙂': 3, '😉': 2, '😮': 1, '😇': 1 }

	const emojiCounts = countEmojisInMessage(message)
	expect(emojiCounts).toMatchObject(expectedResult)
})
