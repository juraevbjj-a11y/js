/* 
    Сделать калькулятор - функция calculator с 3 параметрами(a,b,operator)
    operator +-/* - сделать действия на каждый оператор
    Сделать проверку что параметры только числа
    return каждого рез-та
    если b = 0, то выводить ошибку на ноль делить нельзя
    Ошибка: неизвестный оператор
*/
let b1;
let b2;
let b3;
while(true){
    let a1 = require('prompt-sync')();
    b1 = a1('Введите первое число: ');
    if(isNaN(b1)){
        console.log('Ошибка: неизвестный оператор');
    }
    else{
        break
    }
}
const res1 = b1
while(true){
    const a2 = require('prompt-sync')();
    b2 = a2('Введите второе число: ');
    if(isNaN(b2)){
        console.log('Ошибка: неизвестный оператор');
    }
    else{
        break
    }
}
const res2 = b2;

while(true){
    const a3 = require('prompt-sync')();
    b3 = a3('Введите оператор / * + -  : ')
    if(b3 !== '/' && b3 !== '*' && b3 !== '+' && b3 !== '-'){
        console.log('Ошибка: неизвестный оператор')
    }
    else{
        break;
    }
}
const res3 = b3;
function aq(a, b, c){
    try{
        if(b == 0 && c == '/'){
            throw new Error()
        }
    }catch(error)
    {
        console.log('На ноль не надо делить!' + error.message)
    }
    if(c == '/'){
        return Number(a) / Number(b);    
    }
    else if(c == '*'){
        return Number(a) * Number(b);    
    }
    else if(c == '+'){
        return Number(a) + Number(b);    
    }
    else if(c == '-'){
        return Number(a) - Number(b);    
    }
}

console.log(aq(res1, res2, res3));
