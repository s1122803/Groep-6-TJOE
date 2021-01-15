window.onload = () =>{
  const places = document.getElementsByClassName('js--place');
  const camera = document.getElementById('js--camera');

  let pickups = document.getElementsByClassName('js--pickup');
  let hold = null;

  const placeholders = document.getElementsByClassName('js--placeholder');
  let scene = document.getElementById('js--scene');

  function addListeners() {
    for (let i = 0; i < pickups.length; i++) {
      pickups[i].addEventListener('click', function(evt){

        let cameraX = camera.getAttribute('position').x;
        let cameraZ = camera.getAttribute('position').z;
        let destinationX = this.getAttribute('position').x;
        let destinationZ = this.getAttribute('position').z;
        let distance = Math.sqrt(((cameraX - destinationX) * (cameraX - destinationX)) + ((cameraZ - destinationZ) * (cameraZ - destinationZ)));

        if (hold == null && distance <= 6) {
          camera.innerHTML += '<a-box id="js--hold" class="js--pickup js--interact" color="green" position="1 -1 -1"></a-box>';
          hold = "box";
          this.remove();
        }
      });
    }
  }

  addListeners();

  for (let i = 0; i < placeholders.length; i++) {
    placeholders[i].addEventListener('click', function(evt){
      let cameraX = camera.getAttribute('position').x;
      let cameraZ = camera.getAttribute('position').z;
      let destinationX = this.getAttribute('position').x;
      let destinationZ = this.getAttribute('position').z;
      let distance = Math.sqrt(((cameraX - destinationX) * (cameraX - destinationX)) + ((cameraZ - destinationZ) * (cameraZ - destinationZ)));

      if (hold == "box" && distance <= 6){
        let box = document.createElement('a-box');
        box.setAttribute("class", "js--pickup js--interact");
        box.setAttribute("color", "green");
        box.setAttribute("position", {x: this.getAttribute('position').x, y:"0.5", z: this.getAttribute('position').z});
        scene.appendChild(box);
        document.getElementById("js--hold").remove();
        addListeners();
        hold = null;
      }
    });
  }







  for (let i = 0; i < places.length; i++) {
    places[i].addEventListener('click', function(evt){
      let att = document.createAttribute("animation");

      let cameraX = camera.getAttribute('position').x;
      let cameraZ = camera.getAttribute('position').z;
      let destinationX = this.getAttribute('position').x;
      let destinationZ = this.getAttribute('position').z;
      // let distanceX = (cameraX - destinationX) * (cameraX - destinationX);
      // let distanceZ = (cameraZ - destinationZ) * (cameraZ - destinationZ);
      // let distance = Math.sqrt(distanceX + distanceZ);
      let distance = Math.sqrt(((cameraX - destinationX) * (cameraX - destinationX)) + ((cameraZ - destinationZ) * (cameraZ - destinationZ)));
      let duration = distance / 4 * 1000;
      console.log(duration);
      att.value = "property: position; easing: linear; dur: " + duration + "; to: " + this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
      camera.setAttribute('animation', att.value);
    });
  }
};
