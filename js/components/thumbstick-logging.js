AFRAME.registerComponent('thumbstick-logging', {
	init: function () {
		this.el.addEventListener('thumbstickmoved', this.logThumbstick);
	},
	logThumbstick: function (evt) {
		let pos = camera.getAttribute('position');
		const camera = document.getElementById('js--camera');
		if (evt.detail.y > 0.95) {
			console.log('DOWN');
			document.getElementById('js--groente').setAttribute('color', 'red');
		}
		if (evt.detail.y < -0.95) {
			console.log('UP');
			let newX = parseInt(pos.x) + 1;
			let newPos = toString(newX + ' ' + pos.y + ' ' + pos.z);
			document.getElementById('js--groente').setAttribute('color', 'red');
			document.getElementById('js--camera').setAttribute('position', newPos);
		}
		if (evt.detail.x < -0.95) {
			console.log('LEFT');
			document.getElementById('js--groente').setAttribute('color', 'red');
		}
		if (evt.detail.x > 0.95) {
			console.log('RIGHT');
			document.getElementById('js--groente').setAttribute('color', 'red');
		}
	},
	tick: function (evt) {
		// console.log(document.getElementById('js--camera').getAttribute('position').x);
		// console.log(document.getElementById('js--camera').getAttribute('position').y);
		// console.log(document.getElementById('js--camera').getAttribute('position').z);
	},
});
