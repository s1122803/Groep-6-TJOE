//Global variables

// Alle items en de prijzen ervan (Prijzen van de items moeten op dezeflde positie in de array staan)
const shopItemList = ['appel', 'banaan', 'peer', 'broccoli', 'sla', 'paprika', 'brood', 'kip', 'gehakt', 'spaghetti', 'pastasaus', 'pringles', 'chocolade', 'chips-naturel', 'chips-paprika', 'mais', 'cola', 'fanta', 'water', 'sinaasappelsap', 'melk', 'vla', 'yoghurt', 'boter', 'kaas', 'salami'];
const shopPriceList = [0.60, 0.99, 0.60, 1.49, 0.99, 0.89, 1.99, 6.69, 3.09, 1.35, 2.99, 2.09, 2.89, 0.99, 0.99, 1.59, 1.85, 1.99, 0.59, 1.43, 1.45, 1.09, 0.95, 1.39, 2.39, 1.29];
let shoppingCartArray = ['', '', '', '', '', '', '', ''];
let updatableList;
let rawList = shopItemList;
let rawPrice = shopPriceList;
let listArray = '';
let priceArray = '';
let addListenerOnce = false;
let totalPayment = 0.0;
let totalPrice = 0.0;
let score = 0;
let enablePayment = false; //terug zetten naar false!!
let disableTick = false;
let count_10_euro = 0;
let count_5_euro = 0;
let count_2_euro = 0;
let count_1_euro = 0;
let count_50_cent = 0;
let count_20_cent = 0;
let count_10_cent = 0;
let count_5_cent = 0;

window.onload = () => {
	const phoneList = document.getElementById('js--phone-shoppinglist');
	const phone = document.getElementById('js--phone');

	let checkmark = document.getElementsByClassName('js--checkmark');

	window.setBoodschappenlijstje = () => {
		let level = sessionStorage.getItem('level');
		switch (level) {
			case '4':
				checkmark[7].setAttribute('opacity', '0');
				checkmark[6].setAttribute('opacity', '0');
				checkmark[5].setAttribute('opacity', '0');
				checkmark[4].setAttribute('opacity', '0');
				checkmark[7].setAttribute('class', '');
				checkmark[6].setAttribute('class', '');
				checkmark[5].setAttribute('class', '');
				checkmark[4].setAttribute('class', '');
				checkmark[0].setAttribute('position', '0.25 1.32 1.2');
				checkmark[1].setAttribute('position', '0.25 1.10 1.2');
				checkmark[2].setAttribute('position', '0.25 0.87  1.2');
				checkmark[3].setAttribute('position', '0.25 0.6 1.2');

				break;

			case '6':
				checkmark[7].setAttribute('opacity', '0');
				checkmark[6].setAttribute('opacity', '0');
				checkmark[7].setAttribute('class', '');
				checkmark[6].setAttribute('class', '');
				checkmark[0].setAttribute('position', '0.25 1.52 1.2');
				checkmark[1].setAttribute('position', '0.25 1.32 1.2');
				checkmark[2].setAttribute('position', '0.25 1.10  1.2');
				checkmark[3].setAttribute('position', '0.25 0.87 1.2');
				checkmark[4].setAttribute('position', '0.25 0.62 1.2');
				checkmark[5].setAttribute('position', '0.25 0.4 1.2');
				break;
		}

		for (let i = 0; i < level; i++) {
			let randomNum = Math.floor(Math.random() * rawList.length);
			listArray = listArray + rawList[randomNum] + ' ';
			priceArray = priceArray + rawPrice[randomNum] + ' ';
			rawList.splice(randomNum, 1);
			rawPrice.splice(randomNum, 1);
		}
		priceList = priceArray.split(' ');
		shoppingList = listArray.split(' ');
		priceList.splice(-1, 1);
		shoppingList.splice(-1, 1);
		updatableList = shoppingList;
		let list = shoppingList[0] + '\n';
		for (let i = 1; i < shoppingList.length; i++) {
			list = list + shoppingList[i] + '\n';
		}
		phoneList.setAttribute('value', list);
		let rawTotal = 0;
		for (i = 0; i < priceList.length; i++) {
			rawTotal = rawTotal + parseFloat(priceList[i]);
		}
		let priceSplit = rawTotal.toFixed(2).split('.');

		totalPrice = rawTotal.toFixed(2);

		let pricePos = parseInt(priceSplit[priceSplit.length - 1]);

		let priceDecimal = Math.ceil(pricePos / 5) * 5;

		if (priceDecimal < 10) {
			let part_1 = priceSplit[0].toString();
			let part_2 = '0' + priceDecimal.toString();
			let convert = part_1 + '.' + part_2;
			totalPrice = parseFloat(convert);
		} else {
			totalPrice = parseFloat(priceSplit[0] + '.' + priceDecimal);
			totalPrice = totalPrice.toFixed(2);
		}
	};
};
