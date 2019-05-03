const path = require("path")
function getEntry(){
	
}

console.log(__dirname)
module.exports = {
	entry : {
		app : path.resolve(__dirname,"../src/js/pages/app.js")
	},
	output : {
		path : path.resolve(__dirname,"../dist"),
		filename:"bundle.js"
	}
}
