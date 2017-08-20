function AJAX(url,fnSuccess, fnError) {
	var theAJAX = XMLHttpRequest();
	theAJAX.open('GET', url, true);//open(方法，文件名，异步传输)
	theAJAX.send();//发送请求
	//接收返回
	theAJAX.onreadystatechange = function(){
		if (theAJAX.readyState == 4) {
			if (theAJAX.status == 200) {
				fnSuccess(theAJAX.responseText);
			}else {
				if (fnError) fnError(theAJAX.status);
			}
		}
	};
}