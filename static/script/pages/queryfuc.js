$.get('/ajax/query',function(d){
	var vm=new Vue({
		el:'popup-content',
		data:{
			at_data:[]
		},
		methods:{
			getActualData:function(cityname){
				for(var i=0;i<d.rows;i++ ){
					if(d.rows[i].city==cityname){
						this.at_data[0]=d.rows[i].city;
						this.at_data[1]=d.rows[i].aqi;
						this.at_data[2]=d.rows[i].pm25;
					}
				}
			}
		}
	})
},'json')