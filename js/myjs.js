$(function(){
	$('.input1').click(function(){
		$('.label-1').css({"top":15,"left":0,"color":"#fff","font-size":12});
	});
	$('.input2').click(function(){
		$('.label-2').css({"top":90,"left":0,"color":"#fff","font-size":12});
		});
	//账号信息的修改
	$('.zhanghao-button a').click(function(){
		$('.xiugai-content').show();
	});
	$('.x button').click(function(){
		$('.xiugai-content').hide();
		$('.zhanghao-content').show();
	});
	//注册保存的点击事件 并且跳转至账号信息
	$(".xiugai-button a").click(function(){
	    var nicheng = $('#nicheng').val();
		console.log(nicheng);
		$('.xiugai-content').hide();
		$('.zhanghao-content').show();
		$('.zhanghao-nicheng input').attr('placeholder',nicheng);
		$('.zhanghao-chengshi input').attr('placeholder',$('.xiugai-chengshi input').val());
		$('.zhanghao-xingbie input').attr('placeholder',$(".xiugai-xingbie input[type='radio']:checked").val());
	});
	//作品查询页面
	$('.head-button').click(function(){
		var v = $('.head-input').attr('value');
		if(v == '足迹' || v == '热门分类'){
			$('.biaodan-1').show();
		}else{
			if(v == '教学' || v == '教育宣传'){
				$('.biaodan-2').show();
			}else{
				if(v == '板报' || v == '图书宣传'){
					$('.biaodan-3').show();
				}else{
					alert('您输入的内容不存在')
				}
			}
		}
	});
	//标签页的控制
	$('#home').click(function(){
		$('.modeshop').hide();
		$('.perdonalcenter').hide();
		$('.shouye').show();
		$('#home').addClass("active")
		$('#modeshop').removeClass("active")
		$('#perdonalcenter').removeClass("active")
	});
	$('#modeshop').click(function(){
		$('.shouye').hide();
		$('.perdonalcenter').hide();
		$('.modeshop').show();
		$('#modeshop').addClass("active")
		$('#perdonalcenter').removeClass("active")
		$('#home').removeClass("active")
	});
	$('#perdonalcenter').click(function(){
		$('.shouye').hide();
		$('.modeshop').hide();
		$('.perdonalcenter').show();
		$('#perdonalcenter').addClass("active")
		$('#modeshop').removeClass("active")
		$('#home').removeClass("active")
	});
	
	})