module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,html,json,md,jpg,js,css,scss}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};