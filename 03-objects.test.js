const { User, ImagePost, Post } = require('./03-objects')

test('it should create a user object', () => {
	const jane = new User('jado', 'Jane', 'Doe')
	expect(jane.username).toBe('jado')
	expect(jane.firstName).toBe('Jane')
	expect(jane.lastName).toBe('Doe')

	const joe = new User('joe')
	expect(joe.username).toBe('joe')
	expect(joe.firstName).toBe('')
	expect(joe.lastName).toBe('')
})

test('it should return the full name of the user', () => {
	const user = new User('malley', 'Markus', 'Honigtal')
	expect(user.getFullName()).toBe('Markus Honigtal')
})

test('it should provide a object type ImagePost which inherits from Post', () => {
	const TEXT = 'Lorem ipsum dolores imago.'
	const IMAGE_URL = 'https://source.unsplash.com/random/300×300'
	const imagePost = new ImagePost(TEXT, IMAGE_URL)
	expect(imagePost.text).toBe(TEXT)
	expect(imagePost.imageUrl).toBe(IMAGE_URL)
	expect(imagePost.__proto__).toBe(ImagePost.prototype)
	expect(imagePost.__proto__.constructor).toBe(ImagePost)
	expect(imagePost.__proto__.hasOwnProperty('downloadImage')).toBe(true)
	expect(typeof imagePost.__proto__.downloadImage).toBe('function')
	expect(imagePost.__proto__.__proto__).toBe(Post.prototype)
})
