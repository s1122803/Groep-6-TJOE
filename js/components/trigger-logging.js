AFRAME.registerComponent('trigger-logging', {
	init: function () {
		this.el.addEventListener('triggerdown', this.logThumbstick);
	},
	logThumbstick: function (evt) {
		const camera = document.getElementById('js--camera');
		let pos = camera.getAttribute('position');
		let newX = parseInt(pos.x) + 1;
		let newPos = toString(newX + ' ' + pos.y + ' ' + pos.z);
		document.getElementById('js--groente').setAttribute('color', 'red');
		document.getElementById('js--camera').setAttribute('position', newPos);
	},
	tick: function (evt) {
		// console.log(document.getElementById('js--camera').getAttribute('position').x);
		// console.log(document.getElementById('js--camera').getAttribute('position').y);
		// console.log(document.getElementById('js--camera').getAttribute('position').z);
	},
});
