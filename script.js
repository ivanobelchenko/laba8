//Задание 1
console.log('Задание 1')
let n = prompt('Введите количество овец:');
let ovechka = ''
for (let i = 1; i <= n; i++) {
    ovechka += i + " овечка..."
}
console.log(ovechka)
// Задание 2
console.log('Задание 2')
for (let i = 0; i <= 15; i++){
    if (i % 2 == 0) console.log(i + ' чётное')
    else console.log(i + ' нечётное')
}
// Задание 3
console.log('Задание 3')
let i = 1;
let stroka = ''
while(i <= 8) {
    if (i % 2 == 0) {
        stroka += "# # # # \n";
    } 
    else {
        stroka += " # # # #\n";
    }
    i++;
}
console.log(stroka);
// Задание 4
console.log('Задание 4')
let numbers = [0, -3, 1];
let array = '';
for(let i = 0; i < numbers.length; i++) {
    array += numbers[i] + ' ';
}
console.log(array);
for(let i = 0; i < numbers.length - 1; i++) 
{
    for(let j = 0; j < numbers.length - 1 - i; j++) 
    {
       if(numbers[j + 1] < numbers[j]) 
       {
           let t = numbers[j + 1];
           numbers[j + 1] = numbers[j];
           numbers[j] = t;
       } 
    }
}
array = '';
for(let i = 0; i < numbers.length; i++) {
    array += numbers[i] + ' ';
}
console.log(array);
// Задание 5
console.log('Задание 5')
numbers = [2, -1, 0, -5, -4];
array = '';
for(let i = 0; i < numbers.length; i++) {
    array += numbers[i] + ' ';
}
console.log(array);
let max = numbers[0];
for(let i = 0; i < numbers.length; i++) {
    if(max < numbers[i]) max = numbers[i];
}
console.log(max);