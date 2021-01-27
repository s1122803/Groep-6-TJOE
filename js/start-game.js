AFRAME.registerComponent('startbutton', {
	init: function () {
		const menuScene = document.getElementById('js--menuScene');
		const winkelScene = document.getElementById('js--winkelScene');
		this.el.addEventListener('click', function () {
			console.log('log');
			menuScene.setAttribute('visible', 'false');
			winkelScene.setAttribute('visible', 'true');
		});
	},
	update: function () {},
	tick: function () {},
	remove: function () {},
	pause: function () {},
	play: function () {},
});
