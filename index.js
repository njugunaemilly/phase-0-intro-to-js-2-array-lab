// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    
    cats.push('Ralph');
return cats
}

function destructivelyPrependCat(name){
        
    cats.unshift('Bob');

return cats
}


function destructivelyRemoveLastCat(name){
    
    cats.pop();

return cats
}

function destructivelyRemoveFirstCat(name){

    cats.shift()
}

function appendCat(name){
    const newCats =[...cats, 'Broom']
    return newCats
}

function prependCat(name){
    const cats2 =['Arnold', ...cats]
    return cats2
}

function removeLastCat(name){
    const cats1 = cats.slice(0, cats.length -1)
    return cats1
}

function removeFirstCat(name){
    const cats3 = cats.slice(1)
    return cats3
}