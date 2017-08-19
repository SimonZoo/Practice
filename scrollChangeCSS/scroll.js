window.onload = function () {
	var parent = document.getElementById('parent');
	var k = document.getElementById('kid');
	var box = document.getElementById('box');
	box.style.marginLeft = window.innerWidth / 2 + 'px';
	
	k.onmousedown = function(e) {
		var e = e || event;
		document.onmousemove = function(e) {
			var e = e || event;
			var disKid = e.clientX - parent.offsetLeft;
			if (disKid < 0) disKid = 0;
			else if (disKid > parent.offsetWidth - k.offsetWidth)
				disKid = parent.offsetWidth - k.offsetWidth;
			k.style.left = disKid + 'px';
			var x = disKid / (parent.offsetWidth - k.offsetWidth);
			box.style.opacity = 1 - x;//改变透明度
			// box.style.height = x * 300 + 'px';
			// box.style.width = x * 300 + 'px';
			//也可以改变大小，具体样式自选
		};
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		}
		return false;

	};	
};