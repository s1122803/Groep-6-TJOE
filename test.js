window.onload = () => {
	const test = document.getElementById('test');
	const right_hand = document.getElementById('right-hand');
	const environment = document.getElementById('environment');

	test.addEventListener('click', function () {
		environment.setAttribute('environment', 'preset: goldmine;');
	});
};
