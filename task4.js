/* 
    Есть строка 
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    Сделать функцию, которая генерирует рандомный пароль по его длине
    Например, я вызываю функцию generatePassword(4)
    Мне печатается пароль из рандомных значений длиной 4
*/

const words = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

function generatePassword(n){
    for(i=0; i<n; i++){
        const pass = Math.floor(Math.random() * words.length);
        // process.stdout.write(words[pass]);
    }
}

generatePassword(11);