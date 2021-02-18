// Your code here:
const bottlesInTheWall = () => {
    let bottle = 99;
    let song = ''

    for(let i = 98; i >= 0; i--){
        if(bottle === 1){
            song += bottle + ' bottle of milk on the wall, ' + bottle + ' bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. \nNo more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.'

        }else if(bottle >= 2){
            song += bottle + ' bottles of milk on the wall, ' + bottle + ' bottles of milk. Take one down and pass it around, ' + i + ' bottles of milk on the wall.\n'
            
        }
        --bottle;
    }
    bottle = 99;
    return song;
}


console.log(bottlesInTheWall());