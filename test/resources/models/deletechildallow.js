/*jslint node:true */
module.exports = {
	fields: {
		id: {required:true,createoptional:true,mutable:false},
		text: {},
		deleteparentcascade_childallow: {}
	},
	delete: {children:"deletegrandchild",policy:"allow"}
};