AFRAME.registerComponent("payment", {
    init:function(){
        this.addPaymentListener = () => {
            this.el.addEventListener('click', function () {
                let moneyId = this.getAttribute('class').split(' ');
                // console.log(moneyId[1]);
                if(enablePayment == true){
                switch(moneyId[1]){
                    case "10euro":
                        totalPayment += 10;
                    break;
                    case "5euro":
                        totalPayment += 5;
                    break;
                    case "2euro":
                        totalPayment += 2;
                    break;
                    case "1euro":
                        totalPayment += 1;
                    break;
                    case "50cent":
                        totalPayment += 0.50;
                    break;
                    case "20cent":
                        totalPayment += 0.20;
                    break;
                    case "10cent":
                        totalPayment += 0.10;
                    break;
                    case "5cent":
                        totalPayment += 0.05;
                    break;
                }
                console.log(totalPrice)
                console.log(totalPayment.toFixed(2))
                if(totalPayment === totalPayment.toFixed(2)){
                    console.log("Yay")
                }else{
                    console.log(Math.abs(totalPrice - totalPayment).toFixed(2))
                }
            }
                
        });
    }
    this.confirmPayment = () => {
        
    }
    },
    update:function(){
        this.addPaymentListener();
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