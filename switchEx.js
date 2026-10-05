let n4="10";
switch(n4){
    case 10:
        console.log("case 1 executed");
        break;
    case "10":
        console.log("case 2 executed");
        break;
    case 3:
        console.log("case 3 executed");
        break;
    default:
        console.log("Default block is executed");    
}

let op="-";
let n1=27;
let n2=3;
switch(op){
    case "+":
        console.log(`sum is ${n1+n2}`);
        break;
     case "-":
        console.log(`sub is ${n1-n2}`);
        break;
     case "*":
        console.log(`mul is ${n1*n2}`);
        break;
     case "/":
        console.log(`div is ${n1/n2}`);
        break;
    default:
        console.log("Enter a valid operator");
}

//fallthrough example
let n=2;
switch(n){
    case 1:
        console.log("case 1 executed");
        
    case 2:
        console.log("case 2 executed");
        
    case 3:
        console.log("case 3 executed");
      
    case 4:
        console.log(("case 4 Executed"));
        
    default:
        console.log("Default block is executed");    
}