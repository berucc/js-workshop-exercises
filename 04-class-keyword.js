class Post {
	constructor(text) {
		this.text = text
	}
}

class ImagePost extends Post {
	constructor(text, imageUrl) {
		super(text)
		this.imageUrl = imageUrl
	}

	downloadImage() {}
}

module.exports = { Post, ImagePost }
