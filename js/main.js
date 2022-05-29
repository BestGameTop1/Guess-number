let number = document.getElementById("number")
let message = document.getElementById("message")
let trFl = document.getElementById("trFl")
let btn = document.getElementById("btn")
let ran = Math.floor((Math.random() * 3) + 1);
function fun_1() {
    if (number.value == ran) {
        showModal()
        message.textContent = "Вы выйграли! Комп'ютер ввел число: " + ran
        message.style.color = "green"
        number.classList.add("btn-outline-success");
        refresh()
    } else {
        showModal()
        message.textContent = "Вы проиграли! Комп'ютер ввел число: " + ran
        message.style.color = "red"
        number.classList.add("btn-outline-danger");
        refresh()
    }

}
function refresh() {
    setTimeout(function () {
        location.reload()
    }, 2500);
}
function showModal() {
    $("#exampleModal").modal('show')
}
document.oninput = function () {
    var input = document.querySelector('.input-0');
    input.value = input.value.replace(/\D/g, '');
}