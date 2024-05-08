
function countElements (array){
i=0
while (array[i]!== undefined){
    if (array[i] !== undefined){
        console.log(array[i])
        i++
    }
        

    
}
    console.log("l'array è lungo ")
    return i;

}


const mario = ['mela',  'bamana', 'pera' , 'anguria']


console.log(countElements(mario));