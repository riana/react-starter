//jshint esversion:6
// jshint node:true

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const extractSass = new ExtractTextPlugin({
    filename: "style.css",
   //  disable: process.env.NODE_ENV === "development"
});


module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/lib"
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".scss", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},

	module: {
		rules: [{
				test: /\.tsx?$/,
				// include: [
				// 	path.resolve(__dirname, "src")
				// ],
				loader: "awesome-typescript-loader",
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
			}
		],
		loaders: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			},
			{
				test: /\.scss?$/,
				loader: "sass-loader"
			}
		]
	},
	plugins: [
		extractSass
	],
	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
};
