window.onload = function()
{
	waterfall('main','box');
	var dataInt = {
		"data":[{"src":'0.jpg'},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"}]
	}
	window.onscroll = function()
	{
		if (checkScollSlide()) {
			var oParent = document.getElementById('main');
			//将数据块渲染到当前页面的尾部
			for (var i = 0; i < dataInt.data.length; i++) {
				var oBoxs = document.creatElement('div');
				oBoxs.className = 'box';
				oParent.appendChild(oBoxs);
				var oPic = document.creatElement('div');
				oPic.className = 'oPic';
				oBoxs.appendChild(oPic);
				var oImg = document.creatElement('img');
				oImg.src = "img/" + dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterfall('main','box');
		}
	}
}

function waterfall(parent,box)
{
	//将main的所有class为box的元素取出来
	var oParent = document.getElementById(parent);
	var oBox = document.getElementsByClassName(box);
	//计算整个页面显示的列数（页面宽/box的宽）
	var oBoxW = oBox[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth/oBoxW)
	//设置main的宽度
	oParent.style.cssText = 'width:' + oBoxW*cols + 'px; margin: 0 auto';

	var hArr = [];  //存放每一列的高度
	for (var i = 0; i < oBox.length; i++) {
		if (i < cols) {
			hArr.push(oBox[i].offsetHeight);
		}
		else
		{
			var minH = Math.min.apply(null,hArr);
			var index = getMinhIndex(hArr,minH);
			oBox[i].style.position = "absolute";
			oBox[i].style.top = minH + 'px';
			oBox[i].style.left = oBox[index].offsetLeft + 'px';
			hArr[index] += oBox[i].offsetHeight;
		}
	}
}

//根据getByClass获取元素
function getByClass(parent,clsName)
{
	var boxArr = new Array(),  //用来存储获取到的所有class为box的元素
	oElemenets = parent.getElementsByTagName('*');
	for (var i = 0; i <= oElemenets.length; i++) {
		if (oElemenets[i].className = clsName) {
			boxArr.push(oElemenets[i]);
		}
	}
	return boxArr;
}

function getMinhIndex(arr,val)
{
	for(var i in arr){
		if (arr[i] == val) {
			return i;
		}
	}
}

//检测是否具备加载数据块的条件
function checkScollSlide()
{
	var oParent = document.getElementById('main');
	var oBox = document.getElementsByClassName('box');
	var lastBoxH = oBox[oBox.length-1].offsetTop + Math.floor(oBox[oBox.length-1].offsetHeight/2);
	var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
	var height = document.body.clientHeight||document.documentElement.clientHeight;
	return(lastBoxH < scrollTop + height)?ture:false;
}