
// --CREO UNA FUNZIONE CHE TROVI INDICE DI UN ELEMENTO ALL'INTERNO DI UN ARRAY
// --ALL'INTERNO DELLA FUNZIONE CI SARA UN CICLO CHE CONTROLLERA UNO A UNO GLI ELEMENTI ALL'INTERNO DI UN ARRAY 
// -- QUANDO L'ELEMENTO ALL'INTERNO DELL ARRAY VIENE TROVATO ALLORA RETURN SARA UGUALE ALL'INDICE DELL'ELEMENTO
// SE NELL'ARRAY NON ESISTE QUELL'ELEMENTO ALLORA RETURN = -1

function findElement (array,element){
    i=0;
    while(array[i]!==element){
        i++
        console.log(array[i])
        if(array.lenght<i) return -1; 

    }
    return i;
}

const mario = ['mela',  'banana', 'pera' , 'anguria', 'kiwi', 'pesca']//CRAO UNA ARRAY CON UN TOT DI ELEMENTI DENTRO

console.log(mario, 'anguria')

const ciao = 'anguria';

console.log(findElement(mario,ciao))