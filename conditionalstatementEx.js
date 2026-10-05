let n="10";
if(n==10){
    console.log("n is 10"); 
}

let n1=5;
let n2=6;
if(n1===5 && n2===5){
    console.log("condition - True : Both are equals to 5");
}
else{
   console.log("condition - false : Botha are not equal to 5"); 
}

if(NaN){
    console.log("Truthy - if block");
}
else{
    console.log(" Falsy - Else block"); 
}

if(false){
    console.log("1st condition is true- If block");
}
else if(false){
    console.log("1st Condition is false, 2nd condition is true - 1st else block");
}
else if(false){
    console.log("1st Condition is false, 2nd condition is false - 2nd else block");
}
else{
    console.log("All above conditions are false - Else Block");
}


if(true){
    console.log("First if block");
}
if(true){
    console.log("2nd block");
}
if(true){
    console.log("3rd block");
}

//IF CONDITION

//1. Check whether a number is positive.
n=10;
if (n>0){
    console.log("N is positive number")
}

//2. Check whether a student's marks are greater than 50.
marks=65;
if (marks>50){
    console.log("Pass"," Marks = ",marks)
}

//3.Check whether a person's age is eligible to vote.
age=21;
if (age>=18){
    console.log("Eligible For Vote")
}


//4.Check whether a number is divisible by 5.
n=35;
if (n%5 ==0){
    console.log("N is Divisible by 5")
}


//5.Check whether a given year is a leap year.
year=2024;
if ((year%400==0) || (year%4 == 0 && year%100 != 0)){
    console.log(year,"is a Leap Year")
}


//6. Check whether a three-digit number has 7 as its middle digit.
n=376;
n=parseInt(n/10);
n=n%10;
if (n===7){
    console.log("Three-digit number has 7 as its middle digit")
}


//IF-ELSE CONDITION

//1. Check whether a number is even or odd.
n=10
if (n%2==0){
    console.log(n," is a Even Number")
} else {
    console.log(n," is a Odd Number")
}


//2. Check whether a person is eligible for a driving license based on age.
age=25;
if (age>=18){
    console.log("The Person is Eligible for Driving License")
} else {
    console.log("The Person is Not Eligible for Driving License")
}


//3. Check whether a number is positive or negative.
//n=-12;
if (n>0){
    console.log("The is Number Positive",n)
} else {
    console.log("The is Number Negative",n)
}


//4. Check whether a student passed or failed based on marks.
marks=65;
if (marks > 50){
    console.log("Pass")
} else {
    console.log
("Fail")
}


//5. Check whether a number is divisible by both 3 and 5.
n=15;
if (n%3==0 && n%5==0){
    console.log(n,"divisible by both 3 and 5")
} else {
    console.log(n," not divisible by both 3 and 5")
}


//6. Check whether a person gets a discount based on shopping amount.
shopping_amt=6500;
if (shopping_amt>5000){
    console.log("Discount Available")
} else {
    console.log("Discount Not Available")
}



IF-ELSE-IF

//1. Display whether a number is positive, negative, or zero.
n=0;
if (n>0){
    console.log("positive")
} else if (n<0){
    console.log("Negative")
} else {
    console.log("Zero")
}


//2. Display grade based on marks.
marks=55;
if (marks>90){
    console.log("Grade : A")
} else if (marks>60 && marks<89){
    console.log("Grade : B")
} else{
    console.log("Grade : C")
}


//3. Display the largest among three numbers.
a=10;
b=20;
c=30;
if (a>b && a>c){
    console.log(a,"is greater number among two numbers")
} else if (b>a && b>c){
    console.log(b,"greater number among two numbers")
} else if (c>a && c>b){
    console.log(c,"is greater number among two numbers")
} else {
    console.log("All above conditions are false")
}


//4. Display the type of triangle based on its angles.
a=60;
b=50;
c=70;
if (a==b && b==c){
    console.log("Equilateral Triangle")
} else if (a==b || b==c || c==a){
    console.log("Isosceles Triangle")
} else if (a != b && b != c && c != a){
    console.log("Scalene Triangle")
}


//5. Calculate electricity bill category based on units consumed.
units=250;
if (units<=100){
    bill_amt=units*2
    console.log("Electricity Bill = ",bill_amt)
} else if (units<=200){
    bill_amt=units*3
    console.log("Electricity Bill = ",bill_amt)
} else if (units<=300){
    bill_amt=units*5
    console.log("Electricity Bill = ",bill_amt)
} else if (units>300){
    bill_amt=units*7
    console.log("Electricity Bill = ",bill_amt)
}


//6. Display income tax category based on annual income.
amt=500000;
if (amt<300000){
    console.log("No Tax")
} else if (amt<700000){
    console.log("Low Tax")
} else if (amt<1200000){
    console.log("Medium Tax")
} else if (amt>1200000){
    console.log("High Task")
}


