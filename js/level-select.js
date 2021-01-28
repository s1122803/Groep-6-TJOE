AFRAME.registerComponent('levelselect', {
	schema: {
		level: { type: 'int', default: 4 },
	},
	init: function () {
		sessionStorage.setItem('level', 4);
	},
	update: function () {
		const level = this.data.level;
		const level4 = document.getElementById('js--level-4');
		const level6 = document.getElementById('js--level-6');
		const level8 = document.getElementById('js--level-8');
		this.el.addEventListener('click', function () {
			sessionStorage.setItem('level', level);
			level4.setAttribute('visible', 'false');
			level6.setAttribute('visible', 'false');
			level8.setAttribute('visible', 'false');
			this.setAttribute('visible', 'true');
		});
	},
	tick: function () {},
	remove: function () {},
	pause: function () {},
	play: function () {},
});
