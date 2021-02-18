var total = prompt('How many km are left to go?');

// Your code below:
// Your code below:
if(total > 100) {
    console.log('Are we there yet?');
}else if(total > 50) {
    console.log('We´ll be there in 5 minutes.');
}else if( total <= 50) {
    console.log('Im parking, I see you right now.')
}else{
    console.log('Enter a value');
}