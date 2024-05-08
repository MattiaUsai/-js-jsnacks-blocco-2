
function countElements (array){

    for ( i=0 ;  array[i]!== undefined; i++){
    
        if (array[i] !== undefined) console.log(array[i]);     
    }
    console.log("l'array è lungo ")
    return i;
}


const mario = ['mela',  'bamana', 'pera' , 'anguria', 'anguriaf', 'anguriae']


console.log(countElements(mario));