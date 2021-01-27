AFRAME.registerComponent("pickup", {
    init:function(){
        const phoneList = document.getElementById('js--phone-shoppinglist');
        const checkmark = document.getElementsByClassName('js--checkmark');
        const highscore = document.getElementById('js--score');
        const plopSound = new Audio("../sound/plop.mp3");
        plopSound.volume = 0.3;
        let score = 0;
        let itemCheck = false;
        const updateShoppingList = (itemName) => {
            let list;
            for (let i = 0; i < updatableList.length; i++) {
                if(updatableList[i] == itemName){
                    checkmark[i].setAttribute('color', 'green');
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
                },510);
                if((i == updatableList.length && itemCheck == false)){
                    console.log("fout")
                    score = score - 100;
                    highscore.setAttribute('value', score);
                }
        });
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