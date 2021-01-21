window.onload = () => {
	const camera = document.getElementById('head');

	document.querySelector('#left-hand').addEventListener('thumbstickmoved', function () {
		if (evt.detail.y < -0.95) {
			console.log('UP');
			let newX = parseInt(pos.x) + 1;
			let newPos = toString(newX + ' ' + pos.y + ' ' + pos.z);
			document.getElementById('js--groente').setAttribute('color', 'red');
			document.getElementById('js--camera').setAttribute('position', newPos);
		}
	});

	document.querySelector('a-scene').addEventListener('enter-vr', function () {
		camera.setAttribute('position', '5 1.5 3');
		console.log('entering vr');
	});
};
