/* 
    Сделать функцию addNumber которая принимает число в качестве параметра и: 
    1) записывает это число в массив
    2) печатается сообщение что такое-то число занесено в массив (через
    интерполяцию)
    В этом же задании сделать функцию calculateAverage которая считает среднее значение 
    из нашего массива и выводит значенzие на консоль до 2 знаков после запятой
*/

let arr = [];

function addNumber(){
    console.log('Для выхода введите: exit');
    while(true){
        const a1 = require('prompt-sync')();
        const input = a1('Введите число: ');
        const b1 = Number(input);
        if(input == 'exit'){
            break;
        }else{
            arr.push(b1);
            console.log(`Число ${input} добавлено в массив.`);
        }        
    }    
}
    
let val = 0;
let result = 0;
function calculateAverage(ar){
    for(i=0; i<ar.length; i++){
        val += ar[i];
        result = val / ar.length;
    }
    // let resultat = result.toFixed();
    console.log(result.toFixed(2));
}

addNumber();
calculateAverage(arr);