/*Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]*/

const arr = [1, 2, 3, 4, 5, 6, 7];
const index1 = arr.indexOf(5);
const index2 = arr.indexOf(4);
if (index1 !== -1) {arr.splice(index1, 1);}
if (index2 !== -1) {arr.splice(index2, 1);}
console.log(arr);