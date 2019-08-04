const path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin') //html插件
	// CleanWebpackPlugin = require('clean-webpack-plugin') //清除dist文件插件

function getEntry() {

}

module.exports = {
	// 打包入口
	entry: {
		app: path.resolve(__dirname, '../src/js/pages/app.js')
	},
	// 打包出口
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js'
	},
	// 映射设置
	devtool:'inline-source-map',
	//设置本地web服务器
	devServer:{
		contentBase:"./dist"
	},
	// 插件配置
	plugins: [
		// new CleanWebpackPlugin({
		// 	cleanOnceBeforeBuildPatterns : ["../dist"]
		// }),//清除dist文件夹
		new HtmlWebpackPlugin({
			title: "out"
		})
	]
}