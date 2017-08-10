// Function example 1

// exampleOneSetup();
exampleOneNotMeaningful();
// exampleOneGood()



function exampleOneSetup() {

    var kittenAdoptionNotice = 'Kittens remaining for adoption: ';
    var numberOfKittensInLiter = 7;
    var numberOfKittensAdopted = 0;
    var numberOfKittensRemaining = numberOfKittensInLiter - numberOfKittensAdopted;

    console.log(kittenAdoptionNotice + numberOfKittensRemaining);

    numberOfKittensAdopted = 1;
    numberOfKittensRemaining = numberOfKittensInLiter - numberOfKittensAdopted;

    console.log(kittenAdoptionNotice + numberOfKittensRemaining);

    numberOfKittensAdopted = 2;
    numberOfKittensRemaining = numberOfKittensInLiter - numberOfKittensAdopted;

    console.log(kittenAdoptionNotice + numberOfKittensRemaining);

}

// ex 1, not meaningful

function exampleOneNotMeaningful() {

    var kittenAdoptionNotice = 'Kittens remaining for adoption: ';
    var numberOfKittensInLiter = 7;
    var numberOfKittensAdopted = 0;
    var numberOfKittensRemaining = numberOfKittensRemainingNotMeaningful(numberOfKittensInLiter, numberOfKittensAdopted);

    console.log(kittenAdoptionNotice + numberOfKittensRemaining);

    numberOfKittensAdopted = 1;
    numberOfKittensRemaining = numberOfKittensInLiter - numberOfKittensAdopted;

    console.log(kittenAdoptionNotice + numberOfKittensRemaining);

    numberOfKittensAdopted = 2;
    numberOfKittensRemaining = numberOfKittensInLiter - numberOfKittensAdopted;

    console.log(kittenAdoptionNotice + numberOfKittensRemaining);

}


function numberOfKittensRemainingNotMeaningful(numberOfKittensInLiter, numberOfKittensAdopted) {
    return numberOfKittensInLiter - numberOfKittensAdopted;
}



// ex 1, meaningful and offers code reuse
function exampleOneGood() {

    var numberOfKittensInLiter = 7;
    var numberOfKittensAdopted = 0;

    updateDisplayWhenKittenAdopted(numberOfKittensInLiter, numberOfKittensAdopted);

    numberOfKittensAdopted = 1;
    updateDisplayWhenKittenAdopted(numberOfKittensInLiter, numberOfKittensAdopted);

    numberOfKittensAdopted = 2;
    updateDisplayWhenKittenAdopted(numberOfKittensInLiter, numberOfKittensAdopted);
}

function updateDisplayWhenKittenAdopted(numberOfKittensInLiter, numberOfKittensAdopted) {
    var kittenAdoptionNotice = 'Kittens remaining for adoption: ';

    var numberOfKittensRemaining = numberOfKittensInLiter - numberOfKittensAdopted;
    console.log(kittenAdoptionNotice + numberOfKittensRemaining);
}





var firstName = 'Erin';
var middleName = 'Elizabeth';
var lastName = 'Bergman';

console.log(nameCombiner(firstName, lastName));

var starWarsIsCool = true;

starwars();


function starwars() {
var starWarsIsCool2 = true;
    console.log(starWarsIsCool);
}


var mathStuff;
if (mathStuff) {
    console.log('Slides are wrong');
}

console.log(nameCombiner('Erin', 'Bergman'));

function nameCombiner(a, b) {
    return a + ' ' + b;
    // console.log(a + ' ' + b);
}



var age = 30;

if (age >= 35) {
  console.log('You can vote AND run for President!');
} else if (age >= 30) {
  console.log('You can vote AND run for the Senate!');
} else if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('At least you can drive');
}




var stringAge = '18';
var numberAge = 18;

if (stringAge === numberAge) {
  console.log(true);
}

