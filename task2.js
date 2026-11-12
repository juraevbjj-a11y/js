/* 
    Сделать функцию getSeason которая принимает 2 параметра: month, temperature
    сделать проверку чтобы функция принимала только числа (иначе вылетает ошибка 
    - Неверный Тип данных)
    сделать проверку если месяц введен НЕ в промежутке 1 и 12, то выводить сообщение 
    Ошибка - такого месяца нету
    Затем проверки следующие
    если месяц 12 1 и 2 и темп <=5 - то это зима
    если месяц между 3 и 5 и темп <20 - то это весна
    если месяц между 6 и 8 и темп >20 - то это лето
    если месяц между 9 и 11 и темп 5 - 20 - то осень
    в противной случае - несоответствия сезона
*/



while(true){
    const v_month = require('prompt-sync')();
    global.input_month = v_month('Месяц: ');
    if(isNaN(input_month)){
        console.log('Ошибка -  неверный тип данных.');    
    }else{ 
        if(input_month > 0 && input_month < 13){
            const v_temperatue = require('prompt-sync')();
            global.input_temperature = v_temperatue('Температура: ');
            break;
        }else{
            console.log('Ошибка -  не тот месяц');
        }
    }
}
// console.log(input_month + '---' + input_temperature);

function getSeason(in1, in2){
    if(in1 == 12 || in1 == 1 || in1 == 2){
        if(in2 <= 5){
            return 'Это зима';
        }else{
            return 'Несоответсвие сезона';
        }
    }
    else if(in1 == 3 || in1 == 4 || in1 == 5){
        if(in2 < 20){
            return 'Это весна';
        }else{
            return 'Несоответсвие сезона';
        }
    }
    else if(in1 == 6 || in1 == 7 || in1 == 8){
        if(in2 > 20){
            return 'Это лето';
        }else{
            return 'Несоответсвие сезона';
        }
    }
    else if(in1 == 9 || in1 == 10 || in1 == 11){
        if(in2 == 5 || in2 == 20){
            return 'Это осень';
        }else{
            return 'Несоответсвие сезона';
        }
    }
    else{
        return 'Несоответсвие сезона';
    }
}
console.log(getSeason(input_month, input_temperature));
