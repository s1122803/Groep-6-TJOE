AFRAME.registerComponent("payment", {
    init:function(){
        const teneuro = document.getElementById('js--10euro');
        const fiveeuro = document.getElementById('js--5euro');
        const twoeuro = document.getElementById('js--2euro');
        const oneeuro = document.getElementById('js--1euro');
        const fiftycent = document.getElementById('js--50cent');
        const twentycent = document.getElementById('js--20cent');
        const tencent = document.getElementById('js--10cent');
        const fivecent = document.getElementById('js--5cent');
        const beepSound = new Audio('././sound/beep.mp3');
        const cheerSound = new Audio('././sound/applause.mp3');
        beepSound.volume = 0.2;
        cheerSound.volume = 0.1;
        this.addPaymentListener = () => {
            this.el.addEventListener('click', function () {
                
                if(enablePayment == true){
                if(this.getAttribute('id') == 'js--count-reset'){
                    count_10_euro = 0;
                    count_5_euro = 0;
                    count_2_euro = 0;
                    count_1_euro = 0;
                    count_50_cent = 0;
                    count_20_cent = 0;
                    count_10_cent = 0;
                    count_5_cent = 0;
                    totalPayment = 0;
                    teneuro.setAttribute('value', count_10_euro+'x10 euro');
                    fiveeuro.setAttribute('value', count_5_euro+'x5 euro');
                    twoeuro.setAttribute('value', count_2_euro+'x2 euro');
                    oneeuro.setAttribute('value', count_1_euro+'x1 euro');
                    fiftycent.setAttribute('value', count_50_cent+'x50 cent');
                    twentycent.setAttribute('value', count_20_cent+'x20 cent');
                    tencent.setAttribute('value', count_10_cent+'x10 cent');
                    fivecent.setAttribute('value', count_5_cent+'x5 cent');
                    return
                }
                if(this.getAttribute('id') == 'js--accept-payment'){
                    console.log(totalPrice + "   "+ totalPayment.toFixed(2))
                    if(totalPrice === totalPayment.toFixed(2)){
                        cheerSound.play();
                        
                    }else{
                        beepSound.play();

                    }
                }
                let moneyId = this.getAttribute('class').split(' ');
                switch(moneyId[1]){
                    case "10euro":
                        totalPayment += 10;
                        count_10_euro += 1;
                        teneuro.setAttribute('value', count_10_euro+'x10 euro');
                    break;
                    case "5euro":
                        totalPayment += 5;
                        count_5_euro += 1;
                        fiveeuro.setAttribute('value', count_5_euro+'x5 euro');
                    break;
                    case "2euro":
                        totalPayment += 2;
                        count_2_euro += 1;
                        twoeuro.setAttribute('value', count_2_euro+'x2 euro');
                    break;
                    case "1euro":
                        totalPayment += 1;
                        count_1_euro += 1;
                        oneeuro.setAttribute('value', count_1_euro+'x1 euro');
                    break;
                    case "50cent":
                        totalPayment += 0.50;
                        count_50_cent += 1;
                        fiftycent.setAttribute('value', count_50_cent+'x50 cent');
                    break;
                    case "20cent":
                        totalPayment += 0.20;
                        count_20_cent += 1;
                        twentycent.setAttribute('value', count_20_cent+'x20 cent');
                    break;
                    case "10cent":
                        totalPayment += 0.10;
                        count_10_cent += 1;
                        tencent.setAttribute('value', count_10_cent+'x10 cent');
                    break;
                    case "5cent":
                        totalPayment += 0.05;
                        count_5_cent += 1;
                        fivecent.setAttribute('value', count_5_cent+'x5 cent');
                    break;
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