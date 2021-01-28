AFRAME.registerComponent('phone', {
	init: function () {
		const phone = document.querySelector('[phoneTime]');
		const BASE_URL = 'http://worldclockapi.com/api/json/cet/now';
		let delay = false;
		this.getTime = function () {
			if(delay == false){
				delay = true;
			
				fetch(BASE_URL)
				.then((response) => response.json())
				.then((data) => this.setTime(data));
			}
		};
		this.setTime = function (rawTime) {
			let split_1 = rawTime.currentDateTime.split('T');
			let minSec = split_1[1].split('+');
			phone.setAttribute('value', minSec[0]);
			console.log(minSec[0])
			setTimeout(function(){
				delay = false;
			},5000);
			
		};
	},
	update: function () {
		this.getTime();
	},
	tick: function () {
		setInterval(
			this.getTime(),5000
		);
	},
	remove: function () {},
	pause: function () {},
	play: function () {},
});
