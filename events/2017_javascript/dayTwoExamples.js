// Function example 1

// exampleOneSetup();
// exampleOneNotMeaningful();
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

    var kittenAdoptionNotice = kittenAdoptionNoticeNotMeaningful();
    var numberOfKittensInLiter = numberOfKittensInLiterNotMeaningful();
    var numberOfKittensAdopted = numberOfKittensAdoptedNotMeaningful();
    var numberOfKittensRemaining = numberOfKittensRemainingNotMeaningful(numberOfKittensInLiter, numberOfKittensAdopted);

    console.log(kittenAdoptionNotice + numberOfKittensRemaining);

    numberOfKittensAdopted = 1;
    numberOfKittensRemaining = numberOfKittensInLiter - numberOfKittensAdopted;

    console.log(kittenAdoptionNotice + numberOfKittensRemaining);

    numberOfKittensAdopted = 2;
    numberOfKittensRemaining = numberOfKittensInLiter - numberOfKittensAdopted;

    console.log(kittenAdoptionNotice + numberOfKittensRemaining);

}

function kittenAdoptionNoticeNotMeaningful() {
    return 'Kittens remaining for adoption: ';
}

function numberOfKittensInLiterNotMeaningful() {
    return 7
}

function numberOfKittensAdoptedNotMeaningful() {
    return 0;
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