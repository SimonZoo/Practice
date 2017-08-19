var topNav = document.getElementById("nav");
var scrollFunc = function(e) {
	var e = e || window.event;
	var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
	//兼容性
	if (scrollTop > 40) topNav.style.backgroundColor = '#CCC';
	else topNav.style.backgroundColor = 'white';
}
window.onmousewheel = document.onmousewheel = scrollFunc;
