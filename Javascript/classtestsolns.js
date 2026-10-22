// Class test solutions

// Section A: Multiple-choice questions
// Q1. What will be the output?
// A. null, number, array
// B. object, number, object
// C. object, NaN, array
// D. undefined, number, object

// Answer: B — typeof null is "object", typeof NaN is "number", typeof [] is "object".


// Q2. Predict the output.
// A. 205, 200, 24
// B. 205, 200, NaN
// C. NaN, 200, NaN
// D. 2203, 403203, 24

// Answer: None of the choices is completely correct.
// The actual output is "2203", 200, and NaN.


// Q3. Which statement about let, const, and var is correct?
// A. var is block-scoped.
// B. let can be redeclared in the same scope without error.
// C. A const object cannot have its properties modified.
// D. let and const are block-scoped, while var is function-scoped.

// Answer: D — let and const are block-scoped; var is function-scoped.


// Q4. What is the output?
// A. Pass, Eligible
// B. Pass, followed by a ReferenceError
// C. ReferenceError, ReferenceError
// D. undefined, undefined

// Answer: B — result is function-scoped and logs "Pass"; status is block-scoped,
// so reading it outside the if block throws a ReferenceError.



// Q5. Which loop is most suitable when you need to iterate over the values of an array?
// A. for...in
// B. for...of
// C. if...else
// D. switch

// Answer: B — for...of iterates over array values.


// Q6. What is the main difference between return and console.log() inside a function?
// A. Both return values to the caller.
// B. console.log() returns the calculated result.
// C. return sends a value back to the caller; console.log() displays a value.
// D. return can only be used in arrow functions.

// Answer: C — return gives a value back to the caller; console.log displays it.


// Q7. What does the rest parameter do in this function?
// A. Converts all arguments into a string.
// B. Collects the arguments into an array.
// C. Expands an existing array into arguments.
// D. Allows only one argument.

// Answer: B — the rest parameter collects arguments into an array.


// Q8. Which statement about arrow functions and "this" is correct?
// A. Arrow functions always bind this to the object that calls them.
// B. Regular functions always bind this to the object in which they are defined.
// C. Arrow functions inherit this from their surrounding lexical context.
// D. Arrow functions cannot access object properties.

// Answer: C — arrow functions inherit this from their surrounding lexical scope.



// Section B: Predict the output

// Q9. Operators and type coercion:
// Predict the output of each statement and explain why the results differ.
// console.log("5" + 2);
// console.log("5" - 2);
// console.log(true + 2);
// console.log(Boolean("false"));
console.log("Q9:");
console.log("5" + 2);          // "52": + concatenates when an operand is a string.
console.log("5" - 2);          // 3: - converts the string to a number.
console.log(true + 2);         // 3: true converts to 1.
console.log(Boolean("false")); // true: every non-empty string is truthy.

// Q10. Scope and variable declarations:
// Write the output in order. Explain why amount and discount behave differently.
// var amount = 100;
// function calculate() {
//     var amount = 200;
//     let discount = 20;
//     if (true) {
//         var amount = 300;
//         let discount = 50;
//         console.log(amount, discount);
//     }
//     console.log(amount, discount);
// }
// calculate();
// console.log(amount);
console.log("Q10:");
var amount = 100;
function calculate() {
    var amount = 200;
    let discount = 20;
    if (true) {
        var amount = 300;
        let discount = 50;
        console.log(amount, discount); // 300 50
    }
    console.log(amount, discount); // 300 20
}
calculate();
console.log(amount); // 100
// var is function-scoped, so the inner var amount changes the function's amount.
// let is block-scoped, so the inner discount exists only inside the if block.



// Q11. Functions and return values:
// What will be printed? Rewrite the function so that result stores the calculated price.
// function calculatePrice(price, quantity) {
//     console.log(price * quantity);
// }
// const result = calculatePrice(100, 3);
// console.log(result);
console.log("Q11:");
function calculatePrice(price, quantity) {
    console.log(price * quantity);
}
const result = calculatePrice(100, 3);
console.log(result); // undefined: calculatePrice logs the product but returns nothing.

function calculatePriceWithReturn(price, quantity) {
    return price * quantity;
}
const calculatedPrice = calculatePriceWithReturn(100, 3);
console.log("Returned price:", calculatedPrice); // 300


// Q12. Array mutation:
// Predict the output. Why are modifications to the array allowed even though it was declared using const?
// const products = ["Milk", "Bread", "Rice"];
// products[1] = "Eggs";
// products.push("Oil");
// console.log(products);
// console.log(products.length);
console.log("Q12:");
const products = ["Milk", "Bread", "Rice"];
products[1] = "Eggs";
products.push("Oil");
console.log(products); // ["Milk", "Eggs", "Rice", "Oil"]
console.log(products.length); // 4
// const prevents reassignment of the products variable, but does not freeze its array.


// Q13. Object methods and this:
// Predict the output. What does this refer to during this method call?
// const employee = {
//     name: "Aman",
//     salary: 30000,
//     showDetails() {
//         console.log(this.name, this.salary);
//     }
// };
// employee.showDetails();
console.log("Q13:");
const employee = {
    name: "Aman",
    salary: 30000,
    showDetails() {
        console.log(this.name, this.salary);
    }
};
employee.showDetails(); // Aman 30000; this refers to employee for this method call.


// Q14. Rest parameters and spread syntax:
// Predict both outputs and explain the difference between the two function calls.
// function addNumbers(...numbers) {
//     return numbers.length;
// }
// const values = [10, 20, 30, 40];
// console.log(addNumbers(values));
// console.log(addNumbers(...values));
console.log("Q14:");
function addNumbers(...numbers) {
    return numbers.length;
}
const values = [10, 20, 30, 40];
console.log(addNumbers(values));   // 1: the array is one argument.
console.log(addNumbers(...values)); // 4: spread passes four separate arguments.


// Section C: Debug the code


// Q15. Fix the variable scope issue:
// The developer wants to print the message after the if block, but the code
// produces an error. Identify the error, correct the code, and explain why
// the original code fails.
// if (true) {
//     let message = "Order placed successfully";
// }
// console.log(message);
// Solution: message must be declared outside the block if it is needed afterward.
console.log("Q15:");
let message;
if (true) {
    message = "Order placed successfully";
}
console.log(message);
// The original let declaration was block-scoped to the if block.


// Q16. Fix the shopping cart calculation:
// Identify the logical error, correct the loop, and explain why the original
// code produces an incorrect result.
// function calculateCartTotal(...prices) {
//     let total = 0;
//     for (let i = 0; i <= prices.length; i++) {
//         total += prices[i];
//     }
//     return total;
// }
// console.log(calculateCartTotal(100, 200, 300));
// Solution: use i < prices.length so the loop never reads prices[prices.length].
console.log("Q16:");
function calculateCartTotal(...prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
}
console.log(calculateCartTotal(100, 200, 300)); // 600
// The original <= condition included one out-of-range value (undefined),
// which made the total NaN.



// Q17. Fix the object method:
// Explain why the expected username may not be printed. Rewrite the method
// correctly and state one situation where using an arrow function is appropriate.
// const user = {
//     userName: "Rahul",
//     showName: () => {
//         console.log(this.userName);
//     }
// };
// user.showName();
// Solution: use a regular method so this refers to the object calling it.
console.log("Q17:");
const user = {
    userName: "Rahul",
    showName() {
        console.log(this.userName);
    }
};
user.showName(); // Rahul
// The arrow function in the original code did not get its own this. It
// inherited this from outside the object, so this.userName was not user.userName.
// The method syntax above makes this refer to user when called as user.showName().
// An arrow function is useful for a callback inside a method when it should
// keep using the method's this.



// Q18. Type Coercion — Predict the Output:
// Predict the output of each statement and explain why.
// console.log([] + []);
// console.log([] + {});
// console.log("5" - - "2");
// console.log(null + 1);
console.log("Q18:");
console.log([] + []);      // "" (empty string)
console.log([] + {});      // "[object Object]"
console.log("5" - -"2");   // 7
console.log(null + 1);     // 1
// For +, arrays and objects are converted to primitive strings here.
// The unary minus and subtraction operators convert numeric strings to numbers.



// Q19. Scope and Hoisting:
// Which statement executes successfully? Which statement produces an error?
// Explain the role of hoisting and the Temporal Dead Zone (TDZ).
// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;
console.log("Q19:");
console.log(a); // undefined: var is hoisted and initialized with undefined.
var a = 10;

try {
    console.log(b);
} catch (error) {
    console.log(error.name); // ReferenceError: b is in its Temporal Dead Zone.
}
let b = 20;
// The var declaration is hoisted to the top of its scope. A let binding is
// also created before execution, but cannot be accessed before its declaration.


// JavaScript interview-level questions
// 1. What is the difference between == and ===?
// Answer: == compares after type coercion; === compares both type and value without coercion.

// 2. What is the difference between undefined and null?
// Answer: undefined usually means a value was not assigned; null is an intentional absence of value.

// 3. What is the difference between for...in and for...of?
// Answer: for...in iterates enumerable property keys (usually used for object keys);
//  for...of iterates values from an iterable.

// 4. Can a function return another function? Give a real-world use case.
// Answer: Yes. A function can return a function.

// 5. What happens if a function has no explicit return statement?
// Answer: A function without an explicit return statement returns undefined.

// 6. What is the difference between passing a primitive value and passing an object to a function?
// Answer: A function receives its own copy of an argument's value. For a primitive
//    (like a number), changing the function's parameter does not change the
//    caller's variable:
//    let age = 20;
//    function changeAge(value) { value = 30; }
//    changeAge(age); // age is still 20
//    For an object, the copied value is a reference to the same object. Changing
//    one of its properties inside the function is visible to the caller:
//    const person = { name: "Ava" };
//    function rename(value) { value.name = "Mia"; }
//    rename(person); // person.name is now "Mia"
//    The reference itself is still passed by value: assigning value to a whole
//    new object would not replace the caller's person variable.

// 7. What is the difference between shallow copying and deep copying an object?
// Answer: A shallow copy duplicates only the top-level object; nested objects remain
//    shared. A deep copy also duplicates nested data.

// 8. Why is NaN !== NaN true?
// Answer: NaN means "Not a Number" and represents an invalid numeric result, for
//    example Number("hello"). JavaScript treats NaN as unequal to every value,
//    even another NaN, so NaN !== NaN is true. Use Number.isNaN(value) to check
//    whether a value is NaN.

// 9. What is the difference between function declarations and function expressions regarding hoisting?
// Answer: Function declarations can be called before their definition because the
//    declaration is hoisted. Function expressions depend on their variable:
//    a var binding is initially undefined, while let/const are in the TDZ
//    until initialized.

// 10. When would you use an arrow function instead of a regular function?
// Answer: Use an arrow function for short callbacks (for example, array.map) or when
//     it should inherit this from the surrounding code. Arrow functions do not
//     create their own this. Use a regular function or method when this should
//     depend on how the function is called, such as user.showName() where this
//     should refer to user.
