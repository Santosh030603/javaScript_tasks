console.log("Question:1");
console.log("1. Income Tax Calculation Based on Income Slabs : Write a program to calculate income tax based on the following slabs:");
let income = +prompt("enter the income : ");
if(income > 250000 && income <= 500000){
    console.log("apply 5% tax on 250000")
    let exceed = income - 250000;
    console.log(`Exceed amount : ${exceed}`)
    let tax = (1/20)*exceed;
    console.log(`total-tax_payable = ${tax}`);
}
else if(income > 500000 && income <= 1000000){
    console.log("apply 25% tax on 250000")
    let exceed = income - 500000;
console.log(`Exceed Amount : ${exceed}`)
let tax = ((1/5)*exceed)+12500;
console.log(`total_tax_payable = ${tax}`);
}
else if( income > 1000000){
    console.log("apply 55% tax on 250000 ")
    let exceed=income-1000000;
    console.log(`Excee90000d Amount : ${exceed}`)
    let tax=((3/10)*exceed)+112500;
    console.log(`total_tax_payable = ${tax}`);
}
else{
    if(income<250000){
        console.log("No tax")
    }
}


console.log("Question:2");
console.log(" Shipping Cost Based on Weight and Destination : Write a program that calculates the shipping cost for a parcel based on its weight and destination");
let weight = +prompt("enter the weight : ");
let destination = prompt("enter destination : ");
if(weight <= 1){
    let a = (destination == "local") ? ("total shipping cost is : 5$") : (destination == "national") ? ("total shipping cost is : 8$") : (destination == "international") ? ("total shipping cost is : 15$") : ("invalid destination");
    console.log(a)
}
else if(weight > 1 && weight <= 5){
    let a = (destination == "local") ? ("total shipping cost is : 10$") : (destination == "national") ? ("total shipping cost is : 15$") : (destination == "international") ? ("total shipping cost is : 30$") : ("invalid destination");
    console.log(a)
}
else if(weight > 5 && weight <= 10){
    let a = (destination == "local") ? ("total shipping cost : $20") : (destination == "national") ? ("total shipping cost : 25$") : (destination == "international") ? ("total shipping cost : 50$") : ("invalid destination");
    console.log(a)
}
else if(weight > 10){
    let a = (destination == "local") ? ("total shipping cost : 30$") : (destination == "national") ? ("total shipping cost : 35$") : (destination == "international") ? ("total shipping cost : 70$") : ("invalid destination")
    console.log(a)
}

console.log("Question:3");
console.log("Electricity Bill Calculation Based on Usage : Write a program to calculate the electricity bill based on the number of units consumed");
let units = +prompt("enter the number of units : ");
if(units <= 100){
    console.log("total electricity bill amount : ", (units)*1)
}
else if(units > 100 && units <= 300){
    console.log("total electricity bill amount : ", (units)*1 + (units-100)*1.5)
}
else if(units > 300){
    console.log("total electricity bill amount : ", (units)*1 + (units-100)*1.5 + (units-300)*2);
}