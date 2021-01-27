AFRAME.registerComponent('startbutton', {
	init: function () {
		const menuScene = document.getElementById('js--menuScene');
		const winkelScene = document.getElementById('js--winkelScene');
		const camera1 = document.getElementById('head1');
		const lefthand = document.getElementById('left-hand1');
		this.el.addEventListener('click', function () {
			menuScene.setAttribute('visible', 'false');
			winkelScene.setAttribute('visible', 'true');
			// camera1.setAttribute('raycaster', 'interval: 1000; objects: .clickable; far: 1.5;');
			lefthand.setAttribute('teleport-controls', 'cameraRig: #cameraRig1; teleportOrigin: #head1; button: trigger; collisionEntities: .js--welLopen; curveShootingSpeed:5;');
		});
	},
	update: function () {},
	tick: function () {},
	remove: function () {},
	pause: function () {},
	play: function () {},
});