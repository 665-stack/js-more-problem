// if I want to reverse full main string
const greetings = "Hello, how are you?";
let reverse = '';
function reverseString(text) {
    for (const letter of text) {
        console.log(letter);
        reverse = reverse + letter;
    }
    console.log(reverse);
    return reverse;
}
const reversed = reverseString(greetings);
console.log(reversed);

// another one example
/* const greetings2 = 'I love you';
let reverse2 = '';
function reverseString2(text2) {
    for (const char of text2) {
        console.log(char);
        reverse2 = char + reverse2;
    }
    console.log(reverse2);
    return reverse2;
}
const reversed2 = reverseString2(greetings2);
console.log(reversed2); */