
        // 1. Ways to print in javascript
        //alert('me');
        //document.write('this is document write');
        
        // 2.Javascript console API
        // console.log('Hello World');
        // console.warn('This is a warning');
        // console.error('This is an error');



//1.Stack
const myStack = [];
myStack.push('a');
myStack.push('b');
console.log(myStack);
myStack.pop();
console.log(myStack);


//2. Queue
const queue = [];
queue.push('a');
queue.push('b');
queue.push('c');
queue.push('d');
console.log(queue);
queue.shift();
console.log(queue);
queue.shift();
console.log(queue);


//3. Recursion
const factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
};
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));


// 4. Data types in JavaScript
var number1 = 5;
var number2 = 10;
console.log(number1 + number2);

var str1 = 'Hello';
var str2 = 'World';
console.log(str1 + ' ' + str2);

var marks = {
    Ahmed: 65,
    Ali: 70,
    Zain: 80
};
console.log(marks);

var a =true;
var b =false;
console.log(a,b);

var und;
console.log(und);

var n = null;
console.log(n);

var arr = [1, 2, "Ali", 3, 4];
console.log(arr);

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1= avg(4, 6);
c2= avg(14, 16);
console.log(c1, c2);

let myArr = ['fan', 'camera', 35, true, null];
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.push("Ahmed");
console.log(myArr);


console.log(document);        
console.log(document.title);  
console.log(document.body);   

const title = document.getElementById('title');
const cards = document.getElementsByClassName('card');
const btn    = document.querySelector('#submit');      
const allBtn = document.querySelectorAll('.btn');
const allDivs = document.querySelectorAll('div');



///ES6 features in Js///

/// let and const ///
let cartTotal = 0;    //(value in let can be changed later)
const Tax_Rate = 0.15;  //(value in const cannot be changed or reassigned later)

cartTotal = cartTotal + 50;
console.log(cartTotal);

const prices = [600, 550, 1290];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
console.log(total);


/////////////////////////////////////////////
///Arrow Functions///
const greed = (name) => "Hello " + name;
console.log(greed('Ahmed'));

const greed = name => 'Hello ' + name;
console.log(greed('Ali'));


const formatPrice=(price) => price.toFixed(2);
const isExpensive=(price) => price > 1000;
const products = [
  { id: 1, name: "iPhone 15", price: 699 },
  { id: 2, name: "iMac 24", price: 1299 },
  { id: 3, name: "Mouse", price: 49 }
];
const expensiveProducts=products.filter(p => isExpensive(p.price));
console.log(expensiveProducts.map(p => `${p.name} ($${formatPrice(p.price)})`));
//////////////////////////////////////////////

//////////////////////////////////////////////
const menuItems=[
  {name:'Pizza', price: 150},
  {name:'Burger', price: 100},
  {name:'Pastry', price: 80}
]

const affordableItems=menuItems.filter(item=>item.price<100);
console.log(affordableItems);

const names=menuItems.map(item=>item.name);
console.log(names);

const totalPrice=menuItems.reduce((sum, item)=>sum+item.price, 0);
console.log(totalPrice);

////////////////////////////////////////////////

////////////////////////////////////////////////
///Template literals///
const name='Irshad';
const price=1000;
console.log(`Hello ${name}, the order of $${price} has been confirmed.`);
///////////////////////////////////////////////

///////////////////////////////////////////////
let weight=function(m,g=9.8){
  return m*g;
}
console.log(weight(7,7));
////////////////////////////////////////////////


let person={name:'Ahmed',age:25};
let address={city:'Hyderabad', country:'India'};
let p1={...person,...address};
console.log(p1);
console.log(person);
////////////////////////////////////////////////


////////////////////////////////////////////////
class Diamond{
  constructor(name){
    this.name=name;
  }
  getName(){
     return this.name;
  }
  setName(name){
    this.name=name;
  }
}
let student1=new Diamond('Ahmed');
console.log(student1.getName());

student1.setName('Ali');
console.log(student1.getName());
////////////////////////////////////////////////////


const cities=['Hyderabad','Karachi','Lahore'];
const [a,b,c]=cities;
console.log(cities); //or console.log(a,b,c);


const a=5;
const b=10;
function sum(a,b){
  return a+b;
}
console.log(sum(a,b));


const item = { id: 1, name: "iPhone 15", price: 699.99, quantity: 2 };
const { name, price, quantity } = item;
console.log(`${name} subtotal: $${(price * quantity).toFixed(2)}`);
const user = [42, "manager", true];
const [, role, isAdmin] = user;
console.log(role, isAdmin);


let cart = [{ id: 1, name: "Mouse", quantity: 1 }];
const newItem = { id: 2, name: "Headphones", quantity: 1 };
cart = [...cart, newItem];
cart = cart.map(item => item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item);

function sumPrices(...prices) {
  return prices.reduce((sum, p) => sum + p, 0);
}
console.log(sumPrices(10, 20, 30));

/////////////////////////////////////////////////////////////////////
const products = [
  { name: "iPhone 15", price: 699 },
  { name: "iMac 24", price: 1299 },
  { name: "Mouse", price: 49 },
];
const names = products.map(p => p.name); 
const under100 = products.filter(p => p.price < 100);
const total = products.reduce((sum, p) => sum + p.price, 0); 
const cart = [
  { price: 49, quantity: 2 },
  { price: 59, quantity: 1 }
];
const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//////////////////////////////////////////////////////////////////////

// export default function greetUser(name){
//   return `Welcome, ${name}!`;
// }