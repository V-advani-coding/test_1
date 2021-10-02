var loadFile = function(event) {
    var image = document.getElementById('output');
    console.log('Hi')
    image.src = URL.createObjectURL(event.target.files[0]);
    console.log(image.src);
    
  }