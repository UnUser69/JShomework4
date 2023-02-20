/*Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/

let a = [];
let sum = 0;
let min = 0;
let max = 0;
for ( let i = 0; i < 5; i++ ) {
    arr[i] = Math.floor(Math.random() * 10);
    sum += arr[i]
    if (arr[i] > arr[i + 1]) max = arr[i];
    else min = arr[i];
    
}
console.log(arr);
console.log(sum);
console.log(min);
const findNumberThree = arr.indexOf(3) != -1;
console.log(findNumberThree);


