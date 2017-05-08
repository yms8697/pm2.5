var koa = require('koa');
var controller=require('koa-route');
var app = koa();
var qs=require('querystring');
var views=require('co-views');
var render=views('./view',{
	map:{html:'ejs'}
});
var service=require('./service/webAppService.js');
//引入静态文件中间件
var koa_static=require('koa-static-server');
app.use(koa_static({
	rootDir:'./static/',
	rootPath:'/static/',
	maxage:0
}));
//主页路由
app.use(controller.get('/',function*(){
	this.set('Cache-Control','no-cache');
	this.body =yield render('index');
}));
//query页路由
app.use(controller.get('/query',function*(){
	this.set('Cache-Control','no-cache');
	this.body =yield render('query');
}));
//散列画廊数据接口
app.use(controller.get('/ajax/galleryImgDatas',function*(){
	this.set('Cache-Control','no-cache');
	this.body =service.get_galleryimg_data();
}));
//实时数据接口
app.use(controller.get('/ajax/query',function*(){
	this.set('Cache-Control','no-cache');
	this.body =service.get_query_data();
}));
app.use(controller.get('/ajax/shandong',function*(){
	this.set('Cache-Control','no-cache');
	this.body =service.get_shandong_data();
}));
app.listen(3001);
