
//Your code above ^^^
arraySong = ['let it be,', 'let it be,', 'let it be,', 'let it be,', 'words of wisdom,', 'let it be,', 
            'let it be,', 'let it be,', 'let it be,', 'let it be,', 'there will be an answer,', 'let it be']

function sing() {
    let song = ''
    for(element in arraySong){
        song += arraySong[element].toString()
    }
    return song;
}

console.log(sing());

