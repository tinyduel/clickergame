var cookies = 0;
var keyboard = 0;
var keyboardCost = 10;
function cookieClick(number) {
  cookies = cookies + number
  document.getElementById("cookies").innerHTML = cookies;
};
function buyKeyboard() {
  if (cookies >= keyboardCost) {
    keyboard = keyboard + 1
    cookies = cookies - keyboardCost
    keyboardCost = keyboardCost + (keyboard * keyboard)
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
    keyboardCost: keyboardCost
	}
	 localStorage.setItem("save",JSON.stringify(save));
};

function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
	if (typeof savegame.keyboard !== "undefined") keyboard = savegame.keyboard;
	if (typeof savegame.keyboardCost !== "undefined") keyboardCost = savegame.keyboardCost;
	document.getElementById("cookies").innerHTML = cookies;
	document.getElementById("keyboard").innerHTML = keyboard;
  document.getElementById("keyboardCost").innerHTML = keyboardCost;
};

