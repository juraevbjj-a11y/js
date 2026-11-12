function game(){
    const ar = [1, 2, 3];
    while(true){
        let a1 = 1;
        console.log('Выберите цифры для нужного варианта:  <1 - камень>  <2 - ножница>  <3 - бумага> ');
        if(a1 !== 1 && a1 !== 2){
            console.log('Вводите только то что есть в варианте!')
        }
        else {
            console.log(`Ты:`);
            break;
        }
    }
}

game();