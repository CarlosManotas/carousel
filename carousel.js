(function(){
	var numberListView,
			widthAndMargin,
	    index = 0,
	    index2 = 1,
			screenWidth = window.innerWidth,
			carousel = document.getElementById('carousel-mts'),
	    listImg = carousel.children;

	if(screenWidth<=320){
		numberListView = 1;
		widthAndMargin = screenWidth;
	}else if (screenWidth>320&&screenWidth<=480) {
		numberListView = 2;
		widthAndMargin = screenWidth / 2;
	}else if (screenWidth>480&&screenWidth<=768) {
		numberListView = 3;
		widthAndMargin = screenWidth / 3;
	}else if (screenWidth>768&&screenWidth<1200) {
		numberListView = 4;
		widthAndMargin = screenWidth / 4;
	}else if (screenWidth>1200) {
		screenWidth = 1200;
		numberListView = 5;
		widthAndMargin = screenWidth / 5;
	}


	function order(){
		var newArray = Array.from(listImg);
		newArray.map(function(value){
			return value.setAttribute('style',`min-width:${widthAndMargin}px;`)
		})
		return setInterval(function(){
			var itemImgOrder = listImg.item(index);
			var fowardItemMargin ;
			var newMargin = -(widthAndMargin);
			if(index === listImg.length-1){
				fowardItemMargin = listImg.item(0);
			}else{
				fowardItemMargin = listImg.item(index + 1);
			}
			fowardItemMargin.setAttribute('style', `margin-left:${newMargin}px; min-width:${widthAndMargin}px;`);
			itemImgOrder.setAttribute('style',`margin-left:0;min-width:${widthAndMargin}px;order:${index2}`);
			index+=1;
			index2+=1;
			if (index >= listImg.length) {
					index = 0;
			}
		}, 2000);
	};

	order();
})();
