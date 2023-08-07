//1.display a Text - Display any value in the log using function.

let a=prompt("Enter any string");
text();
function text(){
	console.log("given string is:")
	console.log(a);
}

//2.function using parameters-  Using two parameter values and return value in the console.

display(10,5)
function display(a,b){
	console.log("The parameter are:")
	console.log(a,b)
}



//3.Add two numbers- Using two number add and return value in the console.

let b=parseInt(prompt("Enter 1st number:"));
let c=parseInt(prompt("Enter 2nd number:"));
let s=b+c;
 add();
 function add(){
 console.log("sum of two number is:")
 console.log(s);
 }
 
//4.sum of two numbers -  Addition, Subtraction, Multiplication, Division.

let x=parseInt(prompt("Enter X value:"));
let y=parseInt(prompt("Enter Y value:"));
addition();
sub();
multi();
div();
function addition(){
	console.log("addition of two number is:")
	console.log(x+y);
}
function sub(){
	console.log("subrtaction of two number is:")
	console.log(x-y);
}
function multi(){
	console.log("multiplication of two number is:")
	console.log(x*y);
}
function div(){
	console.log("division of two number is:")
	console.log(x/y);
}