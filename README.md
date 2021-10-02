# Вступление
Я заинтересовался возможностью реализации управления трехмерными объектами при помощи обычного video и js.<br>
Плод моей работы вы можете лицезреть здесь.

# Быстрый старт
Для начала работы вам необходимо заранее иметь видео с прокруткой трехмерного объекта.<br>
Для этого необходимо сделать анимацию прокрутки на 360 градусов и обратно,
после чего необходимо склеить 2 видео в одно.
В итоге у вас должно получится видео где одной половине видео объект вращается вправо до упора, и аналогично влево.<br>
__Пример видео вы можете увидеть в репозитории (video.mp4)__<br>
Необходимо создать в ```<body>``` видео.
```html
<video id="videoPlayer" src="./video.mp4"></video>
```
Для удобства присвоим id
____
А далее довольно простой JavaScript код
```js
var video = document.getElementById("videoPlayer");
var token;
video.onmousedown = function(event) {
  token = setInterval(function () {
    if (event.pageX > video.offsetWidth / 2) {
      if (video.currentTime > video.duration / 2) video.currentTime = video.duration - video.currentTime;
      video.play();
    } else if (event.pageX < video.offsetWidth / 2) {
      if (video.currentTime < video.duration / 2) video.currentTime = video.duration - video.currentTime;
      video.play();
  }}, 10);
  video.onmouseup = function() {
    clearInterval(token);
    video.pause();
    video.onmouseup = null;
  };
}
```
___
__Если у вас есть идеи как улучшить этот проект то я всегда рад новым предложениям :)__
