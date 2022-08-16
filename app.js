let card = document.getElementById('inputEmail4');
let cvc = document.getElementById('inputPassword4');
let amount = document.getElementById('inputAmount');
let nombre = document.getElementById('inputName');
let lastname = document.getElementById('inputLastName');
let city = document.getElementById('inputCity');
let postalCode = document.getElementById('inputZip');
let textArea = document.getElementById('floatingTextarea2')
element = document.getElementById("alertMissing");
element.style.display = "none";


let i=0;
let sendbutton = document.getElementById('sendbtn');
sendbutton.addEventListener('click', function (e) {
    let arr = [card, cvc, amount, nombre, lastname, city, postalCode, floatingTextarea2];
    let arrValue = [card.value, cvc.value, amount.value, nombre.value, lastname.value, city.value, postalCode.value, floatingTextarea2.value];
    for (let i = 0; i < arrValue.length; i++) {
        if (arrValue[i] == "") {
            arr[i].classList.add("bg-danger", "bg-opacity-25");
            element = document.getElementById("alertMissing");
            element.style.display = "inline";

        }
    }for (let i=0; i < arrValue.length; i++){
        if (arrValue[i] !== ""){
            arr[i].classList.remove("bg-danger", "bg-opacity-25");
            element = document.getElementById("alertMissing");
            element.style.display = "none";
        }
    }
})

function validate()
{
  let cardValue = card.value;
  let cardRGEX = /\d[-]?/g;
  let cardResult = cardRGEX.test(cardValue);
  if (cardResult == false){
    alert("Favor ingrese el número de la tarjeta de forma correcta");
    element = document.getElementById("alertMissing");
    element.style.display = "inline";
    card.classList.add("bg-danger", "bg-opacity-25");
    } else true;
  }


function validate2()
{
  let cvcValue = cvc.value;
  let cardRGEX = /\d{3}/g;
  let cardResult = cardRGEX.test(cvcValue);
  if (cardResult == false){
    alert("Favor ingrese el CVC de su tarjeta de forma correcta");
    element = document.getElementById("alertMissing");
    element.style.display = "inline";
    cvc.classList.add("bg-danger", "bg-opacity-25");
  } else true;
}

function validate3()
{
  let amountValue = amount.value;
  let cardRGEX = /^[0-9]*$/g;
  let cardResult = cardRGEX.test(amountValue);
  if (cardResult == false){
    alert("Favor ingrese el monto correctamente");
    element = document.getElementById("alertMissing");
    element.style.display = "inline";
    amount.classList.add("bg-danger", "bg-opacity-25");
  } else true;
}

function validate4()
{
  let nombreValue = nombre.value;
  let cardRGEX = /[a-zA-Z]+/g;
  let cardResult = cardRGEX.test(nombreValue);
  if (cardResult == false){
    alert("Favor ingrese su nombre correctamente");
    element = document.getElementById("alertMissing");
    element.style.display = "inline";
    nombre.classList.add("bg-danger", "bg-opacity-25");
  } else true;
}

function validate5()
{
  let lastnameValue = lastname.value;
  let cardRGEX = /[a-zA-Z]+/g;
  let cardResult = cardRGEX.test(lastnameValue);
  if (cardResult == false){
    alert("Favor ingrese su apellido correctamente");
    element = document.getElementById("alertMissing");
    element.style.display = "inline";
    lastname.classList.add("bg-danger", "bg-opacity-25");
  } else true;
}

function validate6()
{
  let cityValue = city.value;
  let cardRGEX = /[a-zA-Z]/g;
  let cardResult = cardRGEX.test(cityValue);
  if (cardResult == false){
    alert("Favor ingrese su Ciudad correctamente");
    element = document.getElementById("alertMissing");
    element.style.display = "inline";
    city.classList.add("bg-danger", "bg-opacity-25");
  } else true;
}

function validate7()
{
  let postalCodeValue = postalCode.value;
  let cardRGEX = /\d{7}/g;
  let cardResult = cardRGEX.test(postalCodeValue);
  if (cardResult == false){
    alert("Favor el código postal debe tener 7 dígitos");
    element = document.getElementById("alertMissing");
    element.style.display = "inline";
    postalCode.classList.add("bg-danger", "bg-opacity-25");
  } else true;
}
