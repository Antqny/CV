/* Объявление переменной на кнопку */
var button = document.querySelector('button');

/*Присваиваем кнопке оброботчик, который ждёт клика и тогда запускает логику */
button.addEventListener('click', function() {
    alert('Неважно, сколько дней в твоей жизни. Важно, сколько жизни в твоих днях')
})