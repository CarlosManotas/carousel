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

	var marge = function(){
		return setInterval(function(){
				var itemImg = listImg.item(index);
				var nuevoMargen = -(widthAndMargin);
				itemImg.setAttribute('style', 'margin-left:' + nuevoMargen + 'px; width:'+widthAndMargin+'px');
		},1500);
	};
	var order = function(){
		return setInterval(function () {
			var itemImgOrder = listImg.item(index);
			itemImgOrder.setAttribute('style', 'order:' + index2 + '; width:'+widthAndMargin+'px');
			index+=1;
			index2+=1;
			if (index >= listImg.length) {
					index = 0;
			}
		}, 1500);
	};

	setTimeout(function () {
			var newArray = Array.from(listImg);
			newArray.map((value,iterador)=>{
				value.setAttribute('style','width:'+widthAndMargin+'px');
			})
	    marge();
			setTimeout(function () {
				order();
	    }, 1000);
	}, 10);
})();
