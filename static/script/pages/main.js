
var layer = new ol.layer.Vector({
	    source: new ol.source.Vector()
	  });

//添加气泡
function addPopup(data,scale){
	var popupstyle=new ol.style.Style({
		image:new ol.style.Icon({
			src:'/static/img/icon.png',
			scale:map.getView().getZoom()/scale
		})
	});
	for(var i=0;i<data.length;i++)
	{
		var anchor=new ol.Feature({
			geometry: new ol.geom.Point(ol.proj.transform([data[i].lon, data[i].lat],'EPSG:4326','EPSG:3857')),
			name:data[i].name
		});
		anchor.setStyle(popupstyle);
		layer.getSource().addFeature(anchor);

	}
}