'use strict';

const getData = (url) => {
    return fetch(url).then(response => response.json());
}

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
    }).then(response => response.json());
}

getData('./db.json')
    .then(data => {
        console.log(data)
        sendData('https://jsonplaceholder.typicode.com/posts', data)
            .then(data => console.log(data))
            .catch(error => console.log('Ошибка отправки!', error));
    })
    .catch(error => console.log('Ошибка получения!', error));