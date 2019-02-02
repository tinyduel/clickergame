var cookies = 0;
var keyboard = 0;
var stocks = 0
var stockPrice = 0
function cookieClick(number) {
  cookies = cookies + number
  document.getElementById("cookies").innerHTML = cookies;
};
function buyKeyboard() {
	var keyboardCost = Math.floor(10 * Math.pow(1.1,keyboard));
  if (cookies >= keyboardCost) {
    keyboard = keyboard + 1
    cookies = cookies - keyboardCost
		var keyboardCost = Math.floor(10 * Math.pow(1.1,keyboard));
    document.getElementById("cookies").innerHTML = cookies;
    document.getElementById("keyboard").innerHTML = keyboard;
    document.getElementById("keyboardCost").innerHTML = keyboardCost;
  };
};

window.setInterval(function(){
	
	cookieClick(keyboard);
	
}, 1000);
function save() {
	 var save = {
    		cookies: cookies,
    		keyboard: keyboard,
		stocks: stocks,
		stockPrice: stockPrice

	}
	 localStorage.setItem("save",JSON.stringify(save));
};

function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
	if (typeof savegame.keyboard !== "undefined") keyboard = savegame.keyboard;
	if (typeof savegame.stocks !== "undefined") stocks = savegame.stocks;
	if (typeof savegame.stockPrice !== "undefined") stockPrice = savegame.stockPrice;
	var keyboardCost = Math.floor(10 * Math.pow(1.1,keyboard));
	document.getElementById("cookies").innerHTML = cookies;
	document.getElementById("keyboard").innerHTML = keyboard;
  document.getElementById("keyboardCost").innerHTML = keyboardCost;
};
function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function stocksUpdate() {
	var rnd = getRndInt(0,2)
	if (rnd === 1) {
		stockPrice = stockPrice + getRndInt(0,5);
		document.getElementById("stockPrice").innerHTML = stockPrice;
	} else if (rnd === 0) {
		stockPrice = stockPrice + getRndInt(0,-5);
		document.getElementById("stockPrice").innerHTML = stockPrice;

	};
	if (stockPrice < 1) {
		stockPrice = 5
	//	stocks = 0
	//	document.getElementById("cookies").innerHTML = cookies;
	//	document.getElementById("stocks").innerHTML = stocks;
		document.getElementById("stockPrice").innerHTML = stockPrice;
	};
};
window.setInterval(function(){
	
	stocksUpdate();
	
}, 2000);
function stockBuy() {
	if (cookies >= stockPrice) {
		cookies = cookies - stockPrice;
		stocks = stocks + 1
		document.getElementById("cookies").innerHTML = cookies;
		document.getElementById("stocks").innerHTML = stocks;
	};
};
function stockSell() {
	if (stocks >= 1) {
		cookies = cookies + stockPrice
		stocks = stocks - 1
		document.getElementById("cookies").innerHTML = cookies;
		document.getElementById("stocks").innerHTML = stocks;
	};
};
