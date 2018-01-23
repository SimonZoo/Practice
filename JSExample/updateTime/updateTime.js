function retime(argument) {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	var mintue = now.getMinutes();
	var second = now.getSeconds();
	var nowTime = year + "年" + month + "月" + day + "日" + hour + "时" + mintue + "分" + second + "秒";
	document.getElementById("time").innerHTML = nowTime;

}
setInterval("retime()",1000);
//每一秒调用该函数，稍微好一点
