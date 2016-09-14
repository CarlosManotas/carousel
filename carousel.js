(function(){


		var carousel = document.getElementById('carousel-mts');
        var anchoPantalla = window.innerWidth;
        var son = carousel.children;
        var index = 0;
        var index2 = 1;
        
        setTimeout(function () {
            var wli = carousel.children.item(1).clientWidth;
            if (anchoPantalla > 1200) {
                anchoPantalla = 1200;
            }
            var marge = setInterval(function () {
                var son2 = son.item(index);
                var margenActual = window.getComputedStyle(son2)['margin-left'].replace('px', '');
                var nuevoMargen = Number(margenActual - wli);
                son2.setAttribute('style', 'margin-left:' + nuevoMargen + 'px');
            }, 1500);
        }, 10);

        setTimeout(function () {
            var order = setInterval(function () {
                var sonmas = son.item(index);
                var newEstado = sonmas.setAttribute('style', 'order:' + index2);
                index++;
                index2++;
                if (index >= son.length) {
                    index = 0;
                }
            }, 1500);
        }, 1000);

})();


