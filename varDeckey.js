var a=12;
console.log("a= ",a);

var a1=52;
console.log("a1= ",a1);

let n5=3;
console.log("let n=", n5);
let n1=4;
console.log("let n=",n1);

const n2=3;
console.log("const n=", n2);
const n3=4;
console.log("const n=",n3);

var a;
console.log(a);
let n4;
console.log("let",n4);
// const x1;
// console.log("const",x1);

function varEx(){
    if(true){
        var n=10;
        console.log("Inside if", n);
    }
    console.log("outside if",n)
}
varEx();


function letEx(){
    if(true){
        let n=10;
        console.log("Inside if", n);
    }
    console.log("outside if",n)
}
letEx();

function constEx(){
    if(true){
        const n=10;
        console.log("Inside if", n);
    }
    console.log("outside if",n)
}
constEx();

console.log(n); //n is not defined -- due to hoisting it shows undefined.
var n=10;
console.log(n);

sayHello();
function sayHello(){
    console.log("Hello");
    
}

console.log(x);
let x=10;

console.log(b);
const b=10;

