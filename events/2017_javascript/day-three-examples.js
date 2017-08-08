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