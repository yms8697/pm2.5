var fs=require('fs');
var http=require('http');
var qs=require('querystring');
exports.get_galleryimg_data=function(){
	var content=fs.readFileSync("./data/galleryImgDatas.json","utf-8");
	return content;
}
exports.get_query_data=function(){
	var content=fs.readFileSync("./data/dataQuery.json","utf-8");
	return content;
}
exports.get_shandong_data=function(){
	var content=fs.readFileSync("./data/mapdata/shandong.geojson","utf-8");
	return content;
}