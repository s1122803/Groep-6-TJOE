AFRAME.registerComponent('pickup', {
	init: function () {
		const phoneList = document.getElementById('js--phone-shoppinglist');
		const paymentText = document.getElementById('js--payment-text');
		const moneyCount = document.getElementsByClassName('js--money-count');
		const highscore = document.getElementById('js--score');
		const acceptPayment = document.getElementById('js--accept-payment');
		const plopSound = new Audio('././sound/plop.mp3');
		const collectSound = new Audio('././sound/collect.mp3');
		const beepSound = new Audio('././sound/beep.mp3');
		plopSound.loop = false;
		plopSound.currentTime = 0.9;
		// plopSound.volume = 0.2;
		// collectSound.volume = 0.2;
		// beepSound.volume = 0.2;
		let itemCheck = false;
		let timeout = false;
		
		const updateShoppingList = (itemName) => {
			let checkmark = document.getElementsByClassName('js--checkmark');
			let list;
			for (let i = 0; i < updatableList.length; i++) {
				if (updatableList[i] == itemName) {
					checkmark[i].setAttribute('color', 'green');
				}
				if (i === 0) {
					list = updatableList[0] + '\n';
				} else {
					list = list + updatableList[i] + '\n';
				}
			}
			itemCheck = true;
			phoneList.setAttribute('value', list);
			let colorArray = [];
			for (let i = 0; i < checkmark.length; i++) {
				colorArray[i] = checkmark[i].getAttribute('color');
			}
			if (colorArray.every((val) => val === 'green')) {
				enablePayment = true;
				paymentText.setAttribute('value', 'De prijs is: € ' + totalPrice);
				for (let x = 0; x < moneyCount.length; x++) {
					moneyCount[x].setAttribute('opacity', '1');
				}
				acceptPayment.setAttribute('opacity', '1');
			}
		};
		this.addCompListener = () => {
			let checkmark = document.getElementsByClassName('js--checkmark');
			this.el.addEventListener('click', function () {
				if (timeout === false) {
					timeout = true;
					let itemId = this.getAttribute('class').split(' ');
					let itemCheck = 0;
					for (let i = 0; i < updatableList.length; i++) {
						if (itemId[1] == updatableList[i] && checkmark[i].getAttribute('color') == 'red') {
							updateShoppingList(itemId[1]);
							score = score + 100;
							highscore.setAttribute('value', 'Score: ' + score);
							itemCheck = true;
							setTimeout(function () {
								collectSound.volume = sessionStorage.getItem('volume');
								collectSound.play();
							}, 500);
						}
					}
					this.setAttribute('animation', 'property: scale; to: 0 0 0; dur: 500; easing: linear; loop: false');

					plopSound.volume = sessionStorage.getItem('volume');
					plopSound.play();
					setTimeout(function () {
						this.remove;
						timeout = false;
					}, 510);
					if (i == updatableList.length && itemCheck == false) {
						score = score - 100;
						highscore.setAttribute('value', 'Score: ' + score);
						setTimeout(function () {
							beepSound.volume = sessionStorage.getItem('volume');
							beepSound.play();
						}, 500);
					}
				}
			});
		};
	},
	update: function () {
		this.addCompListener();
	},
	tick: function () {},
	remove: function () {},
	pause: function () {},
	play: function () {},
});
