//fahrenheut to celsius
function toCelsius(){
    let fahrenheut = prompt("Enter the temperature in fahrenheut");
    let value = (fahrenheut - 32) * 5 / 9;
    document.getElementById("result").innerHTML = value.toFixed(2)+" °C";
}
// toCelsius();

//celsius to fahrenheut

function toFahrenheut(){
    let celsius = prompt("Enter the temperature in celsius");
    let value = celsius * 9 / 5 + 32;
    document.getElementById("result").innerHTML = value.toFixed(2)+" °F";
}
toFahrenheut();