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