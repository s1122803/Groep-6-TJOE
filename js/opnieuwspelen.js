AFRAME.registerComponent('opnieuwspelen', {
	init: function () {},
	update: function () {
		this.el.addEventListener('click', function () {
			location.reload();
			return false;
		});
	},
	tick: function () {},
	remove: function () {},
	pause: function () {},
	play: function () {},
});
