window.onload = function () {
		//在浏览器页面上移动，吸附效果
		var aBox = document.getElementById('box');
		aBox.onmousedown = function(e) {
			var e = e || event;
			var disX = e.clientX - aBox.offsetLeft;
			var disY = e.clientY - aBox.offsetTop;
			
			document.onmousemove = function(e) {
				var e = e || event;
				var l = e.clientX - disX;
				var t = e.clientY - disY;
				if (l < 80 ) {
					l = 0;
				} else if (l > document.documentElement.clientWidth - aBox.offsetWidth) {
					l = document.documentElement.clientWidth - aBox.offsetWidth;
				}
				if (t < 0 ) {
					t = 0;
				} else if (t > document.documentElement.clientHeight - aBox.offsetHeight) {
					t = document.documentElement.clientHeight - aBox.offsetHeight;
				}
				aBox.style.left = l + 'px';
				aBox.style.top = t + 'px';

				document.onmouseup = function() {
					document.onmousemove = null;
					document.onmouseup = null;
				}
				return false;
			}
		}
		//在指定的边框中移动
		var bBox = document.getElementById('littleBox');
		var bWindow = document.getElementById('littleWindow');
		bBox.onmousedown = function(e) {
			var e = e || event;
			var disX = e.clientX - bBox.offsetLeft;
			var disY = e.clientY - bBox.offsetTop;
			//给document加事件，以免鼠标移动太快滑出div
			// IE下可以对div加事件后用setCapture捕获事件，使得页面所有的事件集中在div上，此时移动div也不会选中文字
			document.onmousemove = function(e) {
				var e = e || event;
				var l = e.clientX - disX;
				var t = e.clientY - disY;
				if (l < 0) {
					l = 0;
				} else if (l > bWindow.offsetWidth - bBox.offsetWidth) {
					l = bWindow.offsetWidth - bBox.offsetWidth;
				}
				if (t < 0) {
					t = 0;
				} else if (t > bWindow.offsetHeight - bBox.offsetHeight) {
					t = bWindow.offsetHeight - bBox.offsetHeight;
				}
				bBox.style.left = l + 'px';
				bBox.style.top = t + 'px';

				document.onmouseup = function() {
					document.onmousemove = null;
					document.onmouseup = null;
				}
			}
			return false;//阻止移动时选中文字,Chrome/FF/IE9,低版本浏览器要用事件绑定
		}
		//带虚线边框的移动
		var cBox = document.getElementById('boxWithBorder');
		cBox.onmousedown = function(e) {
			var e = e || event;
			var disX = e.clientX - cBox.offsetLeft;
			var disY = e.clientY - cBox.offsetTop;
			//创建边框
			var boxBorder = document.createElement('div');
			boxBorder.className = 'boxBorder';
			boxBorder.style.height = cBox.offsetHeight + 'px';
			boxBorder.style.width = cBox.offsetWidth + 'px';
			boxBorder.style.left = cBox.offsetLeft + 'px';
			boxBorder.style.top = cBox.offsetTop + 'px';
			document.body.appendChild(boxBorder);//插入到DOM中，不然看不见

			document.onmousemove = function(e) {
				var e = e || event;
				var l = e.clientX - disX;
				var t = e.clientY - disY;
				if (l < 0 ) {
					l = 0;
				} else if (l > document.documentElement.clientWidth - boxBorder.offsetWidth) {
					l = document.documentElement.clientWidth - boxBorder.offsetWidth;
				}
				if (t < 0 ) {
					t = 0;
				} else if (t > document.documentElement.clientHeight - boxBorder.offsetHeight) {
					t = document.documentElement.clientHeight - boxBorder.offsetHeight;
				}
				boxBorder.style.left = l + 'px';
				boxBorder.style.top = t + 'px';

				document.onmouseup = function() {
					document.onmousemove = null;
					document.onmouseup = null;
					cBox.style.left = boxBorder.offsetLeft + 'px';
					cBox.style.top = boxBorder.offsetTop + 'px';
					document.body.removeChild(boxBorder);
				}
				return false;
			}
		}
	}