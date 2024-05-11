# WHAT TYPE OF LOOPS ARE THERE IN JS?

JavaScript Loops are powerful tools for performing repetitive tasks efficiently. Loops in JavaScript 
execute a block of code again and again while the condition is true.

For example, suppose we want to print “Hello World” 5 times. This can be done using JS Loop easily. In 
Loop, the statement needs to be written only once and the loop will be executed 5 times as shown below:

```js
for (let i = 0; i < 5; i++) { 
    console.log("Hello World!"); 
}

// Output: Hello World! Hello World! Hello World! Hello World! Hello World!
```

As a programmer, it’s crucial to comprehend loops since they give you a means to repeatedly run a block 
of code. Loops are a fundamental idea in computer programming. Using loops has a number of advantages, 
including:

- Your code will be more effective if you use loops to automate repetitive processes and carry out the 
same actions repeatedly with little code.

- To regulate the flow of execution based on specific conditions, loops can be used in conjunction with 
conditional statements.

- When processing huge amounts of data, such as iterating through array elements or database records, 
loops are frequently utilized.

- Through the repeated execution of code in response to input from the user or other events, loops can 
be utilized to develop dynamic and interactive applications.

In JavaScript, there are 7 types of loops that can be used to execute a block of code repeatedly. Each 
loop has its own specific use case and syntax, and choosing the right one depends on the problem you’re 
trying to solve. It’s important to understand the differences between these loops and when to use each 
one to write efficient and effective code.

## FOR LOOP

The **for loop** runs until the given condition becomes false. It is similar to the for loops in C++ 
and Java.

JavaScript **for loop** is used to iterate the elements/code block a fixed number of times. It is used 
if the number of the iteration is known.

**For statement** creates the loop that accepts three optional expressions and a code block that will 
be executed in a loop. The syntax of for statement is given below.

```js
for (statement 1 ; statement 2 ; statement 3){
    code here...
}
```

- **Statement 1**: It is the initialization of the counter. It is executed once before the execution of 
the code block.

- **Statement 2**: It defines the testing condition for executing the code block

- **Statement 3**: It is the increment or decrement of the counter & executed (every time) after the 
code block has been executed.
 
Example:

```js
// JavaScript program to illustrate for loop
let x;
 
// for loop begins when x=2
// and runs till x <=4
for (x = 2; x <= 4; x++) {
    console.log("Value of x:" + x);
}

// Output: Value of x:2, Value of x:3, Value of x:4
```

### Flow chart

This flowchart shows the working of the for loop in JavaScript. You can see the control flow in the For 
loop.

![Alt text](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190328142225/loop2.png "flowchart1")

### Statement 1: Initializing Counter Variable

Statement 1 is used to initialize the **counter variable**. A counter variable is used to keep track of 
the number of iterations in the loop. You can initialize multiple counter variables in statement 1.

We can initialize the counter variable externally rather than in statement 1. This shows us clearly 
that statement 1 is optional. We can leave the portion empty with a semicolon. 

```js
let x = 2;
 
for (; x <= 4; x++) {
    console.log("Value of x:" + x);
}

// Output: Value of x:2, Value of x:3, Value of x:4
```

### Statement 2: Testing Condition

This statement checks the **boolean value** of the **testing condition**. If the testing condition is 
true, the for loop will execute further, otherwise loop will end and the code outside the loop will be 
executed. It is executed every time the for loop runs before the loop enters its body.

This is also an optional statement and Javascript treats it as true if left blank. If this statement is 
omitted, the loop runs indefinitely if the loop control isn’t broken using the **break statement**. It 
is explained below in the example.

```js
let x = 2;
for (; ; x++) {
    console.log("Value of x:" + x);
    break;
}

// Output: Value of x:2
```

### Statement 3: Updating Counter Variable

It is a controlled statement that controls the increment/decrement of the counter variable. It is also 
optional by nature and can be done inside the loop body.

```js
const subjects = ["Maths", "Science", "Polity", "History"];
let i = 0;
let len = subjects.length;
let gfg = "";
for (; i < len;) {
    gfg += subjects[i];
    //can be increased inside loop
    i++;
}
console.log(gfg)

// Output: MathsSciencePolityHistory
```

## FOR IN LOOP

In JavaScript, the **for in loop** is used to iterate over the properties of an object. 

Syntax:

```js
for (let i in obj1) {
    // Prints all the keys in
    // obj1 on the console
    console.log(i);
}
```

### For in Loop Important Points

1. Use the **for-in loop** to iterate over non-array objects. Even though we can use a for-in loop for 
an array, it is generally not recommended. Instead, use a for loop for looping over an array.

2. The properties iterated with the **for-in loop** also include the properties of the objects higher in the Prototype chain.

3. The order in which properties are iterated may not match the properties that are defined in the 
object.

### For-in Loop Examples

- **Example**: A simple example to illustrate the for-in loop over an array.

```js
const array = [1, 2, 3, 4, 5];
 
for (const element of array) {
  console.log(element);
}

// Output: 1, 2, 3, 4, 5
```

- **Example 2**: For-in loop iterates over the properties of an object and its prototype chain’s 
properties. If we want to display both properties of the “student1” object which belongs to that object 
only and the prototype chain, then we can perform it by for in loop.

```js
const courses = {
 
    // Declaring a courses object
    firstCourse: "C++ STL",
    secondCourse: "DSA Self Paced",
    thirdCourse: "CS Core Subjects"
};
 
// Creating a new empty object with
// prototype set to courses object
const student1 = Object.create(courses);
 
// Defining student1 properties and methods
student1.id = 123;
student1.firstName = "Prakhar";
student1.showEnrolledCourses = function () {
    console.log(courses);
}
 
// Iterating over all properties of
// student1 object
for (let prop in student1) {
    console.log(prop + " -> "
        + student1[prop]);
}

/* Output
id -> 123
firstName -> Prakhar
showEnrolledCourses -> function () {
    console.log(courses);
}
firstCourse -> C++ STL
secondCourse -> DSA Self Paced
thirdCourse -> CS Core Subjects
*/
```

## FOR OF LOOP

JavaScript **for...of loop** is used to iterate over iterable objects such as arrays, strings, maps, 
sets, etc. It provides a simpler syntax compared to traditional for loops.

Syntax:

```js
for ( variable of iterableObjectName) {
   // code block to be executed
}
```

### Parameters

- **Variable**: Represents the current value of each iteration from the iterable.

- **Iterable**: Any object that can be iterated over (e.g., arrays, strings, maps).

### For of loop examples

- **Example 1**: Here, we are looping over an array. The code initializes an array with values 1 
through 5. It then iterates over each element of the array using a **for…of loop**, logging each 
element to the console. 

```js
const array = [1, 2, 3, 4, 5];
 
for (const item of array) {
  console.log(item);
}

// Output: 1, 2, 3, 4, 5
```

- **Example 2**: Here, we are looping over an String.

```js
const str = "Hello";
 
for (const char of str) {
  console.log(char);
}

/* Output
H
e
l
l
o
*/
```

In this case:

- **str** is the string you want to loop over.

- **for (const char of str)** initiates the **for...of loop**, where **char** represents each character 
in the string during each iteration.

- **console.log(char)** prints each character to the console during each iteration of the loop.

## WHILE LOOP

The JS while loop is a control flow statement that allows code to be executed repeatedly based on a 
given Boolean condition. The while loop can be thought of as a repeating if statement. 

Syntax: 

```js
while (boolean condition) {
    loop statements...
}
```

### Flowchart

![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/Loop1.png "flowchart2")

- **While loop** starts with checking the condition. If it is evaluated to be true, then the loop body 
statements are executed otherwise first statement following the loop is executed. For this reason, it 
is also called the **Entry control loop**.

- Once the condition is evaluated to be true, the statements in the loop body are executed. Normally 
the statements contain an updated value for the variable being processed for the next iteration.

- When the condition becomes false, the loop terminates which marks the end of its life cycle.

### While loop example

```js
// JavaScript code to use while loop 
let val = 1; 
  
while (val < 6) { 
    console.log(val);  
    val += 1; 
}

// Output: 1, 2, 3, 4, 5
```

## DO WHILE LOOP

The JS **do-while loop** is similar to the **while loop** with the only difference is that it checks 
for the condition after executing the statements, and therefore is an example of an **Exit Control Loop**. 
It executes loop content at least once event the condition is false.

Syntax:

```js
do {
    Statements...
}
while (condition);
```

### Flowchart

![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/loop3.png "flowchart3")

- The **do-while loop** starts with the execution of the statement(s). There is no checking of any 
condition for the first time.

- After the execution of the statements and update of the variable value, the condition is checked for 
a true or false value. If it is evaluated to be true, the next iteration of the loop starts.

- When the condition becomes false, the loop terminates which marks the end of its life cycle.

- It is important to note that the **do-while loop** will execute its statements at least once before 
any condition is checked and therefore is an example of the exit control loop.

### Do while loop example

```js
let test = 1; 
  
do { 
    console.log(test); 
    test++; 
} while(test <= 5)

// Output: 1, 2, 3, 4, 5
```

## FOR EACH LOOP

A **forEach loop** is a method on arrays that executes a function for each element in the array.

```js
const arr = [1, 2, 3];
arr.forEach(val => console.log(val));

// Output: 1, 2, 3
```

## MAP LOOP

A **map loop** is a method on arrays that creates a new array by executing a function on each element 
in the array.

```js
const arr = [1, 2, 3];
const newArr = arr.map(val => val * 2);
console.log(newArr);

// Output: [ 2, 4, 6 ]
```

# WHAT ARE THE DIFFERENCES BETWEEN CONST, LET AND VAR?

In JavaScript, users can declare a variable using three keywords that are **var, let, and const**. The 
behavior and the scope of a variable are also based on the keyword used to define it.

## JS VAR KEYWORD

The **var** is the oldest keyword to declare a variable in JavaScript. It has the Global scoped or 
function scoped which means variables defined outside the function can be accessed globally, and 
variables defined inside a particular function can be accessed within the function. 

- **Example 1**: The below code example explains the use of the **var** keyword to declare the 
variables in JavaScript.

```js
var a = 10
function f() {
    var b = 20
    console.log(a, b)
}
f();
console.log(a);

/* Output:
10 20
10
*/
```

- **Example 2**: The below example explains the behaviour of **var** variables when declared inside a 
function and accessed outside of it.

```js
function f() {
 
    // It can be accessible any
    // where within this function
    var a = 10;
    console.log(a)
}
f();
 
// A cannot be accessible
// outside of function
console.log(a);

/* Output:
10
ReferenceError: a is not defined
*/
```

- **Example 3**: The below code re-declare a variable with same name in the same scope using the 
**var** keyword, which gives no error in the case of **var** keyword.

```js
var a = 10
 
// User can re-declare
// variable using var
var a = 8
 
// User can update var variable
a = 7 
console.log(a);

// Output: 7
```

- **Example 4**: The below code explains the hoisting concept with the **var** keyword variables.

```js
console.log(a);
var a = 10;

// Output: undefined
```

## JS LET KEYWORD

The **let** keyword is an improved version of the **var** keyword. It is introduced in the ES6 or 
EcmaScript 2015. These variables has the **block scope**. It can’t be accessible outside the particular 
code block ({block}).

- **Example 1**: The below code declares the variable using the **let** keyword.

```js
let a = 10;
function f() {
    let b = 9
    console.log(b);
    console.log(a);
}
f();

/* Output:
9
10
*/
```

- **Example 2**: The below code explains the **block scope** of the variables declared using the 
**let** keyword.

```js
let a = 10;
function f() {
    if (true) {
        let b = 9
 
        // It prints 9
        console.log(b);
    }
 
    // It gives error as it
    // defined in if block
    console.log(b);
}
f()
 
// It prints 10
console.log(a)

/* Output:
9
ReferenceError: b is not defined
*/
```

- **Example 3**: The below code explains the behaviour of **let** variables when they are re-declared 
in the same scope.

```js
let a = 10
 
// It is not allowed
let a = 10
 
// It is allowed
a = 10

// Output: Uncaught SyntaxError: Identifier 'a' has already been declared
```

- **Example 4**: The below code explains the behaviour of **let** variables when they are re-declared 
in the different scopes.

```js
let a = 10
if (true) {
    let a = 9
    console.log(a) // It prints 9
}
console.log(a) // It prints 10

/* Output:
9
10
*/
```

- **Example 5**: This code explains the hoisting concept with the **let** variables.

```js
console.log(a);
let a = 10;

// Output: Uncaught ReferenceError: Cannot access 'a' before initialization
```

## JS CONST

The **const** keyword has all the properties that are the same as the **let** keyword, except the user 
cannot update it and have to assign it with a value at the time of declaration. These variables also 
have the **block scope**. It is mainly used to create constant variables whose values can not be 
changed once they are initialized with a value.

- **Example 1**: This code tries to change the value of the **const** variable.

```js
const a = 10;
function f() {
    a = 9
    console.log(a)
}
f();

// Output: TypeError:Assignment to constant variable.
```

- **Example 2**: This code explains the use of the **const** keyword to declare the JavaScript objects.

```js
const a = {
    prop1: 10,
    prop2: 9
}
 
// It is allowed
a.prop1 = 3
 
// It is not allowed
a = {
    b: 10,
    prop2: 9
}

// Output: Uncaught SyntaxError: Unexpected identifier
```

## TO SUM UP

![Alt text](https://miro.medium.com/v2/resize:fit:1400/1*Qu5yrbtkAhOnB75dfgqWDw.png "chart1")

# WHAT IS AN ARROW FUNCTION?

Arrow functions are a new way of writing functions. They have a shorter syntax than the traditional 
function expression and do not have their own this, arguments, super, or new.target. Arrow functions 
are always anonymous and can be used as an expression or as a statement.

An arrow function expression is a compact alternative to a traditional function expression, with some 
semantic differences and deliberate limitations in usage:

- Arrow functions don't have their own bindings to **this**, **arguments**, or **super**, and should 
not be used as **methods**.

- Arrow functions cannot be used as **constructors**. Calling them with **new** throws a **TypeError**. 
They also don't have access to the **new.target** keyword.

- Arrow functions cannot use **yield** within their body and cannot be created as generator functions.

![Alt text](https://pbs.twimg.com/media/FChaoAfVQAYweeW.png "chart2")

## SYNTAX

The syntax for an arrow function is: **(param1, param2, ...) => { statements }** The parameters are 
optional, and the statements are the body of the function.

![Alt text](https://echologyx.com/wp-content/uploads/2022/02/arrow-function.png "img1")

Here is the easiest example of how an arrow function looks:

```js
const myFunction = () => {
  console.log('Hello World!');
}
myFunction();
```

## STEP BY STEP

Let's decompose a traditional anonymous function down to the simplest arrow function step-by-step. Each 
step along the way is a valid arrow function.

```js
// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;
```

In the example above, both the parentheses around the parameter and the braces around the function body 
may be omitted. However, they can only be omitted in certain cases.

The parentheses can only be omitted if the function has a single simple parameter. If it has multiple 
parameters, no parameters, or default, destructured, or rest parameters, the parentheses around the 
parameter list are required.

```js
// Traditional anonymous function
(function (a, b) {
  return a + b + 100;
});

// Arrow function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
});

// Arrow function (no parameters)
() => a + b + 100;
```

The braces can only be omitted if the function directly returns an expression. If the body has 
additional lines of processing, the braces are required — and so is the return keyword. Arrow functions 
cannot guess what or when you want to return.

```js
// Traditional anonymous function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow function
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};
```

Arrow functions are always unnamed. If the arrow function needs to call itself, use a named function 
expression instead. You can also assign the arrow function to a variable so it has a name.

```js
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;
```

## FUNCTION BODY

Arrow functions can have either an expression body or the usual block body.

In an expression body, only a single expression is specified, which becomes the implicit return value. 
In a block body, you must use an explicit **return** statement.

```js
const func = (x) => x * x;
// expression body syntax, implied "return"

const func2 = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed
```

Returning object literals using the expression body syntax **(params) => { object: literal }** does not 
work as expected.

```js
const func = () => { foo: 1 };
// Calling func() returns undefined!

const func2 = () => { foo: function () {} };
// SyntaxError: function statement requires a name

const func3 = () => { foo() {} };
// SyntaxError: Unexpected token '{'
```

This is because JavaScript only sees the arrow function as having an expression body if the token 
following the arrow is not a left brace, so the code inside braces ({}) is parsed as a sequence of 
statements, where foo is a label, not a key in an object literal.

To fix this, wrap the object literal in parentheses:

```js
const func = () => ({ foo: 1 });
```

## CANNOT BE USED AS METHODS

Arrow function expressions should only be used for non-method functions because they do not have their 
own **this**. Let's see what happens when we try to use them as methods:

```js
"use strict";

const obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
};

obj.b(); // logs undefined, Window { /* … */ } (or the global object)
obj.c(); // logs 10, Object { /* … */ }
```

Another example involving **Object.defineProperty()**:

```js
"use strict";

const obj = {
  a: 10,
};

Object.defineProperty(obj, "b", {
  get: () => {
    console.log(this.a, typeof this.a, this); // undefined 'undefined' Window { /* … */ } (or the global object)
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  },
});
```

Because a class's body has a **this** context, **arrow functions** as class fields close over the 
class's **this** context, and the **this** inside the arrow function's body will correctly point to the 
instance (or the class itself, for static fields). However, because it is a closure, not the function's 
own binding, the value of this will not change based on the execution context.

```js
class C {
  a = 1;
  autoBoundMethod = () => {
    console.log(this.a);
  };
}

const c = new C();
c.autoBoundMethod(); // 1
const { autoBoundMethod } = c;
autoBoundMethod(); // 1
// If it were a normal method, it should be undefined in this case
```

**Arrow function** properties are often said to be "auto-bound methods", because the equivalent with normal methods is:

```js
class C {
  a = 1;
  constructor() {
    this.method = this.method.bind(this);
  }
  method() {
    console.log(this.a);
  }
}
```

For similar reasons, the **call(), apply(), and bind()** methods are not useful when called on arrow 
functions, because **arrow functions** establish this based on the scope the arrow function is defined 
within, and the this value does not change based on how the function is invoked.

## NO BINDING OF ARGUMENTS

**Arrow functions** do not have their own arguments object. Thus, in this example, arguments is a 
reference to the arguments of the enclosing scope:

```js
function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6
```

* Note: You cannot declare a variable called arguments in strict mode, so the code above would be a 
syntax error. This makes the scoping effect of arguments much easier to comprehend.

In most cases, using rest parameters is a good alternative to using an **arguments** object.

```js
function foo(n) {
  const f = (...args) => args[0] + n;
  return f(10);
}

foo(1); // 11
```

## CANNOT BE USED AS CONSTRUCTORS

**Arrow functions** cannot be used as constructors and will throw an error when called with **new**. 
They also do not have a **prototype** property.

```js
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false
```

## CANNOT BE USED AS GENERATORS

The **yield** keyword cannot be used in an arrow function's body (except when used within generator 
functions further nested within the arrow function). As a consequence, arrow functions cannot be used 
as generators.

## LINE BREAK BEFORE ARROW

An arrow function cannot contain a line break between its parameters and its arrow.

```js
const func = (a, b, c)
  => 1;
// SyntaxError: Unexpected token '=>'
```

For the purpose of formatting, you may put the line break after the arrow or use parentheses/braces 
around the function body, as shown below. You can also put line breaks between parameters.

```js
const func = (a, b, c) =>
  1;

const func2 = (a, b, c) => (
  1
);

const func3 = (a, b, c) => {
  return 1;
};

const func4 = (
  a,
  b,
  c,
) => 1;
```

## PRECEDENCE OF ARROW

Although the arrow in an **arrow function** is not an operator, **arrow functions** have special 
parsing rules that interact differently with operator precedence compared to regular functions.

```js
let callback;

callback = callback || () => {};
// SyntaxError: invalid arrow-function arguments
```

Because **=>** has a lower precedence than most operators, parentheses are necessary to avoid callback 
**|| ()** being parsed as the arguments list of the **arrow function**.

```js
callback = callback || (() => {});
```

## LAST EXAMPLE

```js
// constructor function
function Person() {

    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);

        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();

/* Output:
25
25
*/
```

Inside a regular function, **this** keyword refers to the function where it is called. However, 
**this** is not associated with **arrow functions**. So, whenever you call this, it refers to its 
parent scope, like happens in this example.

Here, the **innerFunc()** function is an arrow function. And inside the **arrow function**, **this** 
refers to the parent's scope, i.e., the scope of the **Person()** function. Hence, **this.age** gives 
**25**.

# WHAT IS VARIABLE DECONSTRUCTION?

![Alt text](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/freeCodeCamp-Cover-1.png "img2")

**Destructuring** is a JavaScript expression that allows us to extract data from arrays, objects, and 
maps and set them into new, distinct variables. Destructuring allows us to extract multiple properties, 
or items, from an array​ at a time.

## SYNTAX

![Alt text](https://frontend.turing.edu/assets/images/lessons/intro-to-destructuring/intro-to-destructuring-object.png "img3")

The right side of the statement contains the Javascript object that we want to split into variables; 
the left side contains a “pattern” for the corresponding properties of the object. This “pattern” is 
usually a list of variable names.

## BASIC OBJECT DESTRUCTURING EXAMPLE

Let's take an **user** object:

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
```

The expression to extract the **name** property value using object destructuring is the following:

```js
const { name } = user;

console.log(name); // Output, Alex
```

As you see, on the left side of the expression, we pick the object property key (**name** in this case) 
and place it inside the **{}**. It also becomes the variable name to hold the property value.

The right side of the expression is the actual object that extracts the value. We also mention the 
keywords, **const, let** and so on to specify the variable's scope.

![Alt text](https://www.freecodecamp.org/news/content/images/2021/02/destructure.png "img4")

So, how do we extract values from more than one object property? Simple – we keep adding the object 
keys inside the **{}** with commas separating them. In the example below, we destructure both the 
**name** and **age** properties from the **user** object.

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const { name, age } = user;

console.log(name, age); // Output, Alex 43
```

## VARIABLE DECLARATION RULE

The keywords let and const are significant in object destructuring syntax. Consider the example below 
where we have omitted the let or const keyword. It will end up in the error, **Uncaught SyntaxError: 
Unexpected token '='**.

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

{ name  } = user // Uncaught SyntaxError: Unexpected token '='
```

What if we declare the variable in advance and then try to destructure the same name's key from the 
object? Nope, not much luck here either. It is still syntactically incorrect.

```js
let name;

{ name  } = user; // Uncaught SyntaxError: Unexpected token '='
```

In this case, the correct syntax is to put the destructuring expression inside parenthesis (**(...)**).

```js
let name;

({ name  } = user);

console.log(name); // Output, Alex
```

## ADD A NEW VARIABLE AND A DEFAULT VALUE

We can add a new variable while destructuring and add a default value to it. In the example below, the 
**salary** variable is non-existent in the **user** object. But we can add it in the destructuring 
expression and add a default value to it.

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
const { name, age, salary=123455 } = user;

console.log(name, age, salary); // Output, Alex 43 123455
```

There is a considerable advantage to the flexibility of adding a variable with a default value. The 
default value of this new variable is not necessarily going to be any constant value always. We can 
compute the value of it from other destructured property values.

## ADD ALIASES

You can give an alias name to your destructured variables. It comes in very handy if you want to reduce 
the chances of variable name conflicts.

In the example below, we have specified an alias name for the property **address** as 
**permanentAddress**.

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const { address: permanentAddress } = user;

console.log(permanentAddress); // 15th Park Avenue
```

## NESTED OBJECT DESTRUCTURING

An object can be nested. This means that the value of an object property can be another object, and so 
on.

Let's consider the **user** object below. It has a property called **department** with the value as 
another object. But let's not stop here! The **department** has a property with the key **address** 
whose value is another object. 

```js
const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43,
        'department':{
            'name': 'Sales',
            'Shift': 'Morning',
            'address': {
                'city': 'Bangalore',
                'street': '7th Residency Rd',
                'zip': 560001
            }
        }
}
```

How do we extract the value of the **department** property? Ok, it should be straight-forward by now.

```js
const { department } = user;
```

And here's the output when you log **department**:

![Alt text](https://www.freecodecamp.org/news/content/images/2021/02/image-30.png "img5")

But, let's go one more nested level down. How do we extract the value of the **address** property of the **department**? Now, this may sound a bit tricky. However, if you apply the same **object destructuring** principles, you'll see that it's similar.

```js
const { department: { address } } = user;
```

Here's the output when you log address:

![Alt text](https://www.freecodecamp.org/news/content/images/2021/02/image-31.png "img6")

In this case, **department** is the key we focus on and we destructure the **address** value from it. 
Notice the **{}** around the keys you want to destructure.

## DYNAMIC NAME PROPERTY

Many times you may not know the property name (key) of an object while destructuring it. Consider this example. We have a **user** object:

```js
const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
```

Now the method **getValue(key)** takes a property key name and should return the value of it.

```js
getValue('name') // Should return Alex
getValue('age') // Should return 43
```

So, how do we write the definition of the **getValue(key)** method using the destructuring syntax?

Well, the syntax is very much the same as creating aliases. As we don't know the **key** name to 
hard-code in the destructuring syntax, we have to enclose it with square brackets (**[...]**).

```js
const getValue = key => {
    const { [key]: returnValue } = user;   
    return returnValue;
}
```

## DESTRUCTURE TO THE FUNCTION PARAMETER

You may want just a couple of specific property values to pass as a parameter to the function 
definition, not the entire object. Use object destructuring to function parameter in this case.

Let's take the user object example once again. Suppose we need a function to return a string using the 
user's name and age. Say something like **Alex is 43 year(s) old!** is the return value when we call 
this:

```js
logDetails(user); 
```

We can simply use destructuring here to pass the **name and age** values, respectively, to the function definition. There is no need to pass the entire **user** object and then extract the values from it one by one. Please have a look:

```js
function logDetails({name, age}) {
    console.log(`${name} is ${age} year(s) old!`)
}
```

## DESTRUCTURE FUNCTION RETURN VALUE

When a function returns an object and you are interested in specific property values, use destructuring 
straight away. Here is an example:

```js
const getUser = () => {
    return{ 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }
}

const { name, age } = getUser();

console.log(name, age); // Alex 43
```

## DESTRUCTURE IN LOOPS

You can use object destructuring with the **for-of loop**. Let's take an array of user objects like 
this:

```js
const users = [
    { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    { 
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    { 
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
];
```

We can extract the property values with object destructuring using the **for-of loop**.

```js
for(let { name, age } of users) {
    console.log(`${name} is ${age} years old!`);
}
```

This is the output:

![Alt text](https://www.freecodecamp.org/news/content/images/2021/02/image-27.png "img7")

## CONCLUSION

- Object destructuring is new syntax introduced in ES6. It helps create variables by extracting the 
object's properties in a much simpler way.

- If you are working with (or planning to use) a framework/library like **angular, react, or vue**, you 
will be using a lot of object destructuring syntax.

- Object destructuring and Spread syntax are not the same thing.

- **Spread** syntax (also known as the Spread Operator) is used to copy the enumerable properties of an 
object to create a clone of it. We can also update an object or merge with another object using the 
spread syntax.

- The **Rest** parameter is kind of the opposite of the **Spread** syntax. It helps to consolidate (or 
collect) the remaining object properties into a new object while destructuring is done.

# WHAT DOES THE SPREAD OPERATOR DO IN JS?

The **spread** (...) syntax allows an iterable, such as an array or string, to be expanded in places 
where zero or more arguments (for function calls) or elements (for array literals) are expected. In an 
object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs 
to the object being created.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. 
Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and 
"condenses" them into a single element.

![Alt text](https://codingsumit.com/static/5b331016fcf3a870876bb5e94916fc80/86f4e/spread.png "img8")

## SYNTAX

```js
myFunction(a, ...iterableObj, b)
[1, ...iterableObj, '4', 'five', 6]
{ ...obj, key: 'value' }
```

### DESCRIPTION

Spread syntax can be used when all elements from an object or array need to be included in a new array 
or object, or should be applied one-by-one in a function call's arguments list. There are three 
distinct places that accept the spread syntax:

- **Function arguments** list (myFunction(a, ...iterableObj, b))

- **Array literals** ([1, ...iterableObj, '4', 'five', 6])

- **Object literals** ({ ...obj, key: 'value' })
 
Although the syntax looks the same, they come with slightly different semantics.

Only **iterable** values, like **Array** and **String**, can be spread in **array literals** and 
argument lists. Many objects are not iterable, including all **plain objects** that lack a 
**Symbol.iterator** method:

```js
const obj = { key1: "value1" };
const array = [...obj]; // TypeError: obj is not iterable
```

On the other hand, **spreading in object literals** enumerates the own properties of the value. For 
typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.

```js
const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
```

All **primitives** can be spread in objects. Only strings have enumerable own properties, and spreading 
anything else doesn't create properties on the new object.

```js
const obj = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }
```

When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript 
engine's argument length limit.

## EXAMPLES

### Spread in function calls

1. **Replace apply()**: It is common to use **Function.prototype.apply()** in cases where you want to 
use the elements of an array as arguments to a function.

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);
```

With spread syntax the above can be written as:

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

Any argument in the argument list can use **spread** syntax, and the **spread** syntax can be used 
multiple times.

```js
function myFunction(v, w, x, y, z) {}
const args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

2. **Apply for new operator**: When calling a constructor with **new**, it's not possible to 
**directly** use an array and **apply()**, because **apply()** calls the target function instead of 
constructing it, which means, among other things, that **new.target** will be undefined. However, an 
array can be easily used with **new** thanks to **spread** syntax:

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

### Spread in array literals

1. **A more powerful array literal**: Without **spread** syntax, the array literal syntax is no longer 
sufficient to create a new array using an existing array as one part of it. Instead, imperative code 
must be used using a combination of methods, including **push(), splice(), concat()**, etc. With 
**spread** syntax, this becomes much more succinct:

```js
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

Just like **spread** for argument lists, **...** can be used anywhere in the array literal, and may be 
used more than once.

2. **Copying an array**: You can use **spread** syntax to make a **shallow copy** of an array. Each 
array element retains its identity without getting copied.

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

**Spread** syntax effectively goes one level deep while copying an array. Therefore, it may be 
unsuitable for copying multidimensional arrays. The same is true with **Object.assign()** — no native 
operation in JavaScript does a deep clone. The web API method **structuredClone()** allows deep copying 
values of certain **supported types**.

```js
const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();
// 1

// Oh no! Now array 'a' is affected as well:
console.log(a);
// [[], [2], [3]]
```

3. **A better way to concatenate arrays**: **Array.prototype.concat()** is often used to concatenate an 
array to the end of an existing array. Without spread syntax, this is done as:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

With **spread** syntax this becomes:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]
```

**Array.prototype.unshift()** is often used to insert an array of values at the start of an existing 
array. Without spread syntax, this is done as:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

With **spread** syntax this becomes:

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
console.log(arr1); // [3, 4, 5, 0, 1, 2]
```

* Note: Unlike unshift(), this creates a new arr1, instead of modifying the original arr1 array 
in-place.

4. **Conditionally adding values to an array**: You can make an element present or absent in an array 
literal, depending on a condition, using a **conditional operator**.

```js
const isSummer = false;
const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
// ['apple', 'banana']
```

When the condition is **false**, we spread an empty array, so that nothing gets added to the final 
array. Note that this is different from the following:

```js
const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined];
// ['apple', 'banana', undefined]
```

In this case, an extra **undefined** element is added when **isSummer** is **false**, and this element 
will be visited by methods such as **Array.prototype.map()**.

### Spread in object literals

1. **Copying and merging objects**: You can use **spread** syntax to merge multiple objects into one 
new object.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
// { foo: "bar", x: 42, bar: "baz", y: 13 }
```

A single spread creates a shallow copy of the original object (but without non-enumerable properties 
and without copying the prototype), similar to copying an array.

```js
const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
```

2. **Overriding properties**: When one object is spread into another object, or when multiple objects 
are spread into one object, and properties with identical names are encountered, the property takes the 
last value assigned while remaining in the position it was originally set.

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
```

3. **Conditionally adding properties to an object**: You can make an element present or absent in an 
object literal, depending on a condition, using a **conditional operator**.

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer ? { watermelon: 30 } : {}),
};
// { apple: 10, banana: 5 }
```

The case where the condition is **false** is an empty object, so that nothing gets **spread** into the 
final object. Note that this is different from the following:

```js
const fruits = {
  apple: 10,
  banana: 5,
  watermelon: isSummer ? 30 : undefined,
};
// { apple: 10, banana: 5, watermelon: undefined }
```

In this case, the **watermelon** property is always present and will be visited by methods such as 
**Object.keys()**.

Because primitives can be **spread** into objects as well, and from the observation that all **falsy** 
values do not have enumerable properties, you can simply use a logical **AND** operator:

```js
const isSummer = false;
const fruits = {
  apple: 10,
  banana: 5,
  ...(isSummer && { watermelon: 30 }),
};
```

In this case, if **isSummer** is any **falsy** value, no property will be created on the **fruits** 
object.

4. **Comparing with Object.assign()**: Note that **Object.assign()** can be used to mutate an object, 
whereas **spread** syntax can't.

```js
const obj1 = { foo: "bar", x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // { foo: "bar", x: 1337 }
```

In addition, **Object.assign()** triggers setters on the target object, whereas **spread** syntax does 
not.

```js
const objectAssign = Object.assign(
  {
    set foo(val) {
      console.log(val);
    },
  },
  { foo: 1 },
);
// Logs "1"; objectAssign.foo is still the original setter

const spread = {
  set foo(val) {
    console.log(val);
  },
  ...{ foo: 1 },
};
// Nothing is logged; spread.foo is 1
```

You cannot naively re-implement the **Object.assign()** function through a single spreading:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

In the above example, the **spread** syntax does not work as one might expect: it spreads an array of 
arguments into the object literal, due to the rest parameter. Here is an implementation of merge using 
the spread syntax, whose behavior is similar to **Object.assign()**, except that it doesn't trigger 
setters, nor mutates any object:

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };
const merge = (...objects) =>
  objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = merge(obj1, obj2);
// { foo: 'baz', x: 42, y: 13 }
```

# WHAT IS OBJECT ORIENTED PROGRAMMING?

![Alt text](https://www.freecodecamp.org/news/content/images/size/w2000/2023/02/Frame-389.png "img9")

**Object-Oriented Programming** is a programming style based on **classes and objects**. These group 
data (properties) and methods (actions) inside a box. OOP was developed to make code more flexible and 
easier to maintain. JavaScript is prototype-based procedural language, which means it supports both 
functional and object-oriented programming.

## WHAT ARE CLASSES AND OBJECTS IN JS?

### What is a Class?

You can think of a class like a blueprint of a house. A class is not a real world object but we can create objects from a class. It is like an template for an object.

We can create classes using the **class** keyword which is reserved keyword in JavaScript. Classes can 
have their own properties and methods. We will study how to create a class in detail shortly. This is 
just a high level overview of a class.

Let's take an example. Below is a blueprint for a house (like a class).

![Alt text](https://www.freecodecamp.org/news/content/images/2023/02/blueprint.jpg "img10")

### What is an Object?

An **object** is an instance of a class. Now with the help of the house class we can construct a house. 
We can construct multiple houses with the help of same house class.

### Example of Classes and Objects in Action

Let's take a simple example to understand how classes and objects work.

The below example has nothing to do with JavaScript syntax. It is just to explain classes and objects. 
We will study the syntax of OOP in JavaScript in a bit.

Consider a Student class. Student can have properties like name, age, standard, and so on, and 
functions like study, play, and do home work.

```js
class Student{
 // Data (Properties)
 Name
 Age
 Standard
    
 // Methods (Action)
 study(){
 // Study
 }
    
 Play(){
 // Play
 }
    
 doHomeWork(){
 // Do Home Work
 }
    
}
```

With the help of the above class, we can have multiple students or instances.

Here's info for **Student - 01**:

```js
// Student 1
{
Name = "John"
Age = 15
Standard = 9
    
study(){
 // Study
 }
    
 Play(){
 // Play
 }
    
 doHomeWork(){
 // Do Home Work
 }   
}
```

Here's info for **Student - 02**:

```js
// Student 2
{
Name = "Gorge"
Age = 18
Standard = 12
    
study(){
 // Study
 }
    
 Play(){
 // Play
 }
    
 doHomeWork(){
 // Do Home Work
 }
}
```

### How Do We Actually Design a Class?

There is no perfect answer to this question. But we can get help from some OOP principles when 
designing our classes.

There are 4 main principles in OOP, and they are:

1. **Abstraction**: Abstraction means hiding certain details that don't matter to the user and only 
showing essential features or functions.
For example, take a cell phone. We don't show details like **verifyTemperature(), verifyVolt(), 
frontCamOn(), frontCamOff()** and so on. Instead we provide essential features which matter to user 
like **camera(), volumeBtn()**, and others.

2. **Encapsulation**: Encapsulation means keeping properties and methods private inside a class, so 
that they are not accessible from outside that class.
This will keep code that's outside the class from accidentally manipulating internal methods and 
properties.

3. **Inheritance**: Inheritance makes all properties and methods available to a child class. This 
allows us to reuse common logic and to model real-world relationships. We will discuss inheritance in 
further section of this article with pratical example.

4. **Polymorphism**: Polymorphism means having different and many forms. We can overwrite a method 
inherited from a parent class.

## OOP in JavaScript

We have now discussed the basics of OOP. But OOP in JavaScript is bit different. We have an object 
linked to a prototype. Prototypes contain all methods and these methods are accessible to all objects 
linked to this prototype. This is called **Prototypal Inheritance** (or Prototypal Delegation).

### What is Prototypal Inheritance in JavaScript?

You have likely already used Prototypal Inheritance without knowing it – for example, if you've used 
methods on arrays like **push(), pop(), map()** and so on (which are available on all arrays).

If we go to the official documentation we will see Array.prototype.map() because Array.prototype is a 
prototype of all array objects that we create in JavaScript. This is an example of prototypal 
inheritance that we are going to learn to implement.

Just like **Array.prototype** we will create our own prototypes and this will help you understand 
JavaScript inside out.

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/ss.png "img11")

### How to Implement Prototypal Inheritance in JavaScript

There are three main ways to implement Prototypal Inheritance in JavaScript:

1. **Using Constructor Functions**: We can create objects from a function. With the help of a 
constructor function, built-in objects like arrays, sets, and others are actually implemented.
In JavaScript, a constructor gets called when an object is created using the **new** keyword. The 
purpose of a constructor is to create a new object and set its values for any existing object properties

2. **Using ES6 Classes**: Classes are an alternative to the constructor function syntax for 
implementing prototypal inheritance. We also call classes **syntactic sugar**.
Behind the scenes, classes work exactly like constructor functions. Prior to ES6, JavaScript had no 
concepts of classes. To mock a class, you often use the **constructor or prototype pattern**.

3. **Using Object.create()**: This is the easiest way to link an object to a prototype object. It is a 
method used to create a new object with the specified prototype object and properties.
The **object.create()** method returns a new object with the specified prototype object and properties.

### How to Implement Prototypal Inheritance with Constructor Functions in JavaScript

We will use a function to create prototypal inheritance. We will start by implementing a User function 
expression. Remember to always start the name of a constructor function with capital letter (standard 
convention).

```js
function User(name){
    this.name = name;

    // never create function inside constructor function
    this.printName = function(){
        console.log(this.name);
    }
    
    console.log(this);
}


let kedar = new User("kedar")
```

Output:

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/ss2-2.png "img12")

We created a constructor function in the above example. But what is the new keyword? With the help of 
the **new** keyword we can create an instance of that constructor.

When we create an instance of the constructor object, an empty object is created ({}). This empty 
object ({}) is then linked to the prototype.

We should never create a function inside of a constructor function. Because every time an instance is 
created, a new function is created with it which we created inside the constructor function. This will 
create major issues for performance.

The solution to this problem is prototypes. We can define a function on the prototype of an object 
directly. So the object created by using that constructor function will have access to that function.

Example:

```js
function User(name){
    this.name = name;
    
    console.log(this);
}

User.prototype.printName = function(){
	console.log(this.name)
}


let kedar = new User("kedar")
```

Prototype using constructor function:

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/ss3-2.png "img13")

In the above output, you can see the **printName()** method in the prototype of the User constructor 
function. This is the preferred way to create a function in a constructor function to optimize 
performance.
So now all objects created by this constructor function will have access to the **printName()** 
function.

We can access these functions with **objectName.functionName()** like this:

```js
function User(name){
    this.name = name;
    
    console.log(this);
}

User.prototype.printName = function(){
	console.log(this.name)
}


let kedar = new User("kedar")
kedar.printName()
```

We can access the prototype of the constructor function with the following syntax:

```js
console.log(User.__proto__)
```

The object prototype is the same as the constructor function prototype. Don't believe me? Check this 
out:

```js
console.log(kedar.__proto__ === User.prototype) 
// True

console.log(User.prototype.isPrototypeOf(kedar))
// True
```

The prototype of User is the prototype used by its object and doesn't belong to User.

```js
console.log(User.prototype.isPrototypeOf(User))
// False
```

We can also link a variable to prototype:

```js
User.prototype.species = "Homo Sapiens"
```

Now this variable belong to prototype and not to object. We can check this by using 
**hasOwnProperty()**.

### Prototypal Inheritance of Built-in Objects

We have many methods available to use on arrays. How does this work?
The answer is prototypal inheritance. When we create a new array, every time it inherits from Array.
prototype. That is how we have access to all those different methods.

```js
const arr = [1,2,3,4,5]
console.log(arr)
```
![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/ss5-2.png "img14")

We can also attach our own method to **Array.prototype** so that whenever we create new array we will 
have access to that method.

```js
const arr = [1,2,4,4,5,5]

Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique());
```
![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/ss6-2.png "img15")

### How to Implement Prototypal Inheritance with ES6 Classes in JavaScript

We can implement OOP using classes, but behind the scenes it uses prototypal inheritance. This method 
was introduced to make sense to people coming from other languages like C++ and Java.

We will implement the User classes from the above example:

```js
// Class Expression
class User = class{

}

// Class Declaration
class User{

}
```

In the above example, we can see that there are 2 ways to implement a class in JavaScript. You can 
choose either one according to your preference.

Inside the class, the first thing we need to do is add a constructor method. The constructor can also 
take arguments.

```js
class User{
	constructor(name){
    	this.name = name
    }
    
    printName(){
        console.log(this.name);
    }
}

const kedar = new User("kedar")
```

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/ss7-1.png "img16")

Remember that whenever we create an object of a class, a constructor is invoked first. If there is no 
constructor, the default constructor is invoked which does nothing.

## WHAT ARE SETTERS AND GETTERS?

These are simple methods of classes which will get and set a value. But from the outside they look like 
simple methods. Let's take a look at the below example.

```js
class User{
	constructor(name){
    	this._name = name
    }

    get getName(){
        console.log(this._name)
    }

    set setName(newName){
        this._name = newName
    }
}

const kedar = new User("kedar")
kedar.setName = "John"
kedar.getName
```

In above example, you can see the getter **getName** logs a name. Setters are used to set the value of 
an existing property. When setting a name using setter, we have to use (_) before the name of the 
property as a convention.

## HOW TO USE STATIC METHODS

Static methods are bound to a class and not to the instances of class or object of the class. We can 
access static methods through classes only and not through the object of that class.

```js
class User{
	constructor(name){
    	this._name = name
    }

    static anonymous(){
        console.log("anonymous");
    }
}

const kedar = new User("kedar")
kedar.anonymous() // error
User.anonymous() // "anonymous"
```

We can directly create static methods inside classes using the static keyword before the method name. 
In the above example, notice that we can only call the static method on a class and not on a class 
object.

There is one more way to implement a static method:

```js
class User{
	constructor(name){
    	this._name = name
    }
}

User.anonymous = function(){
	console.log("anonymous");
}

const kedar = new User("kedar")
kedar.anonymous() // error
User.anonymous() // "anonymous"
```

## HOW TO IMPLEMENT PROTOTYPAL INHERITANCE WITH OBJECT.CREATE()

The **Object.create()** static method creates a new object, using an existing object as the prototype 
of the newly created object.

```js
const User = {
    init(name){
        this.name = name
    },
    
    printName(){
        console.log(this.name);
    }
}

let kedar = Object.create(User)
kedar.init("kedar")
kedar.printName()
```

The newly created object will inherit all the prototype object's properties. You can specify a second 
parameter to add new properties to the object, that the prototype lacked:

```js
const newObject = Object.create(prototype, newProperties)
```

```js
const User = {
    
    printName(){
        console.log(this.name);
    }
}

let properties = {
    name: {
    	value:"John"
    }
    
}

let John = Object.create(User,properties)
John.printName()
```

## HOW INHERITANCE WORKS IN JS

Inheritance enables you to define a class/object that takes all the functionality from a parent class/
object and allows you to add more. Using class inheritance, a class/object can inherit all the methods 
and properties of another class. It is a useful feature that allows code reusability.

Now we will take a look at inheritance in the constructor function, ES6 classes, and Object.create().

### Constructor Function

Let's understand constructor function inheritance by example. If you don't know how inheritance works 
at a high level, check out the section where we discussed "How Do We Actually Design a Class".

Example:

```js
const User = function(name, password){
    
    this.name = name
    this.password = password
}

User.prototype.printName = function(){
    console.log(this.name);
}

const Admin = function(name, password){
    this.name = name
    this.password = password
}

Admin.prototype.Stats = function(){
    console.log("Stats");
}

const kedar = new Admin("kedar", 12345)
kedar.Stats()
```

In the above code, we have 2 constructor functions, and they have some similarities. Still we wrote it 
twice which violates the DRY (Don't Repeat Yourself) principle. To avoid repeating the same code, we 
use inheritance.

```js
const User = function(name, password){
    
    this.name = name
    this.password = password
}

User.prototype.printName = function(){
    console.log(this.name);
}

const Admin = function(name, password, course){
    User.call(this, name, password)
    this.course = course
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.Stats = function(){
    console.log("Stats");
}

const kedar = new Admin("kedar", 12345, "JavaScript")
kedar.printName()
```

In the above code, first in the Admin (child) function we attached **this** to the User (parent) and 
called it with parameters. Once we did that, we were able to access the name and password fields. But 
we were not able to access the methods of the parent function. Because we need to connect the prototype 
of User and Admin.

For that, just after the child function, we pointed the Admin prototype to the User prototype which 
gave us access to the methods of the parent function (User).

Make sure to point the child (Admin) prototype to the parent (User) function immediately after the 
child (Admin) function. Because it returns an empty object and removes all methods on the child (Admin) 
function. So always create methods of the child (Admin) function after pointing the child (Admin) 
prototype to the parent (User) prototype.

Now let's see how our prototype chain looks:

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/ss8-1.png "img17")

At the bottom there is an Object prototype. After that we can see there is a User prototype and at the 
top we see an Admin prototype.

### ES6

It is super simple to implement inheritance using ES6 syntax. But remember ES6 uses constructor 
functions to implement inheritance behind the scenes.

```js
class User{
    constructor(name, password){
        this.name = name
        this.password  =password
    }

    printName(){
        console.log(this.name);
    }
}

class Admin extends User{
    constructor(name, password, course){
        super(name, password)
        this.course = course
    }

    Stats(){
        console.log("Stats");
    }
}

const kedar = new Admin("kedar", 123456, "JavaScript")
kedar.printName()
```

So we have 2 classes, User and Admin. When we want to inherit, we simply add **extends** and the class 
we want to inherit from in-front of the child class similar to the syntax shown in the above code.

When we are done with that, in the constructor of the child class, we call the **super()** method to 
pass an argument to the parent class which is required. That's how we can implement inheritance in 
JavaScript using ES6 syntax.

We can also **override** the parent method by implementing a method with the same name in the child 
class.

```js
class User{
    constructor(name, password){
        this.name = name
        this.password  =password
    }

    printName(){
        console.log(this.name);
    }
}

class Admin extends User{
    constructor(name, password, course){
        super(name, password)
        this.course = course
    }

    Stats(){
        console.log("Stats");
    }
    
    printName(){
    	console.log("Child class " + this.name)
    }
}

const kedar = new Admin("kedar", 123456, "JavaScript")
kedar.printName()
```

### Object.create()

Implementing inheritance in **Object.create()** is simple. Check out the code below:

```js
const User = {
    printName(){
        console.log(this.name);
    },

    init(name, password){
        this.name = name
        this.password = password
    }
}

const Admin = Object.create(User)
Admin.init = function(name, password, course){
    User.init.call(this, name, password)
    this.course = course
}

Admin.stats = function(){
    console.log("Stats");
}

const kedar = Object.create(Admin)
kedar.init("kedar", 123456)
kedar.printName()
kedar.stats()
```

![Alt text](https://www.freecodecamp.org/news/content/images/2023/01/ss9-1.png "img18")

First, we created a User function. Then we created an Admin pointing to User with the help of 
**Object.create()**. With the help of the **Admin.init()** method we called the **init()** method of 
User and passed values to the parent function.

## HOW ENCAPSULATION WORKS IN JS

Encapsulation can be defined as “the packing of data and functions into one component”. This is also 
known as grouping or bundling, and simply means to bring together data and the methods which operate on 
data. It can be a function, a class, or an object.

Encapsulation enables “controlling access to that component”. When we have the data and related methods 
in a single unit, we can control how is it accessed outside the unit. This process is called 
Encapsulation.

### Protected properties

```js
class User{
    constructor(name, password){
        this._name = name
        this._password = password
    }
}

const kedar = new User("kedar", 123456)
console.log(kedar._password);
```

A protected member is accessible within the class and any object that inherits from it. A protected 
value is shared across all layers of the prototype chain.

We used (_) in **this._name** , which is a protected property. We can still access this property 
outside of the class. This is just a convention programmers use.

If we know there is (_) in a property name we are not supposed to manipulate that property from outside 
the class.

```js
class User{
    constructor(name, password){
        this._name = name
        this._password = password
    }
    
    get getName(){
    	console.log(this._name)
    }
}

const kedar = new User("kedar", 123456)
kedar.getName
```

### Private properties

```js
class User{
    constructor(name, password){
        this.#name = name
        this._password = password
    }
    
    get getName(){
    	console.log(this._name)
    }
}

const kedar = new User("kedar", 123456)
console.log(kedar.#name);
```

To implement a truly private property in JavaScript we have to use (#) before the property name or 
method. These private properties and methods will not be accessible from outside of class which will 
make them truly private.

This will help restrict accessing properties from outside of the class. If we want to access property 
from outside we have to make method which will only print properties without giving access to change 
value of that property.

```js
class User{
    #name

    constructor(name, password){
        this.#name = name
        this._password = password
    }
    
    #printName(){
        console.log(this.#name);
    }

    PrintFromPrivateMethod(){
        this.#printName()
    }
}

const kedar = new User("kedar", 123456)
kedar.PrintFromPrivateMethod()
```

# WHAT IS A PROMISE IN JS?

A **Promise** is a proxy for a value not necessarily known when the promise is created. It allows you 
to associate handlers with an asynchronous action's eventual success value or failure reason. This lets 
asynchronous methods return values like synchronous methods: instead of immediately returning the final 
value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

- **Pending**: initial state, neither fulfilled nor rejected.

- **Fulfilled**: meaning that the operation was completed successfully.

- **Rejected**: meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason 
(error). When either of these options occur, the associated handlers queued up by a promise's then 
method are called. If the promise has already been fulfilled or rejected when a corresponding handler 
is attached, the handler will be called, so there is no race condition between an asynchronous 
operation completing and its handlers being attached.

A promise is said to be settled if it is either fulfilled or rejected, but not pending.

![Alt text](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png "pchart")

You will also hear the term resolved used with promises — this means that the promise is settled or 
"locked-in" to match the eventual state of another promise, and further resolving or rejecting it has 
no effect. The States and fates document from the original Promise proposal contains more details about 
promise terminology. Colloquially, "resolved" promises are often equivalent to "fulfilled" promises, 
but as illustrated in "States and fates", resolved promises can be pending or rejected as well. 
For example:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

This promise is already resolved at the time when it's created (because the **resolveOuter** is called 
synchronously), but it is resolved with another promise, and therefore won't be fulfilled until 1 
second later, when the inner promise fulfills. In practice, the "resolution" is often done behind the 
scenes and not observable, and only its fulfillment or rejection are.

## CHAINED PROMISES

The methods **Promise.prototype.then(), Promise.prototype.catch(), and Promise.prototype.finally()** 
are used to associate further action with a promise that becomes settled. As these methods return 
promises, they can be chained.

The **.then()** method takes up to two arguments; the first argument is a callback function for the 
fulfilled case of the promise, and the second argument is a callback function for the rejected case. 
Each **.then()** returns a newly generated promise object, which can optionally be used for chaining; 
for example:

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
```

Processing continues to the next link of the chain even when a **.then()** lacks a callback function. 
Therefore, a chain can safely omit every rejection callback function until the final **.catch()**.

Handling a rejected promise in each **.then()** has consequences further down the promise chain. 
Sometimes there is no choice, because an error must be handled immediately. In such cases we must throw 
an error of some type to maintain error state down the chain. On the other hand, in the absence of an 
immediate need, it is simpler to leave out error handling until a final **.catch()** statement. A 
**.catch()** is really just a **.then()** without a slot for a callback function for the case when the 
promise is fulfilled.

```js
myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

Using **arrow functions** for the callback functions, implementation of the promise chain might look 
something like this:

```js
myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });
```

The termination condition of a promise determines the "settled" state of the next promise in the chain. 
A "fulfilled" state indicates a successful completion of the promise, while a "rejected" state 
indicates a lack of success. The return value of each fulfilled promise in the chain is passed along to 
the next **.then()**, while the reason for rejection is passed along to the next rejection-handler 
function in the chain.

The promises of a chain are nested in one another, but get popped like the top of a stack. The first 
promise in the chain is most deeply nested and is the first to pop.

**(promise D, (promise C, (promise B, (promise A) ) ) )**

When a **nextValue** is a promise, the effect is a dynamic replacement. The **return** causes a promise 
to be popped, but the nextValue promise is pushed into its place. For the nesting shown above, suppose 
the **.then()** associated with "promise B" returns a **nextValue** of "promise X". The resulting 
nesting would look like this:

**(promise D, (promise C, (promise X) ) )**

A promise can participate in more than one nesting. For the following code, the transition of 
**promiseA** into a "settled" state will cause both instances of **.then()** to be invoked.

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

An action can be assigned to an already "settled" promise. In that case, the action (if appropriate) 
will be performed at the first asynchronous opportunity. Note that promises are guaranteed to be 
asynchronous. Therefore, an action for an already "settled" promise will occur only after the stack has 
cleared and a clock-tick has passed. The effect is much like that of **setTimeout(action, 0)**.

```js
const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777
```

## THENABLES

The JavaScript ecosystem had made multiple Promise implementations long before it became part of the 
language. Despite being represented differently internally, at the minimum, all Promise-like objects 
implement the Thenable interface. A thenable implements the **.then()** method, which is called with 
two callbacks: one for when the promise is fulfilled, one for when it's rejected. Promises are 
thenables as well.

To interoperate with the existing Promise implementations, the language allows using thenables in place 
of promises. For example, **Promise.resolve** will not only resolve promises, but also trace thenables.

```js
const aThenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(aThenable); // A promise fulfilled with 42
```

## PROMISE CONCURRENCY

The Promise class offers four static methods to facilitate async task concurrency:

1. **Promise.all()**: Fulfills when all of the promises fulfill; rejects when any of the promises 
rejects.

2. **Promise.allSettled()**: Fulfills when all promises settle.

3. **Promise.any()**: Fulfills when any of the promises fulfills; rejects when all of the promises 
reject.

4. **Promise.race()**: Settles when any of the promises settles. In other words, fulfills when any of 
the promises fulfills; rejects when any of the promises rejects.

All these methods take an iterable of promises (thenables, to be exact) and return a new promise. They 
all support subclassing, which means they can be called on subclasses of **Promise**, and the result 
will be a promise of the subclass type. To do so, the subclass's constructor must implement the same 
signature as the **Promise()** constructor — accepting a single executor function that can be called 
with the **resolve and reject** callbacks as parameters. The subclass must also have a resolve static 
method that can be called like **Promise.resolve()** to resolve values to promises.

Note that JavaScript is single-threaded by nature, so at a given instant, only one task will be 
executing, although control can shift between different promises, making execution of the promises 
appear concurrent. Parallel execution in JavaScript can only be achieved through worker threads.

## CONSTRUCTOR

**Promise()**: Creates a **new Promise** object. The constructor is primarily used to wrap functions 
that do not already support promises.

## STATIC PROPERTIES

**Promise[@@species]**: Returns the constructor used to construct return values from promise methods.

## STATIC METHODS

- **Promise.all()**: Takes an iterable of promises as input and returns a single **Promise**. This 
returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is 
passed), with an array of the fulfillment values. It rejects when any of the input's promises reject, 
with this first rejection reason.

- **Promise.allSettled()**: Takes an iterable of promises as input and returns a single **Promise**. 
This returned promise fulfills when all of the input's promises settle (including when an empty 
iterable is passed), with an array of objects that describe the outcome of each promise.

- **Promise.any()**: Takes an iterable of promises as input and returns a single **Promise**. This 
returned promise fulfills when any of the input's promises fulfill, with this first fulfillment value. 
It rejects when all of the input's promises reject (including when an empty iterable is passed), with 
an **AggregateError** containing an array of rejection reasons.

- **Promise.race()**: Takes an iterable of promises as input and returns a single **Promise**. This 
returned promise settles with the eventual state of the first promise that settles.

- **Promise.reject()**: Returns a new **Promise** object that is rejected with the given reason.

- **Promise.resolve()**: Returns a **Promise** object that is resolved with the given value. If the 
value is a thenable (i.e. has a **then** method), the returned promise will "follow" that thenable, 
adopting its eventual state; otherwise, the returned promise will be fulfilled with the value.

- **Promise.withResolvers()**: Returns an object containing a new **Promise** object and two functions 
to resolve or reject it, corresponding to the two parameters passed to the executor of the 
**Promise()** constructor.

## INSTANCE PROPERTIES

These properties are defined on **Promise.prototype** and shared by all **Promise** instances:

- **Promise.prototype.constructor**: The constructor function that created the instance object. For 
**Promise** instances, the initial value is the **Promise** constructor.

- **Promise.prototype[@@toStringTag]**: The initial value of the **@@toStringTag** property is the 
string "Promise". This property is used in **Object.prototype.toString()**.

## INSTANCE METHODS

- **Promise.prototype.catch()**: Appends a rejection handler callback to the promise, and returns a new 
promise resolving to the return value of the callback if it is called, or to its original fulfillment 
value if the promise is instead fulfilled.

- **Promise.prototype.finally()**: Appends a handler to the promise, and returns a new promise that is 
resolved when the original promise is resolved. The handler is called when the promise is settled, 
whether fulfilled or rejected.

- **Promise.prototype.then()**: Appends fulfillment and rejection handlers to the promise, and returns 
a new promise resolving to the return value of the called handler, or to its original settled value if 
the promise was not handled (i.e. if the relevant handler **onFulfilled** or **onRejected** is not a 
function).

## EXAMPLES

- Basic Example:

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML API.
  setTimeout(() => {
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log(`Yay! ${successMessage}`);
});
```

- Example with diverse situations: 

```js
// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(`Too large: ${value}`);
    }
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("Trouble getting number", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(`Still too large: ${value}`);
    } else {
      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Had previously handled error");
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("All done"));
```

This example shows diverse techniques for using Promise capabilities and diverse situations that can 
occur. To understand this, start by scrolling to the bottom of the code block, and examine the promise 
chain. Upon provision of an initial promise, a chain of promises can follow. The chain is composed of .
**then()** calls, and typically (but not necessarily) has a single **.catch()** at the end, optionally 
followed by **.finally()**. In this example, the promise chain is initiated by a custom-written new 
**Promise()** construct; but in actual practice, promise chains more typically start with an API 
function (written by someone else) that returns a promise.

The example function **tetheredGetNumber()** shows that a promise generator will utilize **reject()** 
while setting up an asynchronous call, or within the call-back, or both. The function promiseGetWord() 
illustrates how an API function might generate and return a promise in a self-contained manner.

Note that the function **troubleWithGetNumber()** ends with a throw. That is forced because a promise 
chain goes through all the **.then()** promises, even after an error, and without the throw, the error 
would seem "fixed". This is a hassle, and for this reason, it is common to omit onRejected throughout 
the chain of **.then()** promises, and just have a single onRejected in the final **catch()**.

This code can be run under NodeJS. Comprehension is enhanced by seeing the errors actually occur. To 
force more errors, change the **threshold** values.

# WHAT DO ASYNC AND AWAIT DO FOR US?

Async/await is a feature in JavaScript that allows you to work with asynchronous code in a more 
synchronous-like manner, making it easier to write and understand asynchronous code.

Async Functions always return a promise. Await Keyword is used only in Async Functions to wait for 
promise.

JS Async/Await is the extension of promises that we get as support in the language.

## ASYNC FUNCTION

The **async function** declaration creates a binding of a new async function to a given name. The await 
keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be 
written in a cleaner style and avoiding the need to explicitly configure promise chains.

### Syntax

```js
async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}
```

### Parameters

- **Name**: The function's name.

- **Param**: The name of a formal parameter for the function.

- **Statements**: The statements comprising the body of the function. The **await** mechanism may be 
used.

### Description

An **async** function declaration creates an **AsyncFunction** object. Each time when an async function 
is called, it returns a new **Promise** which will be resolved with the value returned by the async 
function, or rejected with an exception uncaught within the async function.

Async functions can contain zero or more **await** expressions. Await expressions make 
promise-returning functions behave as though they're synchronous by suspending execution until the 
returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return 
value of the await expression. Use of **async and await** enables the use of ordinary **try / catch** 
blocks around asynchronous code.

Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

For example, consider the following code:

```js
async function foo() {
  return 1;
}
```

It is similar to:

```js
function foo() {
  return Promise.resolve(1);
}
```

Even though the return value of an async function behaves as if it's wrapped in a **Promise.resolve**, 
they are not equivalent. An async function will return a different reference, whereas **Promise.
resolve** returns the same reference if the given value is a promise. It can be a problem when you want 
to check the equality of a promise and a return value of an async function.

```js
const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false
```

The body of an async function can be thought of as being split by zero or more await expressions. 
Top-level code, up to and including the first await expression (if there is one), is run synchronously. 
In this way, an async function without an await expression will run synchronously. If there is an await 
expression inside the function body, however, the async function will always complete asynchronously.
For example:

```js
async function foo() {
  await 1;
}
```

It is also equivalent to:

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

Code after each await expression can be thought of as existing in a **.then** callback. In this way a 
promise chain is progressively constructed with each reentrant step through the function. The return 
value forms the final link in the chain.

In the following example, we successively await two promises. Progress moves through function **foo** 
in three stages:

1. The first line of the body of function **foo** is executed synchronously, with the await expression 
configured with the pending promise. Progress through **foo** is then suspended and control is yielded 
back to the function that called **foo**.

2. Some time later, when the first promise has either been fulfilled or rejected, control moves back 
into **foo**. The result of the first promise fulfillment (if it was not rejected) is returned from the 
await expression. Here **1** is assigned to **result1**. Progress continues, and the second await 
expression is evaluated. Again, progress through **foo** is suspended and control is yielded.

3. Some time later, when the second promise has either been fulfilled or rejected, control re-enters 
**foo**. The result of the second promise resolution is returned from the second await expression. Here 
**2** is assigned to **result2**. Control moves to the return expression (if any). The default return 
value of undefined is returned as the resolution value of the current promise.

```js
async function foo() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("1")),
  );
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("2")),
  );
}
foo();
```

Note how the promise chain is not built-up in one go. Instead, the promise chain is constructed in 
stages as control is successively yielded from and returned to the async function. As a result, we must 
be mindful of error handling behavior when dealing with concurrent asynchronous operations.

For example, in the following code an unhandled promise rejection error will be thrown, even if a .
**catch** handler has been configured further along the promise chain. This is because **p2** will not 
be "wired into" the promise chain until control returns from **p1**.

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}); // Attempt to swallow all errors...
```

**Async function** declarations behave similar to function declarations — they are hoisted to the top 
of their scope and can be called anywhere in their scope, and they can be redeclared only in certain 
contexts.

### Example of Async functions and execution order

```js
function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart starts ==");

  // 1. Start a timer, log after it's done
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. Start the next timer after waiting for the previous one
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart done ==");
}

async function sequentialWait() {
  console.log("== sequentialWait starts ==");

  // 1. Start two timers without waiting for each other
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. Wait for the slow timer to complete, and then log the result
  console.log(await slow);
  // 3. Wait for the fast timer to complete, and then log the result
  console.log(await fast);

  console.log("== sequentialWait done ==");
}

async function concurrent1() {
  console.log("== concurrent1 starts ==");

  // 1. Start two timers concurrently and wait for both to complete
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. Log the results together
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 done ==");
}

async function concurrent2() {
  console.log("== concurrent2 starts ==");

  // 1. Start two timers concurrently, log immediately after each one is done
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 done ==");
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrent1, 7000); // same as sequentialWait

// wait again
setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"
```

## AWAIT AND CONCURRENCY

In **sequentialStart**, execution suspends 2 seconds for the first **await**, and then another second 
for the second **await**. The second timer is not created until the first has already fired, so the 
code finishes after 3 seconds.

In **sequentialWait**, both timers are created and then **awaited**. The timers run concurrently, which 
means the code finishes in 2 rather than 3 seconds, i.e. the slowest timer. However, the **await** 
calls still run in series, which means the second await will wait for the first one to finish. In this 
case, the result of the fastest timer is processed after the slowest.

If you wish to safely perform other jobs after two or more jobs run concurrently and are complete, you 
must await a call to **Promise.all() or Promise.allSettled()** before that job.

![Alt text](https://miro.medium.com/v2/resize:fit:804/1*8Z0Da2pzA8_9H18Aqh5sIg.png "img19")

## REWRITING A PROMISE CHAIN WITH AN ASYNC FUNCTION

An API that returns a **Promise** will result in a promise chain, and it splits the function into many 
parts. Consider the following code:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => downloadFallbackData(url)) // returns a promise
    .then((v) => processDataInWorker(v)); // returns a promise
}
```

It can be rewritten with a single async function as follows:

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

Alternatively, you can chain the promise with **catch()**:

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

In the two rewritten versions, notice there is no **await** statement after the **return** keyword, 
although that would be valid too: The return value of an async function is implicitly wrapped in 
**Promise.resolve** - if it's not already a promise itself (as in the examples).
