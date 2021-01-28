AFRAME.registerComponent('startbutton', {
	init: function () {},
	update: function () {
		const menuScene = document.getElementById('js--menuScene');
		const winkelScene = document.getElementById('js--winkelScene');
		const camera1 = document.getElementById('head1');
		const righthand = document.getElementById('right-hand1');
		const lefthand = document.getElementById('left-hand1');
		this.el.addEventListener('click', function () {
			setBoodschappenlijstje();
			menuScene.setAttribute('visible', 'false');
			winkelScene.setAttribute('visible', 'true');
			camera1.setAttribute('raycaster', 'objects: .clickable; far: infinite;');
			righthand.setAttribute('raycaster', 'objects: .clickable; far: 2.5;');
			lefthand.setAttribute('teleport-controls', 'cameraRig: #cameraRig1; teleportOrigin: #head1; button: trigger; collisionEntities: .js--welLopen; curveShootingSpeed:5;');
		});
	},
	tick: function () {},
	remove: function () {},
	pause: function () {},
	play: function () {},
});
