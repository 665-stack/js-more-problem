// how to remove duplicate element from array;
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'abul'];
function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

//amra atodin jebabe for loop liktam, sheta na likhe aro shortcurt babe likha jay.  jamon ------
const doubleNames = ['shahin', 'mahmodul', 'akash', 'rayhan', 'roman', 'rifat', 'akash', 'shahin', 'junayed', 'naeem', 'oporbo', 'rayhan']
function removeDoubleNames(names2) { // another way to write for loop condition
    const singleNames = [];
    for (const element2 of names2) {
        console.log(element2)
        if (singleNames.indexOf(element2) == -1) {
            singleNames.push(element2);
        }
    }
    return singleNames;
}
const singleNameslist = removeDoubleNames(doubleNames);
console.log(singleNameslist);
// how to remve duplicate number element from array
const duobleNumbers = [1, 3, 4, 5, 2, 6, 2, 9, 16, 7, 4, 8, 9, 7];
function removeDuplicateNumbers(duobleNumbers) {
    const uniqueNums = [];
    for (const element of duobleNumbers) {
        console.log(element)
        if (uniqueNums.indexOf(element) == -1) {
            uniqueNums.push(element);
        }
    }
    return uniqueNums;
}
const singleNumbers = removeDuplicateNumbers(duobleNumbers);
console.log(singleNumbers);