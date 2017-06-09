var fs=require('fs');
var http=require('http');
var qs=require('querystring');
exports.get_shandong_data=function(){
	var content=fs.readFileSync("./data/mapdata/shandong.json","utf-8");
	return content;
}
exports.get_query_data=function(){
	var content=fs.readFileSync("./data/dataQuery.json","utf-8");
	return content;
}
exports.get_history_data=function(){
	var content=fs.readFileSync("./data/historyData.json","utf-8");
	return content;
}
exports.get_row_data=function(){
	var content=fs.readFileSync("./data/index.json","utf-8");
	return content;
}