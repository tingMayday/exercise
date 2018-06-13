$(function() {
	// $.fn.extend({
	// 	show3D: function(){
	// 			show3D();
	// 	},
	// })
	// var show3D = function(){

	// }
	var showCon = $('#show');
		item = showCon.find('.list li'),
		isClick = false,
		curIndex = 0,
		curX = 0;
		curShow = setInterval(function(){
			item.eq(curIndex).siblings().removeClass('current').end().addClass('current');
			curIndex++;
			if(curIndex > 50){
				curIndex = 0;
			}
		},50);
	
	showCon.on('click',function(e){
		console.log(isClick);
		if(isClick == false){
			clearInterval(curShow);
			curX=e.pageX - this.offsetLeft;
			isClick = true;
		}else{
			curShow = setInterval(function(){
				item.eq(curIndex).siblings().removeClass('current').end().addClass('current');
				curIndex++;
				if(curIndex > 50){
					curIndex = 0;
				}
			},50);
			isClick = false;
		}
	})
	item.on('mousemove',function(e) {
		if(isClick == true){
			changeImage(e.pageX - this.offsetLeft)
		}
	})

	function changeImage(newX) {
        if (curX - newX > 25 ) {
            curX = newX;
            curIndex++
            item.eq(curIndex).siblings().removeClass('current').end().addClass('current');
            if(curIndex > 50){
				curIndex = 0;
			}
        } else if (curX - newX < -25) {
            curX = newX;   
            curIndex--;        
            item.eq(curIndex).siblings().removeClass('current').end().addClass('current');
        }
        
    }

})