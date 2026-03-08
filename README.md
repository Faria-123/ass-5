1.Answer:
Var:The var keyword is the traditional way to declare variables.it was the only available way to declare variables until ES6 introduced two new methods through the new keywords let and const. The scope of the variable declared with var can either be function scoped (if declared within a function) or global scoped (if declared outside of a function).A major aspect of declaring a variable with var is that the variable can be reassigned and redeclared within the same scope.var provides for hoisting. thus, when var variables are compiled, they are moved to the top of their respective scope and are initialized with a value of undefined. Because of these  behaviors,developers have moved to using let and const instead of using var.
Let:The let keyword was introduced in the ES6 as a solution to the issues of the var keyword and provides for blocks scoped variable declarations as opposed to function or global scoped variable declarations (as with var). This means that variables declared by let can exist only in the blocks of code enclosed by curly braces {}, such as in an if statement, a for loop, or a function. In contrast to var variables, let variables cannot be redeclared in the same block,they can be reassigned.as like var variables, let variables are hoisted, however, then they stayed in the TDZ .
Const: Also introduced in ES6, the const keyword defines a variable that cannot be assigned another value after its initial assigned. The const variable behaves like a block-scoped variable, so it cannot be redeclared within the same block scope. In addition, a variable defined with the const keyword must be initialized when it is defined or a runtime error will occur. If the value of the const variable does not change, the object or array to which the variable is assigned can still be modified (by adding or removing elements through push and pop). The const variable, like the let variable, is a hoisted variable but will remain in the TDZ until initialized.

2.Answer:
the spread operator (...) make array or object's element expand or spread.by this operator developer can merge,assigned array into a new array.we know that array or object is non primitive datatype .
ex:const a=[1,2,3];
const b=a;
if we change this b's element then it will change the original array a.Cause they are Non-Primitive datatype.But if we spread this a and get one by one element from a array and put it to array b by (...)operator like:
const b=[...a,4,5];
then if we change b elements then original array a will not change it's elements.


3.Answer:
a.map():
The map() function takes an array as input and returns a new array of values.the input array remains unchanged.The map function utilizes a callback function,which is called against each element in the array and the result of the function is pushed into the new array.
b.filter():
The filter() function is used to filter an array based on a given condition or criteria. The result of the filter() function is a new array, containing only the values from the original array that met the filtering conditinal criteria.
c.forEach()
The forEach() function is used to perform actions on each element of the original array.the forEach() function does not provide a new array, rather it can be used to execute functions such as printing the values or updating another variable with the new value.


4.Answer:
Arrow function uses => arrow symbol instead of function keyword.It makes the code cleaner and understandable and also it used for small function.
Normally function acts like:
function add(a, b) {
  return a + b;
} 
but in arrow  function we use 
const add=(a,b)=>{
    return a+b;
}
here in this case  we didin't write function key word and also return value a+b which stored in add.


5.answer:
Template literals are called features (introduced in ES6) that allow to create strings in a more flexible and readable way. They use backticks ( ) instead of single quotes (' ') or double quotes (" ").
a.String Interpolation:
One of the main uses of template literals is string interpolation, which means inserting variables or expressions directly inside a string using ${}.
ex:const a=`hello my nam ${name}`;
b.Multi-line Strings:
Template literals allow you to write multi-line strings without using \n.using 
const x=`hi
        djf
         `;
c.Dynamic Strings:
we can also place JavaScript expressions inside ${}.