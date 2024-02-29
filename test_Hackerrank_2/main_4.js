process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = '';
process.stdin.on('data', function (chunk) {
    input += chunk;
});
process.stdin.on('end', function () {
    // Здесь начинается обработка введенных данных
    console.log('Введенные данные:');
    console.log(input);
    // Пример: Разбиваем введенные данные на строки
    var lines = input.split('\n');
    console.log('Количество строк:', lines.length);
});
