/* 
    Сделать функцию addNumber(number) - она добавляет в массив число и пишет сообщение "Число " + number + " добавлено в массив." (Сделать через интерполяцию обязательно)
    Сделать функцию analyzeNumbers() - анализирует сколько чисел в массиве (который у нас создан в предыдущем пункте) положительных, отрицательных и 0.

*/

let arr = [];
let input;
let plus = 0;
let minus = 0;
let zero = 0;

function addNumber(){
    while(true){
        const a1 = require('prompt-sync')();
        input = a1('Введите число: ');
        if(input == 'exit'){
            break;
        }else if(!isNaN(input)){
            arr.push(input);
            console.log(`Число ${input} добавлено в массив.`);
        }else{
            console.log('Ошибка! Введите только число!');
        }    
    }    
}


function analyzeNumbers(ar){
    for(i=0; i < ar.length; i++){
        if(ar[i] >= 0){
            plus = plus + 1;
            if(ar[i] == 0){
                zero = zero + 1;
            }
        }
        else if(ar[i] < 0){
            minus = minus + 1;
        }
    }
    console.log( `Количество чисел в массиве: ${arr.length} шт.`);
    console.log( `Количество положительных чисел: ${plus}`);
    console.log( `Количество отрицательных чисел: ${minus}`);
    console.log( `Количество нулей чисел: ${zero}`);
}
addNumber();
analyzeNumbers(arr);