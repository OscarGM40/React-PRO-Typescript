module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,ico,html,png,txt,css,js}'
	],
/* 	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	], */ //injectManifest no funciona con esta propiedad
	swDest: 'build/sw.js',
	swSrc: 'src/sw-template.js', // generateSW no funciona con esta propiedad
};