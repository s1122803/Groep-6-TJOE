<<<<<<< HEAD
  window.onload = () => {
    const places = document.getElementsByClassName('js--place');
    const camera = document.getElementById('js--camera');
    const phone = document.getElementById('js--phone');
    const shoppinglist = document.getElementById('js--phone-shoppinglist');
    let pickups = document.getElementsByClassName('js--pickup');
    let hold = null;

    const placeholders = document.getElementsByClassName('js--placeholder');
    let scene = document.getElementById('js--scene');
    
    // Alle items en de prijzen ervan (Prijzen van de items moeten op dezeflde positie in de array staan)
    const shopItemList = ["pasta", "chips", "malse_kip", "Brood", "Banaan", "Koek", "Sla", "Groentjes"];
    const shopPriceList = [2.99, 0.99, 3.99, 1.99, 0.99, 1.49, 0.99, 1.99];
    let shoppingCartArray = ["","","","","","","",""];
    let updatableList;

    // Maakt de shopping list aan met de prijzen en geeft een random lijstje aan de speler
    function setShoppinglist(){
      let rawList = shopItemList;
      let rawPrice = shopPriceList;
      let listArray = "";
      let priceArray = "";
      let easy = 4;
      let medium = 6;
      let hard = 8;
      for(let i = 0; i < medium; i++){
        let randomNum = Math.floor(Math.random() * rawList.length);
        listArray = listArray + rawList[randomNum] + " ";
        priceArray = priceArray + rawPrice[randomNum] + " ";
        rawList.splice(randomNum, 1);
        rawPrice.splice(randomNum, 1);
      }
      priceList = priceArray.split(" ");
      shoppingList = listArray.split(" ");
      priceList.splice(-1,1);
      shoppingList.splice(-1,1);
      updatableList = shoppingList;
      let list = shoppingList[0] + "\n";  
      for(let i = 1; i<shoppingList.length; i++){
          list = list + shoppingList[i] + "\n";
      }
        shoppinglist.setAttribute("value", list);
      let rawTotal = 0;
      for(i = 0; i< priceList.length; i++){
        rawTotal = rawTotal + parseFloat(priceList[i]);
      }
      totalPrice = rawTotal.toFixed(2);
    }
    setShoppinglist();


    // Functie om shoppinglist te updaten - ! W.I.P. !

    function updateShoppingList(){
      let list = updatableList[0] + "\n";  
      for(let i = 1; i<updatableList.length; i++){
          list = list + updatableList[i] + "\n";
      }
        shoppinglist.setAttribute("value", list);
        console.log(list, " test")
    }

    
    // Functie om items aan de shoppingcart toe te voegen
    function addToCart(item){
      for(i = 0; i<shoppingCartArray.length; i++){
        if(shoppingCartArray[i] === ""){
          shoppingCartArray[i] = item;
          i = 7;
        }
        if(i === 7 && shoppingCartArray[7] !== ""){
          console.log("cart is full!");
          
        }
      }
    }




    // Functie om item uit shoppingcart weg te halen, geef aan de functie het item mee wat verwijderd moet worden

    function removeFromCart(item){
      for(i = 0; i<shoppingCartArray.length; i++){
        if(shoppingCartArray[i] === item){
          shoppingCartArray[i] = "";
          console.log(shoppingCartArray);
        }
      }
    }


    function addListeners() {
      let phonePos = 0;
      this.addEventListener('keydown', function (event) {
        if (event.key === 'r' && phonePos === 0) {
          phone.setAttribute("position", "0 0 -0.5");
          phone.setAttribute("rotation", "0 -90 0");
          phone.setAttribute("scale", "0.1 0.1 0.1");
          phonePos = 1;
          return
        }
        else if(event.key === 'r' && phonePos === 1){
          phone.setAttribute("position", "-0.5 0 -0.5");
          phone.setAttribute("rotation", "0 -10 0");
          phone.setAttribute("scale", "0.07 0.07 0.07");
          phonePos = 0;
          return
        }


    });
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
=======
window.onload = () => {
	const startButton = document.getElementById('startButton');
	const optiesButton = document.getElementById('optiesButton');
	const menuScene = document.getElementById('js--menuScene');
	const winkelScene = document.getElementById('js--winkelScene');

	optiesButton.addEventListener('click', function () {
		menuScene.setAttribute('visible', 'false');
		winkelScene.setAttribute('visible', 'true');
	});
	startButton.addEventListener('click', function () {
		menuScene.setAttribute('visible', 'false');
		winkelScene.setAttribute('visible', 'true');
	});
};
>>>>>>> startMenu
