/*Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx*/

let str = "x"
console.log(str)
for(let x = 0; x < 20; x++){console.log(str += "x")}