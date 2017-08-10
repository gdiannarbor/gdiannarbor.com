var amountOfNumbersToCheck = 3;
var numberICareAbout = 3;

for (var i = 1; i <= 110; i++) {
    if (i % numberICareAbout === 0) {
        console.log(i);
    }
}











var user1 = {
    username: 'ebergman',
    short: true,
    hair: 'red',
    age: 27,
    favoriteAnimals: [ 'cats', 'dogs', 'dragons' ],
    birthday: { month: 'October', day: 30, year: 1989 }
}

var user2 = {
    username: 'rbergman',
    short: true,
    hair: 'red',
    e
    birthday: { month: 'October', day: 24, year: 1964 }
}

var allUsers = [ user1, user2 ];


var birthdates = [
    { month: 10, day: 15, year: 1978 },
    { month: 12, day: 25, year: 2013 }
]


console.log(user.birthday.year);
user.hobby = 'video games';

user.hobby















// var kittensUpForAdoption = 10;

// while (kittensUpForAdoption > 0) {

//     if (kittensUpForAdoption === 1) {
//         console.log('There is ' + kittensUpForAdoption + ' kitten left for adoption');
//     }
//     else {
//         console.log('There are ' + kittensUpForAdoption + ' kittens left for adoption');

//     }

//     kittensUpForAdoption -= 1;
// }

// console.log('All kittens have been adopted!')







// for (var i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(' Fizz');
//   } 
//   else if (i % 5 === 0) {
//     console.log(' Buzz');
//   } 
//   else {
//     console.log(i);
//   }
// }


























function kittenAdoption() {

    var kittensUpForAdoption = 10;

    while (kittensUpForAdoption > 0) {
        if (kittensUpForAdoption === 1) {
            console.log('There is ' + kittensUpForAdoption + ' kitten left up for adoption');
        }
        else {
            console.log('There are ' + kittensUpForAdoption + ' kittens left up for adoption');
        }

        aKittenWasAdopted();
    }

    console.log('All kittens have been adopted!')

    function aKittenWasAdopted() {
        kittensUpForAdoption -= 1;
    }
}
