$(function(){
	var myCanvas = document.querySelector('canvas');
	var ctx = myCanvas.getContext('2d');
	var image = new Image();
	var image1 = new Image();
	ctx.globalCompositeOperation = 'destination-over';
	image1.onload = function(){
		//实现logo绘制
	ctx.drawImage(image1,20,500,180,180);
	}
	image1.src = 'img/details-logo.png';
	image.onload = function(){
		//实现图片绘制
		ctx.drawImage(image,0,0,myCanvas.width,myCanvas.height/2.5);
	}
	image.src = 'img/haibao.jpg';
	ctx.globalCompositeOperation = 'destination-over';
	ctx.fillStyle = '#C87756'
	ctx.font = '30px webfontzk';
	ctx.fillText("11月20日",0,myCanvas.height/2.5 + 30);
	ctx.beginPath();
	ctx.fillStyle = '#C87756'
	ctx.font = '50px webfontzk';
	ctx.fillText("信",260,myCanvas.height/2.5 + 45);
	ctx.beginPath();
	ctx.fillStyle = '#C87756'
	ctx.font = '50px webfontzk';
	ctx.fillText("息",400,myCanvas.height/2.5 + 60);
	ctx.beginPath();
	ctx.fillStyle = '#C87756'
	ctx.font = '50px webfontzk';
	ctx.fillText("学",430,myCanvas.height/2.5 + 180);
	ctx.beginPath();
	ctx.fillStyle = '#C87756'
	ctx.font = '50px webfontzk';
	ctx.fillText("院",300,myCanvas.height/2.5 + 300);
	ctx.beginPath();
	ctx.fillStyle = '#C87756'
	ctx.font = '25px webfontzk';
	ctx.fillText("地点：东院操场",10,myCanvas.height/2.5 + 70);
	ctx.beginPath();
	ctx.fillStyle = '#C87756'
	ctx.font = '25px webfontzk';
	ctx.fillText("学校为丰富学生课外活动，增强各个社",0,myCanvas.height/2.5 + 110);
	ctx.beginPath();
	ctx.fillStyle = '#C87756'
	ctx.font = '25px webfontzk';
	ctx.fillText("团的凝聚力，展现出新时代大学生的蓬",0,myCanvas.height/2.5 + 150);
	ctx.beginPath();
	ctx.fillStyle = '#C87756'
	ctx.font = '25px webfontzk';
	ctx.fillText("勃朝气",0,myCanvas.height/2.5 + 190);
	// 点击事件
	$('#btn').click(function(){
		var myCanvas = document.querySelector('canvas');
		var ctx = myCanvas.getContext('2d');
		ctx.clearRect(0,0,400,600);
		var image = new Image();
		var image1 = new Image();
		ctx.globalCompositeOperation = 'destination-over';
		image1.onload = function(){
			//实现logo绘制
		ctx.drawImage(image1,20,500,180,180);
		}
		image1.src = 'img/details-logo.png';
		image.onload = function(){
			//实现图片绘制
			ctx.drawImage(image,0,0,myCanvas.width,myCanvas.height/2.5);
		}
		image.src = 'img/haibao.jpg';
		ctx.globalCompositeOperation = 'destination-over';
		ctx.fillStyle = $('#color').val();
		ctx.font = '30px webfontzk'
		console.log($('#text').val());
		ctx.fillText($('#text').val(),180,300);
		ctx.beginPath();
		ctx.fillStyle = '#C87756'
		ctx.font = '50px webfontzk';
		ctx.fillText($('#title-text').val(),myCanvas.height/2.5 + 60);
		ctx.beginPath();
		ctx.fillStyle = '#C87756';
		ctx.font = '50px webfontzk';
		ctx.fillText($('#call').val(),260,myCanvas.height/2.5 + 45);
		//原内容
		ctx.globalCompositeOperation = 'destination-over';
		ctx.fillStyle = '#C87756'
		ctx.font = '30px webfontzk';
		ctx.fillText("11月20日",0,myCanvas.height/2.5 + 30);
		ctx.beginPath();
		ctx.fillStyle = '#C87756'
		ctx.font = '50px webfontzk';
		ctx.fillText("学",430,myCanvas.height/2.5 + 180);
		ctx.beginPath();
		ctx.fillStyle = '#C87756'
		ctx.font = '50px webfontzk';
		ctx.fillText("院",300,myCanvas.height/2.5 + 300);
		ctx.beginPath();
		ctx.fillStyle = '#C87756'
		ctx.font = '25px webfontzk';
		ctx.fillText("地点：东院操场",10,myCanvas.height/2.5 + 70);
		ctx.beginPath();
		ctx.fillStyle = '#C87756'
		ctx.font = '25px webfontzk';
		ctx.fillText("学校为丰富学生课外活动，增强各个社",0,myCanvas.height/2.5 + 110);
		ctx.beginPath();
		ctx.fillStyle = '#C87756'
		ctx.font = '25px webfontzk';
		ctx.fillText("团的凝聚力，展现出新时代大学生的蓬",0,myCanvas.height/2.5 + 150);
		ctx.beginPath();
		ctx.fillStyle = '#C87756'
		ctx.font = '25px webfontzk';
		ctx.fillText("勃朝气",0,myCanvas.height/2.5 + 190);
	});
	//保存海报
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	//绑定下载事件
	var btn = document.getElementById('btn1');
	btn.onclick = function () {
	    var type = 'png';
	    download(type);
	}
	document.getElementById('btn2').onclick = function () {
	    var type = 'jpg';
	    download(type);
	}
	//图片下载操作,指定图片类型
	function download(type) {
	    //设置保存图片的类型
	    var imgdata = canvas.toDataURL(type);
	    //将mime-type改为image/octet-stream,强制让浏览器下载
	    var fixtype = function (type) {
	        type = type.toLocaleLowerCase().replace(/jpg/i, 'jpeg');
	        var r = type.match(/png|jpeg|bmp|gif/)[0];
	        return 'image/' + r;
	    }
	    imgdata = imgdata.replace(fixtype(type), 'image/octet-stream')
	    //将图片保存到本地
	    var saveFile = function (data, filename) {
	        var link = document.createElement('a');
	        link.href = data;
	        link.download = filename;
	        var event = document.createEvent('MouseEvents');
	        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	        link.dispatchEvent(event);
	    }
	    var filename = new Date().toLocaleDateString() + '.' + type;
	    saveFile(imgdata, filename);
	}
})
