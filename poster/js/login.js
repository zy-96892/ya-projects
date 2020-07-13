$(function(){
	// 点击x隐藏登录页面
	$('.bi').click(function(){
		$('.login-cover').hide();
	});
	// 点击登录弹出登录界面
	$('#header-login').click(function(){
		$('.login-cover').show();
	});
	
})
function loginbtn(regloginform) {
	console.info("进入ajax 登陆")
	//把username记录下来
	sessionStorage.setItem("USERNAME",document.getElementById("username").value);
	
			//用户名密码验证完成 直接ajax到后台登陆
			// alert("账户"+regloginform.username.value);
			// alert("密码"+regloginform.pwd.value);
			var param = "http://localhost:8087/user/login?username=" + regloginform.username.value + "&password=" + regloginform.pwd.value;
			// alert("访问路径是:"+param);
			$.ajax({
				url: param,
				type: "post",
				dataType: "json",
				contentType: 'application/json;charset=UTF-8',
				success: function(data) {
					if (data.code == -1) {
						alert("您输入的账户或者密码有误！");
						return false;
					} 
					alert("登录成功");
					window.location.href = "http://127.0.0.1:8848/海报生成/index2.html";
				},
				error:function(){
					alert("交互失败！请检查服务器")
				}
				
			});
			
			console.info("完成");
			
		}
		
		function regbtn(regloginform) {
			
			console.info("进入ajax 注册")
					//用户名密码验证完成 直接ajax到后台登陆
					var param = "http://localhost:8087/user/add?username=" + regloginform.username.value + "&password=" + regloginform.pwd.value;
					$.ajax({
						url: param,
						type: "get",
						dataType: "json",
						contentType: 'application/json;charset=UTF-8',
						success: function(data) {
							if (data.code == -1) {
								alert("您注册有误！");
								return false;
							} else {
								alert("注册成功");
								alert(data.msg);
								window.location.href = "http://127.0.0.1:8848/海报生成/index.html";
							}
						},
						error:function(){
							alert("注册失败误！");
						}
					});
					// alert("完成");
				}

