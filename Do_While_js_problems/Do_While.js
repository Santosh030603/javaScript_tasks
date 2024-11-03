//1st Question

let number = +prompt("enter input: ");
let sum = 0;
let i = 1;
do {
    if (number % i === 0) {
        sum += i;
    }
    i++;
} while (i <= number / 2);

if (sum === number) {
    console.log(number + " is a perfect number.");
} else {
    console.log(number + " is not a perfect number.");
}

//2nd Question

let num = +prompt("enter input: ");
let isPrime = true;
let k = 2;
if (num <= 1) {
    isPrime = false;
} else {
    do {
        if (num % k === 0) {
            isPrime = false;
            break;
        }
        k++;
    }
    while (k <= Math.round(num));
}
if (isPrime) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}

//3rd Question

let n = 5;
let l = 1;
do {
    let row = "";
    let j = 0;
    do {
        row += String.fromCharCode(65 + j);
        j++;
    } while (j < l);
    console.log(row);
    l++;
} while (l <= n);