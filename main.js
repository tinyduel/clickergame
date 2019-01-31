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
    keyboardCost = keyboardCost + keyboard
    document.getElementById("cookies").innerHTML = cookies;
    document.getElementById("keyboard").innerHTML = keyboard;
    document.getElementById("keyboardCost").innerHTML = keyboardCost;
  };
};
