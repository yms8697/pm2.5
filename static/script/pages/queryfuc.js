var map = new BMap.Map("map");    // 创建Map实例
		var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":1.2});
		var dValue=[];
		var cityname='泰安';
		var echartsData=[];
		var countData=[];
		var min_maxCoordinate={"min":[116.2244,36.0297],"max":[117.7515,37.5403]};
		var shandongData=[{name:'烟台',lng:121.30955503008511,lat:37.53656156285964},{name:'临沂',lng:118.34076823661057,lat:35.07240907439113},{name:'潍坊',lng:119.14263382297053,lat:36.71611487305138},{name:'青岛',lng:120.38442818368189,lat:36.10521490127382},{name:'菏泽',lng:115.46335977452752,lat:35.26244049607468},{name:'济宁',lng:116.60079762482256,lat:35.40212166433135},{name:'德州',lng:116.32816136356094,lat:37.46082592630501},{name:'滨州',lng:117.96829241452845,lat:37.405313941825898},{name:'聊城',lng:115.98686913929108,lat:36.455828514727979},{name:'东营',lng:118.61264305187912,lat:37.408666288041199},{name:'济南',lng:117.02496706629023,lat:36.68278472716141},{name:'泰安',lng:117.08941491713698,lat:36.18807775894815},{name:'威海',lng:122.09395836580605,lat:37.52878708125143},{name:'日照',lng:119.50717994299387,lat:35.42022519314436},{name:'淄博',lng:118.05913427786938,lat:36.80468485421204},{name:'枣庄',lng:117.27930538329689,lat:34.80788307838604},{name:'莱芜',lng:117.68466691247162,lat:36.23365413364694}];
		var coordinates=[[116.2244,36.1725],[116.2793,36.2219],[116.3232,36.2933],[116.4111,36.3208],[116.4331,36.3208],[116.4551,36.3428],[116.488,36.3428],[116.499,36.3757],[116.543,36.4087],[116.5979,36.4197],[116.6199,36.4307],[116.6089,36.4746],[116.5979,36.4856],[116.5979,36.4966],[116.6199,36.4966],[116.6309,36.5076],[116.6089,36.5186],[116.6089,36.524],[116.6309,36.546],[116.6528,36.5515],[116.6638,36.579],[116.6858,36.59],[116.6968,36.6064],[116.7517,36.6339],[116.7627,36.6504],[116.7737,36.6669],[116.7847,36.6943],[116.7957,36.6943],[116.8286,36.7218],[116.8616,36.7273],[116.8835,36.7438],[116.8616,36.7822],[116.8726,36.8042],[116.8835,36.8152],[116.8835,36.8262],[116.9165,36.8262],[116.9604,36.8427],[116.9604,36.9196],[116.9385,36.925],[116.9385,36.9415],[116.9165,36.958],[116.8945,36.9635],[116.8945,36.98],[116.8726,36.9965],[116.9165,37.0239],[116.9385,37.0349],[116.9165,37.0734],[116.9165,37.1008],[116.9385,37.1008],[116.9495,37.1118],[116.9824,37.1118],[116.9934,37.1283],[117.0374,37.1228],[117.0593,37.1613],[117.0593,37.1887],[117.0374,37.1997],[117.0374,37.2162],[117.0374,37.2382],[117.0374,37.2601],[117.0264,37.2766],[117.0044,37.2876],[116.9824,37.337],[116.9934,37.348],[117.0044,37.359],[117.0044,37.37],[116.9934,37.381],[117.0044,37.392],[117.0154,37.392],[117.0264,37.403],[117.0154,37.4194],[117.0154,37.4304],[117.0923,37.4414],[117.1033,37.4579],[117.1033,37.4689],[117.1033,37.4744],[117.1252,37.4854],[117.1472,37.4744],[117.1912,37.4854],[117.2241,37.5128],[117.2241,37.5403],[117.2571,37.5293],[117.2681,37.5403],[117.2681,37.5238],[117.2791,37.5183],[117.29,37.5073],[117.301,37.5073],[117.323,37.5018],[117.323,37.4908],[117.29,37.4854],[117.2791,37.4744],[117.301,37.4689],[117.312,37.4469],[117.334,37.4524],[117.3669,37.4469],[117.3669,37.4194],[117.3669,37.4139],[117.3669,37.403],[117.356,37.403],[117.3999,37.3865],[117.3999,37.3755],[117.4109,37.3645],[117.4109,37.3096],[117.4329,37.2821],[117.4219,37.2491],[117.3999,37.2327],[117.4219,37.1887],[117.4329,37.1942],[117.4438,37.1558],[117.4548,37.1338],[117.4548,37.1063],[117.4329,37.0898],[117.3999,37.0844],[117.3669,37.0734],[117.334,37.0734],[117.334,37.0404],[117.323,37.0294],[117.323,37.0129],[117.334,37.0074],[117.3669,37.002],[117.3779,36.958],[117.3889,36.9525],[117.4109,36.9525],[117.4219,36.969],[117.4219,36.9525],[117.4438,36.9525],[117.5098,36.969],[117.5098,36.9745],[117.5208,36.9635],[117.5427,36.9745],[117.5647,36.958],[117.5647,36.947],[117.5427,36.936],[117.5757,36.8976],[117.5757,36.8536],[117.5867,36.8481],[117.5977,36.8317],[117.6855,36.7877],[117.6965,36.7548],[117.7515,36.7493],[117.7405,36.7218],[117.7185,36.7053],[117.7185,36.6888],[117.7075,36.6888],[117.6965,36.6779],[117.6965,36.6504],[117.7075,36.6394],[117.7075,36.568],[117.7405,36.5405],[117.7405,36.524],[117.6965,36.5186],[117.6416,36.535],[117.6196,36.5515],[117.5867,36.5405],[117.5647,36.5131],[117.5208,36.5021],[117.4988,36.5076],[117.4988,36.4966],[117.4768,36.4746],[117.4109,36.4636],[117.3999,36.4417],[117.3779,36.4362],[117.356,36.4581],[117.345,36.4691],[117.312,36.4691],[117.29,36.4746],[117.2791,36.4526],[117.2461,36.4362],[117.2351,36.4142],[117.2021,36.3977],[117.2021,36.3922],[117.1692,36.3538],[117.1472,36.3483],[117.1252,36.3373],[117.0923,36.3428],[117.0703,36.3153],[117.0813,36.2988],[117.0264,36.2823],[117.0264,36.2714],[117.0044,36.2659],[116.9824,36.2439],[116.9495,36.2604],[116.9165,36.2659],[116.8945,36.2549],[116.8726,36.2659],[116.8616,36.2823],[116.8506,36.2933],[116.8176,36.2988],[116.7737,36.3153],[116.7407,36.3043],[116.7188,36.2823],[116.7078,36.2878],[116.6858,36.2769],[116.6528,36.2988],[116.6089,36.2933],[116.5979,36.2714],[116.554,36.2494],[116.51,36.2549],[116.4771,36.2109],[116.51,36.178],[116.532,36.1725],[116.532,36.1505],[116.554,36.134],[116.5649,36.1121],[116.543,36.1066],[116.543,36.0846],[116.532,36.0681],[116.499,36.0736],[116.488,36.0681],[116.4441,36.0571],[116.4331,36.0571],[116.4331,36.0681],[116.4111,36.0736],[116.4001,36.0846],[116.3672,36.0901],[116.3562,36.0846],[116.3562,36.0736],[116.3452,36.0626],[116.3123,36.0516],[116.3013,36.0297],[116.2793,36.0406],[116.2573,36.0681],[116.2573,36.1011],[116.2683,36.123],[116.2244,36.1725]];
		
		var vm=new Vue({
			el:'#app',
			data:{
				city:[],
				aqi:[],
				pm25:[],
				airquality:[],
				time:[],
				echart:false,
				map:true,
				count:false,
				progress:false,
				visualmap:false
			},
			methods:{
				getData:function(cityname){
					var _this=this;
					$.get('/ajax/query',function(d){
						for(var i=0;i<d.length;i++){
							if(d[i].city==cityname){
								_this.city=d[i].city;
								_this.aqi=d[i].aqi;
								_this.pm25=d[i].pm25;
								switch(true){
									case _this.aqi>0&&_this.aqi<=50:
									_this.airquality="优";
									break;
									case _this.aqi>50&&_this.aqi<=100:
									_this.airquality="良";
									break;
									case _this.aqi>100&&_this.aqi<=150:
									_this.airquality="轻度污染";
									break;
									case _this.aqi>150&&_this.aqi<=200:
									_this.airquality="中度污染";
									break;
									case _this.aqi>200&&_this.aqi<=300:
									_this.airquality="重度污染";
									break;
									case _this.aqi>300:
									_this.airquality="严重污染";
									break;

								}
								_this.time='2017-5-24';
							}
						}
					},'json')
				},
				echartsShow:function(){
					
					this.echart=true;
					this.map=false;
					this.count=false;
					setTimeout(function() {
						initEcharts();
					},100)
				},
				countShow:function(){
					this.count=true;
					this.map=false;
					this.echart=false;
					setTimeout(function() {
						initCountEcharts(cityname);
					},100)
				},
				heatmapShow:function(map){
					_this=this;
					this.echart=false;
					this.count=false;
					this.map=true;
					setTimeout(function() {
						interpolation.doIdw(min_maxCoordinate);
						_this.visualmap=true;
						visualmap();
						map.removeOverlay();
					},100)
					
				},
				getHistoryData:function(){
					var cityname=$('#cityname').val();
					var time=$('#time').val();
					var _this=this;
					var opts = {
					  width : 280,     // 信息窗口宽度
					  height: 170,     // 信息窗口高度
					  title : cityname , // 信息窗口标题
					  enableMessage:true,//设置允许信息窗发送短息
					};
					for(var i=0;i<shandongData.length;i++){
						if(shandongData[i].name==cityname){
							var point=new BMap.Point(shandongData[i].lng, shandongData[i].lat);
						}
					}
					setTimeout(function() {
						var dom = $('#ol-popup').html();
						var infoWindow = new BMap.InfoWindow(dom, opts);  // 创建信息窗口对象 
						map.openInfoWindow(infoWindow,point);
					},100)
					//alert(cityname);
					//alert(time);
					$.get('/ajax/history',function(d){
						//alert(d[0][0].time);
						for(var i=0;i<d.length;i++){
							if(d[i][0].city==cityname){
								for(var j=0;j<d[i].length;j++){
									var a=d[i][j].time;
									if(a==time){
										_this.time=d[i][j].time;
										_this.pm25=d[i][j].allPm25;
										_this.aqi=d[i][j].allAQI;
										_this.city=cityname;
										_this.airquality=d[i][j].airQuality;
									}
								}
							}
						}
					},'json')
				},
				getEchartData:function(cityname){
					$.get('/ajax/history',function(d){
						var pm25=[];
			        	var time=[];
			        	/*for(var i=0;i<d.length;i++){
			        		if(d[i][0].city==cityname){
			        			for(var j=0;j<d[i].length;j++){
					        		pm25.push(d[i][j].allPm25);
					        		time.push(d[i][j].time.substring(2))
					        	}
				        	}
			        	}
			        	//console.log(pm25);
			        	//console.log(time);
			        	myChart.setOption({
					        xAxis: {
					            data:time
					        },
					        series: [{
					            // 根据名字对应到相应的系列
					            name: '浓度',
					            data:pm25
					        }]
					    });*/

					},'json')
				}
			}
		});
		var mapFunc={
			initMap:function(){
				map.centerAndZoom(new BMap.Point(117.02496706629023,36.68278472716141), 9);  // 初始化地图,设置中心点坐标和地图级别
				map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
				map.setCurrentCity("济南");          // 设置地图显示的城市 此项是必须设置的
				map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
				// 向地图添加标注  
				for (var i = 0; i < shandongData.length; i ++) {    
					 var marker = new BMap.Marker(new BMap.Point(shandongData[i].lng,shandongData[i].lat));
					 var city=shandongData[i].name;
					 map.addOverlay(marker);
					this. addClickEvent(marker,city,map); 
				}
			},
			addClickEvent:function(marker,city,map){
				 //点击事件
				marker.addEventListener("click",function(e){
					var p = e.target;
					//console.log(map);
					var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
					//console.log(point);
					var opts = {
					  width : 280,     // 信息窗口宽度
					  height: 170,     // 信息窗口高度
					  title : city , // 信息窗口标题
					  enableMessage:true,//设置允许信息窗发送短息
					};
					vm.getData(city);
					setTimeout(function() {
						var dom = $('#ol-popup').html();
						var infoWindow = new BMap.InfoWindow(dom, opts);  // 创建信息窗口对象 
						map.openInfoWindow(infoWindow,point);
					},100)

				});    
			}
		}
		function getEchartData(){
			var _data=[];
			$.get('/ajax/history',function(d){
					//console.log(d[0][0].time.substring(0,4));
					function getData(time){
						var data=[];
						for(var i=0;i<d.length;i++){
							for(var j=0;j<d[0].length;j++){
								if(d[i][j].time.substring(0,4)==time){
									_data.push(d[i][j].allPm25);
								}
							}
							data.push(_data);
							_data=[];
						}
						return data
					}
					echartsData=[getData('2014'),getData('2015'),getData('2016'),getData('2017')]
					console.log(echartsData);
					function getCountData(cityname,time){
						var data=[];
						for(var i=0;i<d.length;i++){
							for(var j=0;j<d[0].length;j++){
								if(d[i][j].time.substring(0,4)==time&&d[i][j].city==cityname){
									data.push(d[i][j].airQuality);
								}
							}
						}
						console.log(data);
						function getData(airquality){
							var count=0;
							var _data=[];
							for(var i=0;i<data.length;i++){
								if(data[i]==airquality){
									count+=1;
									_data.push(i+1);
								}
							}
							var a={value:count, name:airquality,time:_data};
							if(a.value!=0){
								countData.push(a)
							}
							
						}
						getData('优');
						getData('良');
						getData('轻度污染');
						getData('中度污染');
						getData('重度污染');
						getData('严重污染');
					}
					getCountData(cityname,'2014');
				},'json')

		}
		function initCountEcharts(cityname){
			var myChart = echarts.init(document.getElementById('count'));
			var option = {
				title: [{
			        text: cityname+'空气质量占比分布图',
			        left: 'center',
			        top: '6%',
			        textStyle: {
			            color: '#ffd285'
			        }
				}],
				toolbox: { //可视化的工具箱
	                show: true,
	                top:'6%',
	                right:'10%',
	                backgroundColor:'#fff',
	                feature: {
	                    saveAsImage: {//保存图片
	                        show: true
	                    }
	                }
		        },
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%) "
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        left:'10%',
			        top:'30%',
			        data:['严重污染','重度污染','中度污染','轻度污染','良','优'],
			        formatter:function (name) {
			        		var time
			        		for(var i=0;i<option.series[0].data.length;i++){
			        			if(option.series[0].data[i].name==name){
			        				time=option.series[0].data[i].time
			        			}
			        		}
			                return name+'    '+time+'月';
			          	}
			    },
			    series: [
			        {
			            name:'空气质量',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '30',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:countData
			        }
			    ]
			};
			myChart.setOption(option);
			console.log(option.series[0].data);
		}
		function initEcharts(){
			var years = ['2014', '2015', '2016', '2017'];
			//console.log(data[0][1].data);
			var city=['烟台', '临沂', '潍坊','青岛','菏泽','济宁','德州','滨州','聊城','东营','济南','泰安','威海','日照','淄博','枣庄','莱芜'];
			var myChart = echarts.init(document.getElementById('echart'));
			var itemStyle = {
			    normal: {
			        opacity: 0.8,
			        shadowBlur: 10,
			        shadowOffsetX: 0,
			        shadowOffsetY: 0,
			        shadowColor: 'rgba(255, 255, 255, 0.9)'
			    }
			};
			var option = {
			    baseOption:{
			    	  	timeline: {
			            axisType: 'category',
			            orient: 'vertical',
			            autoPlay: true,
			            inverse: true,
			            playInterval: 3000,
			            left: null,
			            right: 10,
			            top: 20,
			            bottom: 20,
			            width: 55,
			            height: null,
			            label: {
			                normal: {
			                    textStyle: {
			                        color: '#777'
			                    }
			                },
			                emphasis: {
			                    textStyle: {
			                        color: '#555'
			                    }
			                }
			            },
			            symbol: 'none',
			            lineStyle: {
			                color: '#555'
			            },
			            checkpointStyle: {
			                color: '#bbb',
			                borderColor: '#777',
			                borderWidth: 2,
			            },
			            controlStyle: {
			                showNextBtn: false,
			                showPrevBtn: false,
			                normal: {
			                    color: '#666',
			                    borderColor: '#666'
			                },
			                emphasis: {
			                    color: '#aaa',
			                    borderColor: '#aaa'
			                }
			            },
			            data: years
			        },
			    	backgroundColor: "#fff",
				    color: ['#ffd285', '#e88f70', '#9dc5c8', '#e1e8c8', '#ff733f', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a', '#ec4863', '#c3bed4', '#495a80', '#9966cc', '#bdb76a', '#eee8ab', '#b95c25', '#04dd98'],

				    title: [{
				        text: '',
				        left: '1%',
				        top: '6%',
				        textStyle: {
				            color: '#555'
				        }
				    }],
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        x: 300,
				        top: '25%',
				        left:'75%',
				        right:'20%',
				        textStyle: {
				            color: '#555',
				        },
				        data: city
				    },
				    grid: {
				        left: '3%',
				        right: '35%',
				        top: '16%',
				        bottom: '6%',
				        containLabel: true
				    },
				    toolbox: { //可视化的工具箱
		                show: true,
		                top:'6%',
		                right:'10%',
		                backgroundColor:'#fff',
		                feature: {
		                    dataView: { //数据视图
		                        show: true
		                    },
		                    restore: { //重置
		                        show: true
		                    },
		                    dataZoom: { //数据缩放视图
		                        show: true
		                    },
		                    saveAsImage: {//保存图片
		                        show: true
		                    },
		                    magicType: {//动态类型切换
		                        type: ['bar', 'line']
		                    },
		                    myTool : {
								show : true,
								title : '全部不显示',
								icon : 'path://M686.28732 99.478421c-7.982649-7.982649-21.057991-7.982649-29.049154 0l-651.248139 651.272466c-7.986297 7.982649-7.986297 21.047044 0 29.038207L132.648132 906.455713c7.996028 7.982649 23.765499 14.510589 35.063811 14.510589l405.777135 0c11.301961 0 27.066567-6.527941 35.058946-14.510589l427.83615-427.841015c7.999677-7.986297 7.999677-21.053126 0-29.039423L686.28732 99.478421 686.28732 99.478421zM568.257725 829.182264c-7.982649 7.982649-23.759418 14.53005-35.045567 14.53005L219.043913 843.712314c-11.303177 0-27.072648-6.548618-35.063811-14.53005l-59.708703-59.702621c-7.982649-7.982649-7.982649-21.057991 0-29.0601l238.748454-238.738724c7.991163-7.976567 21.066505-7.976567 29.049154 0l237.318072 237.332668c7.982649 7.991163 7.982649 21.057991 0 29.04064L568.257725 829.182264 568.257725 829.182264z',
								onclick : function() {
									var dt = option.baseOption.legend.data;
									console.log(dt);
									option.baseOption.legend.selected = {};

									var length = dt.length;
									for (var n = 0; n < length; n++) {
										var val = dt[n];
										option.baseOption.legend.selected[val] = false;
									}
													
									var Chart = echarts.init(document.getElementById('echart'));
									Chart.setOption(option);
									}
							},
		                }
		            },
				    xAxis: {
				        type: 'category',
				        name: '时间',
				        nameLocatin:'middle',
				        nameGap: 25,
				        nameTextStyle: {
			                color: '#555',
			                fontSize: 15
			            },
				        "axisLine": {
				            lineStyle: {
				                color: '#555'
				            }
				        },
				        "axisTick": {
				            "show": false
				        },
				        axisLabel: {
				            textStyle: {
				                color: '#555'
				            }
				        },
				        boundaryGap: false,
				        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
				    },
				    yAxis: {
				    	name:'pm2.5浓度(μg/m³)',
				    	nameLocatin:'middle',
				    	nameTextStyle: {
			                color: '#555',
			                fontSize: 15,
			            },
				        "axisLine": {
				            lineStyle: {
				                color: '#c0576d'
				            }
				        },
				        splitLine: {
				            show: true,
				            lineStyle: {
				                color: '#555'
				            }
				        },
				        "axisTick": {
				            "show": false
				        },
				        axisLabel: {
				            textStyle: {
				                color: '#555'
				            }
				        },
				        type: 'value'
				    }
				},
				options:[]
			}
			var series=[];
			for (var n = 0; n < years.length; n++) {
				for(var i=0;i<city.length;i++){
					series.push({
						name:city[i],
						smooth:true,
						type: 'line',
					    symbolSize: 8,
					    symbol: 'circle',
				        itemStyle: itemStyle,
				        data: echartsData[n][i],
				        symbolSize: 10
					})
				}
			    option.options.push({
			        title: {
			            text: years[n]+'   山东省主要城市PM2.5浓度变化趋势'
			        },
			        series: series
			    })
			    series=[];
			}
			myChart.setOption(option);
		}
		var interpolation={
			IsPtInPoly:function(point,APoints){
				var iSum = 0,  
					iCount;  
				var dlng1, dlng2, dLat1, dLat2, dlng;
				var Alng=point[0];
				var ALat=point[1];  
				if (APoints.length < 3) return false;  
				iCount = APoints.length;  
				for (var i = 0; i < iCount; i++) {  
				    if (i == iCount - 1) {  
				        dlng1 = APoints[i][0];  
				        dLat1 = APoints[i][1];  
				        dlng2 = APoints[0][0];  
				        dLat2 = APoints[0][1];  
				    } else {  
				        dlng1 = APoints[i][0];  
				        dLat1 = APoints[i][1];  
				        dlng2 = APoints[i + 1][0];  
				        dLat2 = APoints[i + 1][1];  
				    }  
				    //以下语句判断A点是否在边的两端点的水平平行线之间，在则可能有交点，开始判断交点是否在左射线上  
				    if (((ALat >= dLat1) && (ALat < dLat2)) || ((ALat >= dLat2) && (ALat < dLat1))) {  
				        if (Math.abs(dLat1 - dLat2) > 0) {  
				            //得到 A点向左射线与边的交点的x坐标：  
				            dlng = dlng1 - ((dlng1 - dlng2) * (dLat1 - ALat)) / (dLat1 - dLat2);  
				            if (dlng < Alng)  
				                iSum++;  
				        }  
				    }  
				}  
				if (iSum % 2 != 0)  
				    return true;  
				return false;  
			},
			getDvaule:function(){
				var dValue=[];
				var p1=new BMap.Pixel(100,100); 
				var p2=new BMap.Pixel(101,101);
		        var a=map.pixelToPoint(p1);
		        var b=map.pixelToPoint(p2);
		        //console.log(a);
		        dValue[0]=Math.abs(b.lng-a.lng);
		        dValue[1]=Math.abs(b.lat-a.lat);
		        //console.log(dValue);
		        return dValue;
			},
			getDistance:function(point,points){
				var pointA = new BMap.Point(point[0],point[1]);
				var pointB = new BMap.Point(points[0],points[1]);
				var dis=map.getDistance(pointA,pointB)
				return dis;
			},
			idw:function(point){
				var wi;
				var dis;
				var zi;
				var sumwi=0;
				var sumzi=0;
				var points=[[117.0006238,36.66948298],[117.001525,36.69350392],[117.2119566,36.79560411],[116.7744603,36.55667634],[117.0649759,36.6885423],[116.998345,36.64303627],[116.8784,36.4814],[117.0049,36.61202]];
				var data=[95,96,90,53,63,62,54,54];//测试数据,后期换成动态数据
				for(var i=0;i<points.length;i++){
					dis=this.getDistance(point,points[i]);
					wi=1/(Math.pow(dis,2));
					zi=wi*data[i];
					sumwi=sumwi+wi;
					sumzi=sumzi+zi;
				}
				var pm25=sumzi/sumwi;
				sumzi=0;
				sumwi=0;
				return pm25;
			},
			doIdw:function(min_maxCoordinate){
				dValue=this.getDvaule();
				var minlng=min_maxCoordinate.min[0];
				var minLat=min_maxCoordinate.min[1];
				var maxlng=min_maxCoordinate.max[0];
				var maxLat=min_maxCoordinate.max[1];
				//console.log(minLat);
				//console.log(maxLat);
				var lng=[];
				var lat=[];
				var pointsData=[];
				var idwData=[];
				var heatmapData=[];
				var dlng=dValue[0];
				var dlat=dValue[1];
				var a=[];
				while(minlng<maxlng){
					minlng+=dlng;
					lng.push(minlng);
				}
				while(minLat<maxLat){
					minLat+=dlat;
					lat.push(minLat);
				}
				//console.log(lng);
				//console.log(lat);
				for(var i=0;i<lng.length;i++){
					for(var j=0;j<lat.length;j++){
						if(this.IsPtInPoly([lng[i],lat[j]],coordinates)){
							idwData.push(this.idw([lng[i],lat[j]]));
							pointsData.push([lng[i],lat[j]]);
							//heatmapData.push([lng[i],lat[i],this.idw([lng[i],lat[j]])]);
						}	
					}
				}
				this.heatmap(idwData,pointsData);
			},
			normalization:function(data){
				var max=data[0];
				var min=data[0];
				for(var i=0;i<data.length;i++){
					if(data[i]>max){
						max=data[i];
					}
					if(data[i]<min){
						min=data[i];
					}
				}
				var a=max-min;
				for(var i=0;i<data.length;i++){
					data[i]=(data[i]-min)/a+0.2;

				}
				return data;
			},
			heatmap:function(idwData,pointsData){
				var a=this.normalization(idwData);
				//console.log(idwData.length);
				//console.log(a.length);
				//alert(radius);
				//console.log(radius);
				//console.log(a  );
				//console.log(pointsData);
				if(!isSupportCanvas()){
		    		alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
			    }
			    var points=[];
			    var point={};
				//详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
				//参数说明如下:
				/* visible 热力图是否显示,默认为true
			     * opacity 热力的透明度,1-100
			     * radius 势力图的每个点的半径大小   
			     * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
			     *	{
						.2:'rgb(0, 255, 255)',
						.5:'rgb(0, 110, 255)',
						.8:'rgb(100, 0, 255)'
					}
					其中 key 表示插值的位置, 0~1. 
					    value 为颜色值. 
			     */
			    for(var i=0;i<a.length;i++){
			    	point={"lng":pointsData[i][0],"lat":pointsData[i][1],"count":a[i]};
			    	points.push(point);
			    }
			    console.log(points);
				map.addOverlay(heatmapOverlay);
				heatmapOverlay.setDataSet({data:points,max:1.2});
				setGradient();
				//显示热力图
			    //heatmapOverlay.show();
			    function setGradient(){
			     	/*格式如下所示:
					{
				  		0:'rgb(102, 255, 0)',
				 	 	.5:'rgb(255, 170, 0)',
					  	1:'rgb(255, 0, 0)'
					}*/
			     	var gradient = {
			     		.1:'rgb(0,255,255)',
			     		.2:'rgb(0,153,255)',
			     		.3:'rgb(0,51,255)',
			     		.4:'rgb(15,240,0)',
				  		.5:'rgb(102, 255, 0)',
				 	 	.6:'rgb(204,255,0)',
				 	 	.7:'rgb(255,255,0)',
				 	 	.8:'rgb(255,153,0)',
				 	 	.9:'rgb(255,102,0)',
					};
			     	var colors = document.querySelectorAll("input[type='color']");
			     	colors = [].slice.call(colors,0);
			     	colors.forEach(function(ele){
						gradient[ele.getAttribute("data-key")] = ele.value; 
			     	});
			        heatmapOverlay.setOptions({"gradient":gradient});
			    }
				//判断浏览区是否支持canvas
			    function isSupportCanvas(){
			        var elem = document.createElement('canvas');
			        return !!(elem.getContext && elem.getContext('2d'));
			    }
			}
		}
		function visualmap(){
			var myChart = echarts.init(document.getElementById('visualmap'));
			myChart.setOption(option = {
		        visualMap: {
		            min: 54,
		            max: 96,
		            text:['High','Low'],
		            realtime: false,
		            calculable: true,
		            inRange: {
		                color: ['lightskyblue','yellow', 'orangered']
		            }
		        }   
    		});
		}
		
		mapFunc.initMap();
		initCountEcharts()
		getEchartData();

