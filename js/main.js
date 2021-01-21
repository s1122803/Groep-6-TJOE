window.onload = () => {
	const startButton = document.getElementById('startButton');
	const menuScene = document.getElementById('js--menuScene');
	const winkelScene = document.getElementById('js--winkelScene');

	startButton.addEventListener('click', function () {
		menuScene.setAttribute('visible', 'false');
		winkelScene.setAttribute('visible', 'true');
	});
};
