AFRAME.registerComponent("pickup", {
    init:function(){
        const phoneList = document.getElementById('js--phone-shoppinglist');
	    const phone = document.getElementById('js--phone');
        let pickups = document.getElementsByClassName('js--pickup');
        let itemInArray;
        let executeFix = 0;
        this.el.addEventListener('click', function () {
            let itemId = this.getAttribute('class').split(' ');
            if(executeFix === 0){
                executeFix = 1;
                for(let i = 0; i<updatableList.length; i++){
                    if(itemId[1] == updatableList[i]){
                        itemInArray = i;
                        this.setAttribute('animation', 'property: scale; to: 0 0 0; dur: 500; easing: linear; loop: false')
                        setTimeout(function(){
                            this.remove();
                            executeFix = 0;
                        },510);
                    }  
                }
            }
            
            return
            function updateShoppingList() {
                let list;
                for (let i = 0; i < updatableList.length; i++) {

                    if(i === 0){
                        list = updatableList[0] + '\n';
                    }
                    else{
                        list = list + updatableList[i] + '\n';
                    }
                }
                phoneList.setAttribute('value', list);
            
            }
            updateShoppingList();
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