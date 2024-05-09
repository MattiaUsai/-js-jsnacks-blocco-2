
// --CREO UNA FUNZIONE CHE TROVI INDICE DI UN ELEMENTO ALL'INTERNO DI UN ARRAY
// --ALL'INTERNO DELLA FUNZIONE CI SARA UN CICLO CHE CONTROLLERA UNO A UNO GLI ELEMENTI ALL'INTERNO DI UN ARRAY 
// -- QUANDO L'ELEMENTO ALL'INTERNO DELL ARRAY VIENE TROVATO ALLORA RETURN SARA UGUALE ALL'INDICE DELL'ELEMENTO
// SE NELL'ARRAY NON ESISTE QUELL'ELEMENTO ALLORA RETURN = -1

function findElement (array,element){
    i=0; //DICHIARO I = 0
    while(array[i] !== element){ //FACCIO UN CICLO WHILE CON CONDIZIONE CHE L'ELEMENTO [I] SIA DIVERSO DA ELEMENT 
        i++ ;//INCREMENTO LA I DI UNO A OGNI CICLO
        if (array.length<i) return -1;
        
    }
    return i; //RESTITUISCI LA I 
}

const input = ['mela',  'banana', 'pera' , 'anguria', 'kiwi', 'pesca']//CRAO UNA ARRAY CON UN TOT DI ELEMENTI DENTRO

console.log(input)

console.log(`${findElement(input, 'anguria')}`)