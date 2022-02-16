// calculate the total cost of the products in shopping cart
const products = [
    { name: 'laptop', price: 43000 },
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 55000 }
]
let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log('Your total bill :', totalPrice);

const cart = [
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 1 }
]
let totalCartPrice = 0;
for (const product of cart) {
    const quantity = product.price * product.quantity;
    totalCartPrice = totalCartPrice + quantity;
}
console.log('Your total cart cost is :', totalCartPrice);