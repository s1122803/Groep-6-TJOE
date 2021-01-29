AFRAME.registerComponent('payment', {
	init: function () {
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
		const moneySound = new Audio('././sound/money.mp3');
		const winkelScene = document.getElementById('js--winkelScene');
		const eindScene = document.getElementById('js--eindScene');
		const camera1 = document.getElementById('head1');
		const lefthand = document.getElementById('left-hand1');
		const highscore = document.getElementById('js--score');
		const eindScore = document.getElementById('js--eind-score');
		const righthand = document.getElementById('right-hand1');
		this.addPaymentListener = () => {
			this.el.addEventListener('click', function () {
				moneySound.volume = sessionStorage.getItem('volume');
				if (enablePayment == true) {
					if (this.getAttribute('id') == 'js--count-reset') {
						count_10_euro = 0;
						count_5_euro = 0;
						count_2_euro = 0;
						count_1_euro = 0;
						count_50_cent = 0;
						count_20_cent = 0;
						count_10_cent = 0;
						count_5_cent = 0;
						totalPayment = 0;
						teneuro.setAttribute('value', count_10_euro + 'x10 euro');
						fiveeuro.setAttribute('value', count_5_euro + 'x5 euro');
						twoeuro.setAttribute('value', count_2_euro + 'x2 euro');
						oneeuro.setAttribute('value', count_1_euro + 'x1 euro');
						fiftycent.setAttribute('value', count_50_cent + 'x50 cent');
						twentycent.setAttribute('value', count_20_cent + 'x20 cent');
						tencent.setAttribute('value', count_10_cent + 'x10 cent');
						fivecent.setAttribute('value', count_5_cent + 'x5 cent');
						moneySound.play();
						return;
					}
					if (this.getAttribute('id') == 'js--accept-payment') {
						if (totalPrice == totalPayment.toFixed(2)) {
							cheerSound.volume = sessionStorage.getItem('volume');
                            cheerSound.play();
                            score += 300;
							winkelScene.setAttribute('visible', 'false');
							eindScene.setAttribute('visible', 'true');
							eindScore.setAttribute('value', 'Je score is: ' + score);
							camera1.setAttribute('raycaster', 'objects: .clickable-eindscene; far: infinite;');
							righthand.setAttribute('raycaster', 'objects: .clickable-eindscene; far: infinite;');
							lefthand.setAttribute('teleport-controls', 'cameraRig: #cameraRig1; teleportOrigin: #head1; button: trigger; collisionEntities: .js--eindLopen; curveShootingSpeed:5;');
						} else {
                            beepSound.volume = sessionStorage.getItem('volume');
                            score -= 100;
							highscore.setAttribute('value', 'Score: ' + score);
							beepSound.play();
						}
					}
					let moneyId = this.getAttribute('class').split(' ');
					
					switch (moneyId[1]) {
						case '10euro':
							moneySound.play();
							totalPayment += 10;
							count_10_euro += 1;
							teneuro.setAttribute('value', count_10_euro + 'x10 euro');
							break;
						case '5euro':
							moneySound.play();
							totalPayment += 5;
							count_5_euro += 1;
							fiveeuro.setAttribute('value', count_5_euro + 'x5 euro');
							break;
						case '2euro':
							moneySound.play();
							totalPayment += 2;
							count_2_euro += 1;
							twoeuro.setAttribute('value', count_2_euro + 'x2 euro');
							break;
						case '1euro':
							moneySound.play();
							totalPayment += 1;
							count_1_euro += 1;
							oneeuro.setAttribute('value', count_1_euro + 'x1 euro');
							break;
						case '50cent':
							moneySound.play();
							totalPayment += 0.5;
							count_50_cent += 1;
							fiftycent.setAttribute('value', count_50_cent + 'x50 cent');
							break;
						case '20cent':
							moneySound.play();
							totalPayment += 0.2;
							count_20_cent += 1;
							twentycent.setAttribute('value', count_20_cent + 'x20 cent');
							break;
						case '10cent':
							moneySound.play();
							totalPayment += 0.1;
							count_10_cent += 1;
							tencent.setAttribute('value', count_10_cent + 'x10 cent');
							break;
						case '5cent':
							moneySound.play();
							totalPayment += 0.05;
							count_5_cent += 1;
							fivecent.setAttribute('value', count_5_cent + 'x5 cent');
							break;
					}
				}
			});
		};
		this.confirmPayment = () => {};
	},
	update: function () {
		this.addPaymentListener();
	},
	tick: function () {},
	remove: function () {},
	pause: function () {},
	play: function () {},
});
