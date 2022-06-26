let number = document.getElementById("number")
let message = document.getElementById("message")
let modalTitle = document.getElementById("exampleModalLabel")
let trFl = document.getElementById("trFl")
let btn = document.getElementById("btn")
let body = document.querySelector("body")
let spiner = document.querySelector(".spinner-border")
let btnStart = document.querySelector(".buttonStart")
let content = document.querySelector(".content")
let ran = Math.floor((Math.random() * 3) + 1)

function spinerShow() {
    if (spiner.style.display === 'none') {

    } else {
        btnStart.style.display = 'none'
        spiner.style.display = 'block'
        body.classList.add("bg")
        contentGame()
    }
}

function contentGame() {
    setTimeout(function () {
        spiner.style.display = 'none'
        content.style.display = 'block'
        body.classList.remove("bg")
    }, 3000);
}

function handler() {

    if (!validateResult(number)) {

    } else {
        gameResult(number)
    }
    refresh()

}

function validateResult(number) {
    if (number.value > 3 || number.value < 1) {
        showModal()
        modalTitle.textContent = 'Ошибка!'
        message.textContent = 'Ошибка! Введите число от 1-3'
        message.style.color = "red"
        number.classList.add("btn-outline-danger")
        return false

    }
    return true
}

function validateInput() {
    if (document.getElementById("number").value === "") {
        document.getElementById('button').disabled = true;
    } else {
        document.getElementById('button').disabled = false;
    }
}

function gameResult(params) {
    if (number.value == ran) {
        showModal()
        modalTitle.textContent = "Вы выйграли!"
        message.textContent = "Вы выйграли! Комп'ютер ввел число: " + ran
        message.style.color = "green"
        number.classList.add("btn-outline-success");

    } else {
        showModal()
        modalTitle.textContent = "Вы проиграли!"
        message.textContent = "Вы проиграли! Комп'ютер ввел число: " + ran
        message.style.color = "red"
        number.classList.add("btn-outline-danger");

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