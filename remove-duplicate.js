// how to remove duplicate elements from array
const names = ['babul', 'abul', 'molan', 'milon', 'hiron', 'abul', 'babul', 'ashad'];
function duplicateNames(duobleNames) {
    const uniqueNames = [];
    for (let i = 0; i < duobleNames.length; i++) {
        const element1 = duobleNames[i];
        console.log(element1);
        if (uniqueNames.indexOf(element1) == -1) {// 
            uniqueNames.push(element1);
        }
    }
    return uniqueNames;
}
const getUniqueNames = duplicateNames(names);
console.log('unique names :', getUniqueNames);
// for loop ta aro shortcut kore likte pari. jemon ----
// remove duplicate elements from array
const names2 = ['babul', 'abul', 'molan', 'milon', 'hiron', 'abul', 'babul'];
function duplicateNames2(duobleNames2) {
    const uniqueNames2 = [];
    for (const element2 of duobleNames2) {
        console.log(element2);
        if (uniqueNames2.indexOf(element2) == -1) {
            uniqueNames2.push(element2);
        }
    }
    return uniqueNames2;
}
const getUniqueNames2 = duplicateNames2(names2);
console.log('unique names 2 :', getUniqueNames2)
// remove duplicate numbers from array 
function duplicateNumbers(numbers1) {
    const uniqueNumbers = [];
    for (const element3 of numbers1) {
        if (uniqueNumbers.indexOf(element3) == -1) {
            uniqueNumbers.push(element3);
        }
    }
    return uniqueNumbers;
}
const getUniqueNumbers = duplicateNumbers([10, 20, 30, 40, 50, 60, 70, 80, 20, 30, 70, 90, 100]);
console.log(getUniqueNumbers);