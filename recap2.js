// find largest element from array
function findLargest(numbers1) {
    let max = numbers1[0];
    for (let i = 0; i < numbers1.length; i++) {
        const element1 = numbers1[i];
        if (max < element1) {
            max = element1;
        }
    }
    return max;
}
const getLargest = findLargest([233, 143, 35, 346, 93, 97, 86, 3, 59, 29, 105, 45]);
console.log("largest number is:", getLargest);
//find smallest element from array
function findSmallest(numbers2) {
    let min = numbers2[0];
    for (let i = 0; i < numbers2.length; i++) {
        const element2 = numbers2[i];
        if (min < element2) {
            min = element2;
        }
    }
    return min;
}
const getSmallest = findSmallest([23, 2, 94, 76, 92, 56, 71, 27, 67, 84, 39, 87, 67, 76, 52]);
console.log("Smallest number is:", getSmallest);
//find even numbers in an array from google
let getEvenNumbers = () => {
    let arr = [4, 5, 7, 8, 14, 45, 76];

    let the_evens = arr.filter(number => number % 2 == 0);
    // document.write('Even Numbers: ' + the_evens);
    console.log("even numbers from google", the_evens)
}

getEvenNumbers();
//find even numbers in an array with myself
function findEven(numbers3) {
    // let even = numbers3[0];
    for (let i = 0; i < numbers3.length; i++) {
        // const element3 = numbers3[i];
        if (evenNumbers = numbers3.filter(numbers3 => numbers3 % 2 == 0)) {
            // return evenNumbers;
        }
    }
    return evenNumbers;
}
const getEven = findEven([23, 8, 75, 76, 46, 12, 98, 99, 78, 65, 93, 59, 22, 80])
console.log("even numbers with myself", getEven)