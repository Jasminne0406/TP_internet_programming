

var canvas = document.getElementById('canvas');
var canvas2 = document.getElementById('canvas2');
var ctx    = canvas.getContext('2d');
var video  = document.getElementById('video');
var button  = document.getElementById('buttonPause');

navigator.mediaDevices.getUserMedia({
    audio:false,
    video: true
}).then((stream) => {
    video.srcObject = stream;
}).catch((err) => {
    console.log('navigator.MediaDevices.getUserMedia error: ',err.message,err.name);
});
 button.addEventListener('click',function(e){
    canvas.hidden = true;
    canvas2.hidden = false;
    video.pause();
    let ctx = canvas2.getContext('2d');
    ctx.drawImage(video, 0, 0,400,300);
 })
  video.addEventListener('play', function() {
    var $this = this; //cache
    (function loop() {
      if (!$this.paused && !$this.ended) {
        ctx.drawImage($this, 0, 0,400,300);
        setTimeout(loop, 1000 / 30); // drawing at 30fps
      }
    })();
  }, 0);

  