if(true){
    console.log("Outer condition True : Outer if executed");
    if(true){
      console.log("Inner condition True : Inner if executed");
    }
    else{
        console.log("Inner condition False : Inner else executed");
    }
}
else{
     console.log("Outer condition False : Outer else executed");
}
let n=6;
if(n>0){
    console.log(`${n} is positive`);
    
    if(n%2===0){
        console.log(`${n} is Even number`);
    }
    else{
        console.log(`${n} is Odd number`);   
    }
}
else{
    console.log(`${n} is Negative`); 
}