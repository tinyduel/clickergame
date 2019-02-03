var cookies = 0;
var keyboard = 0;
var stocks = 0
var stockPrice = 0
var debug = 0
function cookieClick(number) {
	document.getElementById("cookie").onkeydown = function(e){
  	if (e.which == 13) { //13 is the keycode referring to enter.
   		e.preventDefault(); //this will prevent the intended purpose of the event. 
    		return false; //return false on the event.
   		}
	}
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
	document.getElementById("stocksCost").innerHTML = stockPrice + 5;
};
window.setInterval(function(){
	
	stocksUpdate();
	
}, 2000);
function stockBuy() {
	var stocksAmount = parseInt(document.getElementById("amount").value);
	if (cookies >= stockPrice * stocksAmount + 5) {
		cookies = cookies - stockPrice * stocksAmount + 5;
		stocks = stocks + stocksAmount;
		document.getElementById("cookies").innerHTML = cookies;
		document.getElementById("stocks").innerHTML = stocks;
	};
};
function stockSell() {
	var stocksAmount = document.getElementById("amount").value;
	if (stocks >= 1) {
		if (stocksAmount > stocks) {
			cookies = cookies + stockPrice * stocks;
			stocks = stocks - stocks;
			document.getElementById("cookies").innerHTML = cookies;
			document.getElementById("stocks").innerHTML = stocks;
		} else {
			cookies = cookies + stockPrice * stocksAmount;
			stocks = stocks - stocksAmount;
			document.getElementById("cookies").innerHTML = cookies;
			document.getElementById("stocks").innerHTML = stocks;
		};
	};
};
