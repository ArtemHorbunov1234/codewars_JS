// Пример GET-запроса
// let a = [];
// fetch('https://657c4aa6853beeefdb991ce8.mockapi.io/test')
//     .then((response) => {
//         console.log(response);
//         // Проверяем, успешен ли ответ (код ответа 200-299)
//         if (response.status !== 200) {
//             console.log('Looks like there was a problem. Status Code: ' + response.status);
//             return;
//         }
//         // Преобразуем ответ в формат JSON
//         return response.json();
//     })
//     .then((data) => {
//         a = [...data];
//         return console.log(a);
//     })
//     .catch((error) => {
//         // Обрабатываем ошибки
//         console.error('Произошла ошибка:', error);
//     });
// function postData(url, data) {
//     const requestOptions = {
//         method: 'Post',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     };

//     return fetch(url, requestOptions)
//         .then((response) => {
//             if (response.status !== 200) {
//                 console.log('Looks like there was a problem. Status Code: ' + response.status);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log('Данные после POST-запроса:', data);
//             return data;
//         })
//         .catch((error) => {
//             console.error('Произошла ошибка:', error);
//             throw error; // Передаем ошибку дальше для обработки в вызывающем коде
//         });
// }

// // Использование функции
// const url = 'https://657c4aa6853beeefdb991ce8.mockapi.io/test';
// const postDataExample = {
//     key1: 'value1',
//     key2: 'value2',
// };

// postData(url, postDataExample)
//     .then((data) => {
//         console.log('Функция выполнена успешно:', data);
//     })
//     .catch((error) => {
//         console.error('Произошла ошибка при выполнении функции:', error);
//     });

// const data = {
//     id: '2',
// };
// fetch('https://657c4aa6853beeefdb991ce8.mockapi.io/test', {
//     method: 'Get',
//     headers: {
//         'Content-Type': 'application/json',
//         // Другие заголовки, если необходимо
//     },
// })
//     .then((data) => {
//         return data.json();
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error('Error', error);
//     });
// setTimeout(() => {
//     fetch('https://657c4aa6853beeefdb991ce8.mockapi.io/test')
//         .then((response) => {
//             if (response.status !== 200) {
//                 console.log('Status:', response.status);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.error('Error', error);
//         });
// }, 1000);

async function fetchData(id) {
    try {
        const response = await fetch('https://657caa6853beeefdb991ce8.mockapi.io/test', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
        });
        if (!response.ok) {
            console.log('Status:', response.status);
        }
        const responseData = await response.json();
        console.log('data:', responseData);
        return responseData;
    } catch (error) {
        console.log('Error', error);
    }
}
fetchData({ task: '1234' });
