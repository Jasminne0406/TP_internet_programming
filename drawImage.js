let imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change',function(e){
    if(e.target.files) {
        let imageFile = e.target.files[0]; //here we get the image file
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onloadend = function (e) {
          var myImage = new Image(); // Creates image object
          myImage.src = e.target.result; // Assigns converted image to image object
          myImage.onload = function(ev) {
            var myCanvas = document.getElementById("box"); // Creates a canvas object
            var myContext = myCanvas.getContext("2d"); // Creates a contect object
            myContext.drawImage(myImage,0,0,300,300); // Draws the image on canvas
            let imgData = myCanvas.toDataURL("image/jpeg",0.75); 
          }
        }
      }
    });