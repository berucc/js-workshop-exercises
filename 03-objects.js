function User(username, firstName = '', lastName = '') {
	this.username = username
	this.firstName = firstName
	this.lastName = lastName

	this.getFullName = function () {
		return `${this.firstName} ${this.lastName}`
	}
}

function Post(text) {
	this.text = text
}

function ImagePost(text, imageUrl) {
	Post.call(this, text)
	this.imageUrl = imageUrl
}
ImagePost.prototype = Object.create(Post.prototype)
ImagePost.prototype.constructor = ImagePost

ImagePost.prototype.downloadImage = function () {
	console.log(`Downloading image ${this.imageUrl}`)
}

module.exports = { User, Post, ImagePost }
