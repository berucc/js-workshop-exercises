const { ImagePost, Post } = require('./04-class-keyword')

test('it should provide a class ImagePost which inherits from Post', () => {
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
