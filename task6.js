/* 
    Сделать игру камень ножницы бумага 
    ф-ция принимает выбор игрока
    если у тебя и у компа одинаковые значение - пишет Ничья
    если ты выиграл - пишет ты выиграл
    если проиграл - ты проиграл
    компьютер загадывает рандомное значение - камень или ножницы или бумага
    rock - paper - scissors
*/

function game(){
    const ar = [1, 2, 3];
    while(true){
        const a1 = require('prompt-sync')();
        let inputA1 = a1('Выберите цифры для нужного варианта:  <1 - камень>  <2 - ножница>  <3 - бумага> ');
        let input1 = Number(inputA1);
        let pc = ar[Math.floor(Math.random() * 3)];

        if(input1 !== 1 && input1 !== 2 && input1 !== 3){
            console.log('Вводите только то что есть в варианте!')
        }
        else if(input1 == 1 && pc == 1){
            console.log(`Ты: ${input1}`);
            console.log(`Компьютер: ${pc}`);
            console.log('ничья')
            break;
        }
        else if(input1 == 2 && pc == 2){
            console.log(`Ты: ${input1}`);
            console.log(`Компьютер: ${pc}`);
            console.log('ничья!');
            break;
        }
        else if(input1 == 3 && pc == 3){
            console.log(`Ты: ${input1}`);
            console.log(`Компьютер: ${pc}`);
            console.log('ничья');
            break;
        }
        else if(input1 == 1 && pc == 2){
            console.log(`Ты: ${input1}`);
            console.log(`Компьютер: ${pc}`);
            console.log('Ты выиграл!');
            break;
        }
        else if(input1 == 2 && pc == 3){
            console.log(`Ты: ${input1}`);
            console.log(`Компьютер: ${pc}`);
            console.log('Ты выиграл!');
            break;
        }
        else if(input1 == 3 && pc == 1){
            console.log(`Ты: ${input1}`);
            console.log(`Компьютер: ${pc}`);
            console.log('Ты выиграл!');
            break;
        }
        else if(input1 == 1 && pc == 3){
            console.log(`Ты: ${input1}`);
            console.log(`Компьютер: ${pc}`);
            console.log('Ты проиграл (');
            break;
        }
        else if(input1 == 2 && pc == 1){
            console.log(`Ты: ${input1}`);
            console.log(`Компьютер: ${pc}`);
            console.log('Ты проиграл (');
            break;
        }
        else if(input1 == 3 && pc == 2){
            console.log(`Ты: ${input1}`);
            console.log(`Компьютер: ${pc}`);
            console.log('Ты проиграл (');
            break;
        }
    }
}

game();