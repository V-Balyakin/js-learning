console.log('Request data...');

// setTimeout (() => {
//     console.log('Preparing data...');

//     const backEndData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     };

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data received', backEndData);
//     }, 2000);
// }, 2000);

// вышеописанный подход не очень хорош - слищком громоздкая вложенность
// А СЕЙЧАС сделаем тоже самое, только с помощью PROMISE

const childFromPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Preparing data...');
        const backEndData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        };
        resolve(backEndData);
    }, 2000);
});
// resolve и reject - это функции по своей сути, они априори в Promise "живут"
// resolve вызывается, когда операция успешна

childFromPromise.then(data => { // получаем объект data
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                data.modified = true;
                resolve(data);
            }, 2000);
        });
    }).then(clientData => { // получаем объект clientData
        clientData.fromPromise = true;
        console.log('Data received');
        return clientData;
    }).then(data => { // получаем объект data
        console.log('Modified data', data);
    }).catch(someError => console.error('Error: ', someError)) // якобы ловим ошибку
// data - это объект
// то есть промис (Promise) завершился - сообщили это через resolve() и был вызван
// метод then на этом же промисе (мол, что делаем дальше )
// Т.е. когда childFromPromise выполнится - вызоввутся следующие за THEN операции
// Когда и они выполнятся - вызовутся следующие за вторым THEN операции
.finally(function() { // блок Finally выполнится в любом случае
    console.log('Finally');
});

// пишем функцию sleep, которая будет передавать определённую задержку
// НИЖЕ получаем:
// функция sleep, которая принимает в себя миллисекунды (milliseconds), данная функция будет возвращать
// новый промис (return new Promise), который принимает в себя параметр resolve и здесь мы реализуем задержку с
// помощью setTimeout, куда передаём Call Back (здесь мы будем вызывать метод resolve и непосредственно в setTimeout
// будем передавать количество миллисекунд (milliseconds))
const sleep = milliseconds => {
    return new Promise (resolve => {
        setTimeout(() => resolve(), milliseconds);
    });
};

sleep(2000).then(() => console.log('After 2 seconds'));
sleep(3000).then(() => console.log('After 3 seconds'));



