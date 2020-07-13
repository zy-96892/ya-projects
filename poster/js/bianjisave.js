//绘制图片
		var canvas = document.getElementsByTagName('canvas');
		console.log(canvas[1]);
		var ctx = canvas[1].getContext('2d');
		//绑定下载事件
		var btn = document.getElementById('savebtn1');
		btn.onclick = function () {
		    var type = 'png';
		    download(type);
		}
		document.getElementById('savebtn2').onclick = function () {
		    var type = 'jpg';
		    download(type);
		}
		//图片下载操作,指定图片类型
		function download(type) {
		    //设置保存图片的类型
		    var imgdata = canvas[1].toDataURL(type);
		    //将mime-type改为image/octet-stream,强制让浏览器下载
		    var fixtype = function (type) {
		        type = type.toLocaleLowerCase().replace(/jpg/i, 'jpeg');
		        var r = type.match(/png|jpeg|bmp|gif/)[0];
		        return 'image/' + r;
		    }
		    imgdata = imgdata.replace(fixtype(type), 'image/octet-stream');
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

		// var canvas = document.getElementById('merge');
		// // var canvas = document.getElementsByClassName('upper-canvas');
		// var ctx = canvas.getContext('2d');
		// ctx.fillRect(0, 0, canvas.width, canvas.height);
		// ctx.fillStyle = "red";
		// ctx.font = 'italic bold 30px Helvetica ';
		// ctx.fillText('楷体', 50, 50);
		// //绑定下载事件
		// var btn = document.getElementById('savebtn1');
		// btn.onclick = function () {
		//     var type = 'png';
		//     download(type);
		// }
		// document.getElementById('savebtn2').onclick = function () {
		//     var type = 'jpg';
		//     download(type);
		// }
		// //图片下载操作,指定图片类型
		// function download(type) {
		//     //设置保存图片的类型
		//     var imgdata = canvas.toDataURL(type);
		//     //将mime-type改为image/octet-stream,强制让浏览器下载
		//     var fixtype = function (type) {
		//         type = type.toLocaleLowerCase().replace(/jpg/i, 'jpeg');
		//         var r = type.match(/png|jpeg|bmp|gif/)[0];
		//         return 'image/' + r;
		//     }
		//     imgdata = imgdata.replace(fixtype(type), 'image/octet-stream')
		//     //将图片保存到本地
		//     var saveFile = function (data, filename) {
		//         var link = document.createElement('a');
		//         link.href = data;
		//         link.download = filename;
		//         var event = document.createEvent('MouseEvents');
		//         event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		//         link.dispatchEvent(event);
		//     }
		//     var filename = new Date().toLocaleDateString() + '.' + type;
		//     saveFile(imgdata, filename);
		// }