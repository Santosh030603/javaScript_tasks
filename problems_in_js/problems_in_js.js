//1st Question 

let name = prompt("enter the input");
let vowels = 0;
let consonants = 0;

for(let i = 0; i < name.length; i++){
    let char = name[i].toLowerCase();
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
        vowels++
    }
    else if(char >= 'a' && char <= 'z'){
        consonants++
    }
}
console.log("vowels: ", vowels);
console.log("consonants: ", consonants);

//2nd Question

let sum = 0;
for(let i = 1; i <= 30; i++) {
    if(i % 3 == 0){
        sum = sum + i;
    }
}
console.log("sum of multiples of 3 between 1 and 30:", sum);

//3rd Question

let number = +prompt("enter a value: ");
let n = number, digits = 0, add = 0;
while (n > 0) {
    digits++;
    n = (n / 10) | 0;
}
n = number;
while (n > 0) {
    let digit = n % 10;
    let power = 1;
    for (let i = 0; i < digits; i++) {
        power *= digit;
    }
    add += power;
    n = (n / 10) | 0;
}
console.log(add === number ? number + " is an Armstrong number" : number + " is not an Armstrong number");

//4th Question

let num0 = 3, num1 = 2, num2 = 6, num3 = 1, num4 = 4, num5 = 8, num6 = 2, num7 = 4, num8 = 3;
let max = num0;
for (let i = 1; i < 9; i++) {
    let current;
    if (i === 1) current = num1;
    else if (i === 2) current = num2;
    else if (i === 3) current = num3;
    else if (i === 4) current = num4;
    else if (i === 5) current = num5;
    else if (i === 6) current = num6;
    else if (i === 7) current = num7;
    else if (i === 8) current = num8;
    
    if (current > max) {
        max = current;
    }
}

console.log("Maximum number is:", max);

//5th Question

let a0 = 3, a1 = 2, a2 = 6, a3 = 1, a4 = 4, a5 = 8, a6 = 2, a7 = 4, a8 = 3;

let b = a0 + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8;
let count = 9;
let mean = b / count;

console.log("Mean (average) is:", mean);