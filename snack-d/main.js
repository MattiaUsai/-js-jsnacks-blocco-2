
function deleteLast (array){
    let lenghta = array.lenght;
    const arrayx = array[lenghta-1];
    return arrayx;
    
}


const mario = ['mela',  'banana', 'pera' , 'anguria', 'kiwi', 'pesca']//CRAO UNA ARRAY CON UN TOT DI ELEMENTI DENTRO
console.log(mario.length);

console.log(deleteLast(mario));
console.log(mario);