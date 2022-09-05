window.onload = function () {
	var video = document.querySelectorAll("video[type='Illusory_3D']");
	window.token;
	video.forEach(function (video) {
		video.addEventListener("mousedown", (event) => {
			if (event.pageX > video.offsetWidth / 2) {
				if (video.currentTime > video.duration / 2) video.currentTime = (video.duration) - video.currentTime;
				window.token = setInterval(function () { if (video.currentTime > video.duration / 2) video.currentTime = 0; }, 1);
				video.play();
			} else if (event.pageX < video.offsetWidth / 2) {
				if (video.currentTime < video.duration / 2) video.currentTime = (video.duration) - video.currentTime;
				window.token = setInterval(function () { if (video.currentTime == video.duration) { video.currentTime = (video.duration / 2); } }, 1);
				video.play();
			}
		});
		video.addEventListener("mouseup", (event) => { clearInterval(token); video.pause(); });
		video.addEventListener("touchstart", (event) => {
			if (event.touches[0].pageX > video.offsetWidth / 2) {
				if (video.currentTime > video.duration / 2) video.currentTime = (video.duration) - video.currentTime;
				window.token = setInterval(function () { if (video.currentTime > video.duration / 2) video.currentTime = 0; }, 1);
				video.play();
			} else if (event.touches[0].pageX < video.offsetWidth / 2) {
				if (video.currentTime < video.duration / 2) video.currentTime = (video.duration) - video.currentTime;
				window.token = setInterval(function () { if (video.currentTime == video.duration) { video.currentTime = (video.duration / 2); } }, 1);
				video.play();
			}
		});
		video.addEventListener("touchend", (event) => { clearInterval(token); video.pause(); });
		video.addEventListener("mouseleave", (event) => { clearInterval(token); video.pause(); })
	});
}
