const webpack = require("webpack");
const path = require("path");

/**
 *  The following code read env variables and make it available for client/react app.
 * 	new webpack.EnvironmentPlugin(['NODE_ENV', "CUSTOM_ENV"]),
 */
const prodconfig = {
	mode: "production",
	devServer: {
		contentBase: path.join(__dirname, './dist')
	},
	plugins: [
		new webpack.EnvironmentPlugin(['DEFINE_YOUR_ENV_HERE']),
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = prodconfig