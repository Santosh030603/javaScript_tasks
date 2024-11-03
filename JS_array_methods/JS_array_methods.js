//1st Question

let totalAmount = prompt("Enter the Bill Amount : ")
if (totalAmount < 200) {
    console.log("No discount applied")
} else if (totalAmount >= 200 && totalAmount < 500) {
    let discount = (10 / 100) * totalAmount;
    console.log(`The bill after discount is ${totalAmount - discount}`)
} else if (totalAmount > 500) {
    let discount = (20 / 100) * totalAmount;
    console.log(`The bill after discount is ${totalAmount - discount}`)
} else {
    console.log("Enter a valid amount")
}

//2nd Question

let temperature = +prompt("Enter the temperature : ")
if (temperature < 20) {
    console.log("Cold")
} else if (temperature >= 20 && temperature < 40) {
    console.log("Moderate")
} else if (temperature > 40) {
    console.log("Extreme Heat")
} else {
    console.log("Enter a valid number")
}

//3rd Question

let marks = prompt("Enter the marks : ")
if (marks >= 90) {
    console.log(`Grade : A+`)
} else if (marks >= 80 && marks <= 89) {
    console.log(`Grade : A`)
} else if (marks >= 70 && marks <= 79) {
    console.log(`Grade : B`)
} else if (marks < 70) {
    console.log(`Grade : C`)
} else {
    console.log("Enter valid marks ")
}

//4th Question

let lateDays = prompt("Enter the days : ")
if (lateDays >= 1 && lateDays <= 5) {
    console.log(lateDays * 2)
} else if (lateDays >= 6 && lateDays <= 10) {
    console.log(lateDays * 3)
} else if (lateDays > 10) {
    console.log(lateDays * 5)
} else {
    console.log("Enter the valid days")
}

//5th Question

let favoriteFood = prompt("Enter the Favorite food : ");
ne = favoriteFood.toLowerCase().trim();
if (ne === "pizza") {
    console.log("Pizza lover !")
} else if (ne === "pasta") {
    console.log("Pasta lover !")
} else if (ne === "burger") {
    console.log("Burger lover !")
} else {
    console.log("Invalid choice")
}

//6th Question

let age = prompt("Enter the Age : ")
let income = prompt("Enter the Income : ")
let hasCriminalRecord = prompt("Has any crimminal record : (yes or no) ")
if (hasCriminalRecord === "no") {
    hasCriminalRecord = true;
} else {
    hasCriminalRecord = false;
}
if (age >= 21 && age <= 60 && income > 20000 && hasCriminalRecord) {
    console.log("Eligible for Loan")
} else {
    console.log("Not Eligible for Loan")
}

//7th Question

let salesTarget = prompt("Enter the sales target : ")
let monthlySalary = 0;
let bonus = 0;
if (salesTarget > 120) {
    monthlySalary = prompt("Enter the montly salary : ")
    bonus = (20 * monthlySalary) / 100;
    console.log(bonus);
} else if (salesTarget >= 100 && salesTarget <= 120) {
    monthlySalary = prompt("Enter the montly salary : ")
    bonus = (10 * monthlySalary) / 100;
    console.log(bonus);
} else if (salesTarget < 100) {
    console.log("No bonus")
} else {
    console.log("Enter a valid details")
}

//8th question

let totalClasses = prompt("Enter the total classes : ");
let classesAttended = prompt("Enter the classes attended : ")
let attendance = (classesAttended / totalClasses) * 100;
if (attendance >= 75) {
    console.log("Eligible")
} else {
    console.log("Not Eligible")
}

//9th Question

let purchaseAmount = prompt("Enter the purchase amount : ")
let point = 0;
if (purchaseAmount < 100) {
    point = Math.round(purchaseAmount / 10) * 1;
} else if (purchaseAmount >= 100) {
    point = Math.round(purchaseAmount / 10) * 2;
}
console.log(`${point} points`)

//10th Question

let str = "excellence";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
        count++;
    }
}
console.log(count);

//11th Question

let currentDay = prompt("Enter the current day : ");
let expiryDay = 0;
if (currentDay >= 1 && currentDay <= 365) {
    expiryDay = prompt("Enter the expiryDay : ")
    if (expiryDay >= 1 && expiryDay <= 365) {
        if (expiryDay < currentDay) {
            console.log("Expired")
        } else if (expiryDay >= currentDay) {
            console.log("Not Expired")
        } else {
            console.log("Enter a valid details!")
        }
    } else {
        console.log("Enter a valid details!")
    }
} else {
    console.log("Enter a valid details!")
}

//12th Question

let arr = [2, 3, 4, 5];
let array = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        array.push("even")

    } else if (arr[i] % 2 === 1) {
        array.push("odd")
    }
}
let patternBroken = false;
for (let i = 0; i < arr.length; i++) {
    if (i + 1 < array.length) {
        if ((array[i] === "even" && array[i + 1] !== "odd") || (array[i] === "even" && array[i + 1] !== "odd")) {
            patternBroken = true;
        }
    }
}
if (patternBroken) {
    console.log("Pattern Broken");
}
else {
    console.log("Pattern Followed");
}

//13th Question

let balance = prompt("Enter the balance : ");
let withdrawalAmount = 0;
if (balance > 0) {
    withdrawalAmount = prompt("enter the withdrawalamount : ")
    if (withdrawalAmount > 0) {
        if (balance >= withdrawalAmount) {
            console.log("Transaction Approved")
        } else if (balance < withdrawalAmount) {
            console.log("Insufficient Funds")
        }
    } else {
        console.log("enter a valid withdrawalAmount !")
    }
} else {
    console.log("enter a valid balance!")
}

//14th Question

let str1 = "abacaba".toLowerCase();
let arr1 = [];
for (let i = 0; i < str1.length; i++) {
    if (str1[i] === "a" || str1[i] === "e" || str1[i] === "i" || str1[i] === "o" || str1[i] === "u") {
        arr1.push("v");
    } else {
        arr1.push("c");
    }
}
let patternFollowed = false;
for (let i = 0; i < arr1.length; i++) {
    if ((arr1[i] == "v" && arr1[i + 1] !== "c") || (arr1[i] == "c" && arr1[i + 1] !== "v")) {
        patternFollowed = true;
    }
}
if (patternFollowed) {
    console.log("Pattern Followed")
} else {
    console.log("Pattern Broken")
}

//15th Question

let n = +prompt("Enter the number : ");
let sum = 0;
while (n > 0) {
    remainder = n % 10;
    sum += remainder;
    n = Math.floor(n / 10)
}
if (sum % 2 === 0) {
    console.log("Sum is even")
} else {
    console.log("Sum is odd")
}