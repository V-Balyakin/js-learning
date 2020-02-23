console.log('Start');
console.log('Start 2');

// setTimeout есть в браузере, она не входит в спецификацию JS
// setTimeout вызывается у глобального объекта Window

function timeoutTwoSeconds() {
    console.log('timeout - 2 seconds');
}

window.setTimeout(function () {
    console.log('Inside timeout, after 5 seconds');
}, 5000);
// передаём функцию и время, через которое она должна выполнится
// function () {} - это анонимная функция

setTimeout(timeoutTwoSeconds, 2000); // вызываем внутри функцию, которую описали выше, НО! без скобок
// если будет вызов со скобками после названия функции, то функция вызовется сразу же

console.log('End');

setTimeout(timeoutTwoSeconds, 0);
// вызовется не мгновенно, а попадёт в Callback Queue и будет ждать завершения операций
// в Call Stack (тех, которые выполняются БЕЗ setTimeout)