AFRAME.registerComponent("pickup", {
    init:function(){
        const phoneList = document.getElementById('js--phone-shoppinglist');
        const paymentText = document.getElementById('js--payment-text');
        const checkmark = document.getElementsByClassName('js--checkmark');
        const highscore = document.getElementById('js--score');
        const plopSound = new Audio("../sound/plop.mp3");
        plopSound.loop = false;
        plopSound.currentTime = 0.9;
        plopSound.volume = 0.2;
        let itemCheck = false;
        let timeout = false;
        const updateShoppingList = (itemName) => {
            let list;
            for (let i = 0; i < updatableList.length; i++) {
                if(updatableList[i] == itemName){
                    checkmark[i].setAttribute('color', 'red');
                }
                if(i === 0){
                    list = updatableList[0] + '\n';
                }
                else{
                    list = list + updatableList[i] + '\n';
                }
            }
            itemCheck = true;
            phoneList.setAttribute('value', list);
            let colorArray = [];
            for(let i = 0; i<checkmark.length; i++){
                colorArray[i] = checkmark[i].getAttribute('color');  
            }
            if(colorArray.every(val => val === "red")){
                enablePayment = true;
                paymentText.setAttribute("value", "De prijs is: € "+totalPrice);
                
            }
            // console.log("Check if true/false:  ",colorArray.every(val => val === "green"))


                // for (let i = 0; i < 7; i++) {
                //     if (itemArray[i] === '') {
                //         itemArray[i] =  "item";

                //         console.log()
                //         camera.innerHTML += HTML.replace('clickable','');
                //         console.log(itemPlace.children)
                //     }
                // }         
        }
       this.addCompListener = () => {
        this.el.addEventListener('click', function () {
            if(timeout === false){
                timeout = true;
                let itemId = this.getAttribute('class').split(' ');
            let itemCheck = 0;
                for(let i = 0; i<updatableList.length; i++){
                    if(itemId[1] == updatableList[i] &&  checkmark[i].getAttribute('color') == "red"){
                        console.log(checkmark[i].getAttribute('color'))
                        updateShoppingList(itemId[1]);
                        score = score + 100;
                        console.log(score)
                        highscore.setAttribute('value', score);
                        itemCheck = true;
                    }
                }
                this.setAttribute('animation', 'property: scale; to: 0 0 0; dur: 500; easing: linear; loop: false');
                
                plopSound.play();
                setTimeout(function(){
                    this.remove;
                    timeout = false;
                },510);
                if((i == updatableList.length && itemCheck == false)){
                    console.log("fout")
                    score = score - 100;
                    highscore.setAttribute('value', score);
                }
        }
        })
           
    
            
    }
    
    },
    update:function(){
        this.addCompListener();
    },
    tick:function(){

    },
    remove:function(){

    },
    pause:function(){

    },
    play:function(){

    }
});
