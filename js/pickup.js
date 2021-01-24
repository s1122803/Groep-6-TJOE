AFRAME.registerComponent("pickup", {
    init:function(){
        const phoneList = document.getElementById('js--phone-shoppinglist');
        const checkmark = document.getElementsByClassName('js--checkmark');
        let executeFix = 0;

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
            phoneList.setAttribute('value', list);
        }

        this.el.addEventListener('click', function () {
            let itemId = this.getAttribute('class').split(' ');
            if(executeFix === 0){
                executeFix = 1;
                for(let i = 0; i<updatableList.length; i++){
                    if(itemId[1] == updatableList[i]){
                        this.setAttribute('animation', 'property: scale; to: 0 0 0; dur: 500; easing: linear; loop: false')
                        setTimeout(function(){
                            executeFix = 0;
                            updateShoppingList(itemId[1]);
                            this.remove();
                      
                            
                        },510);
                    }  
                }
            }
            
            
            
        });
    },
    update:function(){
 
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