AFRAME.registerComponent('volume', {
	schema: {
		volume: { default: 0.2 },
	},
	init: function () {
		sessionStorage.setItem('volume', 0.2);
	},
	update: function () {
		const volume = this.data.volume;
		const aan = document.getElementById('js--geluid-aan');
		const uit = document.getElementById('js--geluid-uit');
		this.el.addEventListener('click', function () {
			sessionStorage.setItem('volume', volume);
			aan.setAttribute('visible', 'false');
			uit.setAttribute('visible', 'false');
			this.setAttribute('visible', 'true');
		});
	},
	tick: function () {},
	remove: function () {},
	pause: function () {},
	play: function () {},
});
