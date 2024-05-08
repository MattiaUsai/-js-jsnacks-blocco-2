
function countElements (array){//CREO UNÀFUNZIONE PER CONTARE GLI ELEMENTI ALL'INTERNO DELL'ARRAY

    for ( i=0 ;  array[i]!== undefined; i++){//CREO UN CICLO FOR CHE INCREMENTI i DI 1 FINCHE L'ELEMENTO DELL'ARRAY IN POSIZIONE I NON SARA UGUALE À UNDEFINED
    
        if (array[i] !== undefined) console.log(array[i]); //STAMPO IL VALORE DELL'ARRAY [i]
    }

    return i;//RITORNO IL VALORE DELL'ARRAY CHE HO DOPO CHÈIL CICLO HA FINITO
}


const mario = ['mela',  'banana', 'pera' , 'anguria', 'kiwi', 'pesca']//CRAO UNA ARRAY CON UN TOT DI ELEMENTI DENTRO


console.log(countElements(mario));//STAMPO IN CONSOLE IL NUMERO DEGLI ELEMENTI CHE CI SONO SLL'UNTERNO DELL'ARRAY