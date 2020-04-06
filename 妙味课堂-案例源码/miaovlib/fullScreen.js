启动全屏模式 

可以通过Fullscreen API中的requestFullScreen方法来实现。由于该方法还未标准化，因此还需要加上特定浏览器前缀。 

// 找到正确的方法
function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

// 启动全屏模式
launchFullScreen(document.documentElement); // 整个页面
launchFullScreen(document.getElementById("videoElement")); // 单独元素

取消全屏模式 

可以使用cancelFullScreen方法（也需要加上前缀）从全屏模式恢复到标准模式。 

function cancelFullscreen() {
  if(document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
}

// 取消全屏
cancelFullscreen();

需要注意的是，cancelFullScreen只被文档对象调用，无需单个元素调用。 

全屏属性和事件 

document.fullScreenElement：当前全屏显示的元素。
document.fullScreenEnabled：判断浏览器是否支持全屏。
fullscreenchange事件：全屏状态改变事件。
fullscreenchange事件要绑定在document上，该事件仅在全屏状态改变时触发，默认没有任何动作。 

var fullscreenElement = document.fullScreenElement || document.mozFullScreenElement || document.webkitFullScreenElement;
var fullscreenEnabled = document.fullScreenEnabled || document.mozScreenEnabled || document.webkitScreenEnabled;

全屏CSS 

全屏效果的CSS代码： 

/* html */
:-webkit-full-screen {
  background: pink;
}
:-moz-full-screen {
  background: pink;
}

/* deeper elements */
:-webkit-full-screen video {
  width: 100%;
  height: 100%;
}