let card = document.getElementById('inputEmail4');
let cvc = document.getElementById('inputPassword4');
let amount = document.getElementById('inputAmount');
let nombre = document.getElementById('inputName');
let lastname = document.getElementById('inputLastName');
let city = document.getElementById('inputCity');
let postalCode = document.getElementById('inputZip');
let textArea = document.getElementById('floatingTextarea2')


let i=0;
let sendbutton = document.getElementById('sendbtn');
sendbutton.addEventListener('click', function (e) {
    let arr = [card, cvc, amount, nombre, lastname, city, postalCode, floatingTextarea2];
    let arrValue = [card.value, cvc.value, amount.value, nombre.value, lastname.value, city.value, postalCode.value, floatingTextarea2.value];
    for (let i = 0; i < arrValue.length; i++) {
        if (arrValue[i] == "") {
            arr[i].classList.add("bg-danger", "bg-opacity-25");
        }
    }for (let i=0; i < arrValue.length; i++){
        if (arrValue[i] !== ""){
            arr[i].classList.remove("bg-danger", "bg-opacity-25");
        }
    }
})
