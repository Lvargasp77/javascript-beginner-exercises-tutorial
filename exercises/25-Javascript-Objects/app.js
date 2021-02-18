var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
    var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    
    //To-Do: loop and add; consider nested loops
    //Hint: use the anArray variable to get all of the lucky numbers
    for(var i = 0; i < anArray.length; i++){
        for(var j = 0; j < anArray[i].length; j++){
            sumOfAllLuckyNumbers += anArray[i][j];
        }
    }
    return sumOfAllLuckyNumbers;
}

//Enter all your code here:
//Changing the fourth lucky number of John Doe to 33
person.lucky_numbers.pop();
person.lucky_numbers.push(33);

//Create a new person
function createPerson(name, lastname, age, gender, lucky_numbers, significant_other) {
    this.name= name,
    this.lastname= lastname,
    this.age= age,
    this.gender= gender,
    this.lucky_numbers= lucky_numbers,
    this.significant_other= significant_other
}

//New person
var person3 = new createPerson('Jimmy', 'Doe', 13, 'male', [1,2,3,4], null);
//This add de new person to family members.
family.members.push(person3);

//Array of lucky_numbers from family members.
var arrayNumbers = [];
family.members.forEach(member => {
    arrayNumbers.push(member.lucky_numbers);
});


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(arrayNumbers)); 