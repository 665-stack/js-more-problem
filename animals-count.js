function animalCount(miles) {
    if (miles <= 10) {
        const totalAnimal = 10 * miles;
        return totalAnimal;
    }
    else if (miles > 10 && miles <= 20) {
        const totalAnimal = 100 + (miles - 10) * 50;
        return totalAnimal;
    }
    else {
        const totalAnimal = 600 + (miles - 20) * 100;
        return totalAnimal;
    }

}
const animalForMiles = animalCount(34);
console.log(animalForMiles);
// another way
function praniCount(miles1) {
    const animaleDensityFirst10Miles = 10;
    const animaleDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles1 <= 10) {
        const count = miles1 * animaleDensityFirst10Miles;
        return count;
    }
    else if (miles1 <= 20) {
        const first10 = 10 * animaleDensityFirst10Miles;
        const restMiles = miles1 - 10;
        const second10 = restMiles * animaleDensitySecond10Miles;
        const totalAnimal2 = first10 + second10;
        return totalAnimal2;
    }
    else {
        const first10 = 10 * animaleDensityFirst10Miles;
        const second10 = 10 * animaleDensitySecond10Miles;
        const restMiles = miles1 - 20;
        const restdenseAnimal = restMiles * animalDensityRestMiles;
        const totalAnimal2 = first10 + second10 + restdenseAnimal;
        return totalAnimal2;

    }

}
const praniForMiles1 = praniCount(34);
console.log('another way', praniForMiles1);