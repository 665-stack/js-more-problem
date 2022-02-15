//=======find largest number============
function largestElement(numbers) {
    let max = numbers[0];//
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

var largestNumber = largestElement([2, 43, 34, 23, 43, 4, 34, 34, 233]);
console.log('largest number is', largestNumber);

//======== find smallest number=============
function findSmallest(numbers2) {
    let min = numbers2[0];
    for (let i = 0; i < numbers2.length; i++) {
        const element2 = numbers2[i];
        if (element2 < min) {
            min = element2;
        }
    }
    return min;
}
var findNumbers = findSmallest([23, 453, 45, 25, 7, 54, 7]);
console.log('smallest number is :', findNumbers);

//========Even numbers. Code idea from google========
// code is not working
function findEven(numbers3) {
    let result = numbers3[0];
    for (let i = 1; i < numbers3.length; i++) {
        const result = (numbers3 % 2 == 0);
        return result;

    }

}
var findEvenNumbers = findEven([22, 235, 45, 12, 39, 23, 76, 88]);
console.log('even number is', findEvenNumbers);

/* var arr = [4, 5, 7, 8, 14, 45, 76];

function even(a) {
    var ar = [];

    for (var i = 0; i < a.length; i++) {
        ar.push(a[2 * i + 1]);
        return ar;
    }


}
var howma = even([23, 14, 546, 57]);
console.log(howma)

 */
