document.write("Что-нибудь напишем.");
console.error("ERROR");

var a = 10;
var b = 5;
//console.log("a - b = " + (a - b));

var counter = 0;

var person = null;

if (confirm("Уверены?"))
{
    person = prompt("Ваше имя");
    alert("Привет, " + person);

}
else
{
    alert("Отмена");
}

function onClickButton(el)
{
    //alert("вы нажали");
    counter++;
    console.log(counter);
    el.innerHTML = "вы нажали " + counter;
}

function OnInput(el)
{
    console.log(el.value);
    el.style.background = "red";
    el.style.color = "blue";
}

