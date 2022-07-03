//fahrenheut to celsius
function toCelsius(fahrenheut){
    let value = (fahrenheut - 32) * 5 / 9;
    return value.toFixed(2)+" °C";
}

function display(elementId,value){
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>";
}

//celsius to fahrenheut

function toFahrenheut(celsius){
    let value = celsius * 9 / 5 + 32;
    return value.toFixed(2)+" °F";
}
alert(toCelsius(150));
display("toCelsius",toCelsius(150));
alert(toFahrenheut(150));
display("toFahrenheut",toFahrenheut(150));