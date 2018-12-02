'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')
const port = 3000
const url = `http://localhost:${port}`

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	}
}).listen(port, (error) => {
	if(error) {
		console.log(error)
	} else {
		console.log(`Listening on ${url}`)
	}
})
