

var canvas = document.getElementById('canvas');
var canvas2 = document.getElementById('canvas2');
var canvas3 = document.getElementById('canvas3');
var ctx    = canvas.getContext('2d');
var video  = document.getElementById('video');
var button  = document.getElementById('buttonPause');
var ctx2 = canvas2.getContext('2d');
var ctx3 = canvas3.getContext('2d');

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
    ctx2.drawImage(video, 0, 0,400,300);
 })
  video.addEventListener('play', function() {
    var $this = this; //cache
    (function loop() {
      if (!$this.paused && !$this.ended) {
        ctx.drawImage($this, 0, 0,400,300);
        ctx3.drawImage($this, 0, 0, 130, 149, 0, 0, 130, 149);
        ctx3.drawImage($this, 133, 0, 130, 149, 133, 0, 130, 149);
        ctx3.drawImage($this, 266, 0, 130, 149, 266, 0, 130, 149);
        ctx3.drawImage($this, 0, 150, 130, 149, 0, 150, 130, 149);
        ctx3.drawImage($this, 133, 150, 130, 149, 133, 150, 130, 149);
        ctx3.drawImage($this, 266, 150, 130, 149, 266, 150, 130, 149);
        setTimeout(loop, 1000 / 30); // drawing at 30fps 
        }
    })();
  }, 0);

  