window.onload = () => {
	const startButton = document.getElementById('startButton');
	const optiesButton = document.getElementById('optiesButton');
	const menuScene = document.getElementById('js--menuScene');
	const winkelScene = document.getElementById('js--winkelScene');

	optiesButton.addEventListener('click', function () {
		menuScene.setAttribute('visible', 'false');
		winkelScene.setAttribute('visible', 'true');
	});
	startButton.addEventListener('click', function () {
		menuScene.setAttribute('visible', 'false');
		winkelScene.setAttribute('visible', 'true');
	});
};
