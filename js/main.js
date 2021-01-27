//Global variables

// Alle items en de prijzen ervan (Prijzen van de items moeten op dezeflde positie in de array staan)
const shopItemList = ['pastasaus', 'spaghetti', 'pringles', 'chocolade', 'chips-naturel', 'chips-paprika', 'kip', 'appel', 'broccoli', 'brood', 'banaan', 'koek', 'sla'];
const shopPriceList = [2.99, 1.35, 2.09, 2, 89, 0.99, 0.99, 6.69, 0.6, 1.49, 1.99, 0.99, 1.49, 0.99];
let shoppingCartArray = ['', '', '', '', '', '', '', ''];
let updatableList;
let rawList = shopItemList;
let rawPrice = shopPriceList;
let listArray = '';
let priceArray = '';
let addListenerOnce = false;

window.onload = () => {
	const phoneList = document.getElementById('js--phone-shoppinglist');
	const phone = document.getElementById('js--phone');

	const addListeners = () => {
		let phonePos = 0;
		this.addEventListener('keydown', function (event) {
			if (event.key === 'r' && phonePos === 0) {
				phone.setAttribute('position', '0 0 -0.5');
				phone.setAttribute('rotation', '0 -90 0');
				phone.setAttribute('scale', '0.1 0.1 0.1');
				phonePos = 1;
				return;
			} else if (event.key === 'r' && phonePos === 1) {
				phone.setAttribute('position', '-0.5 0 -0.5');
				phone.setAttribute('rotation', '0 -10 0');
				phone.setAttribute('scale', '0.07 0.07 0.07');
				phonePos = 0;
				return;
			}
		});
	};

	addListeners();

	// Maakt de shopping list aan met de prijzen en geeft een random lijstje aan de speler
	const setShoppinglist = () => {
		// let rawList = shopItemList;
		// let rawPrice = shopPriceList;
		// let listArray = '';
		// let priceArray = '';
		let easy = 4;
		let medium = 6;
		let hard = 8;
		for (let i = 0; i < medium; i++) {
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
		totalPrice = rawTotal.toFixed(2);
	};
	setShoppinglist();

	// Functie om shoppinglist te updaten - ! W.I.P. !

	function updateShoppingList() {
		let list = updatableList[0] + '\n';
		for (let i = 1; i < updatableList.length; i++) {
			list = list + updatableList[i] + '\n';
		}
		shoppinglist.setAttribute('value', list);
		console.log(list, ' test');
	}
};
