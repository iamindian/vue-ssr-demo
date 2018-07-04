const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	mode:'development',
	devtool: "inline-source-map",
	target:"node",
	entry:{
		'entry-server': path.join(__dirname, 'src', 'entry-server.js'),
	},
	output:{
		path:__dirname + '/dist',
		filename:'[name]-bundle.js',
		libraryTarget:"commonjs2",
		library:"entry-server",
		publicPath:'/'
	},
	module:{
		rules:[{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		},
		{
		    test:/\.vue$/,
		  	loader: 'vue-loader' 
		},
		{
			test:/\.css$/,
			use: [
				'css-loader'
			]
		}]
	},
	plugins:[
		new VueLoaderPlugin()	
	]
}
