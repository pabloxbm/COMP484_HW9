// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object

var date = new Date();
// 2. Get the current month, day, and year
var month = date.getMonth();
var day = date.getDate();
var year = date.getFullYear();

// 3. Adjust month if needed (JavaScript months are 0-based)
month = month + 1;
// 4. Add leading zeros to month/day if needed
if (month < 10) {
    month = "0" + month;
}
if (day < 10) {
    day = "0" + day;
}
// 5. Create a string in the format: "Today is MM/DD/YYYY"
var formattedData = "Today is " + month + "/" + day + "/" + year;
// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = formattedData;


// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

var numString1 = "29"
var numString2 = "60"
var decString = "17.38"
var nonNumString = "Wasabi"


// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

convertedString1 = Number(numString1)
convertedString2 = Number(numString2)
convertedString3 = Number(decString)
convertedString4 = Number(nonNumString)

isNaN1 = Number.isNaN(convertedString1)
isNaN2 = Number.isNaN(convertedString2)
isNaN3 = Number.isNaN(convertedString3)
isNaN4 = Number.isNaN(convertedString4)

isInteger1 = Number.isInteger(convertedString1)
isInteger2 = Number.isInteger(convertedString2)
isInteger3 = Number.isInteger(convertedString3)
isInteger4 = Number.isInteger(convertedString4)

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer

// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

var sentence1 = "Original: '" + numString1 + "' -> \tConverted: " + convertedString1 + " -> \tisNaN: " + isNaN1 + " -> \tisInteger: " + isInteger1
var sentence2 = "Original: '" + numString2 + "' -> \tConverted: " + convertedString2 + " -> \tisNaN: " + isNaN2 + " -> \tisInteger: " + isInteger2
var sentence3 = "Original: '" + decString + "' -> \tConverted: " + convertedString3 + " -> \tisNaN: " + isNaN3 + " -> \tisInteger: " + isInteger3
var sentence4 = "Original: '" + nonNumString + "' -> \tConverted: " + convertedString4 + " -> \tisNaN: " + isNaN4 + " -> \tisInteger: " + isInteger4

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

var finalResult = sentence1 + "<br>" + sentence2 + "<br>" + sentence3 + "<br>" + sentence4;
// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

document.getElementById("numberConversionOutput").innerHTML = finalResult;

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables

var num1 = 77
var num2 = 82
var num3 = 85
var num4 = 73
var num5 = 83
var num6 = 93

// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)

// Grade score calculator

var total = num1 + num2 + num3 + num4 + num5 + num6
var average = total / 6
    
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()

var formattedAverage = average.toFixed(2);


// 4. Build a string showing your results

var mathOutput = "Your Grade Scores: <br> "+ num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + ", " + num6 + "<br><br>Total Score: " + total + "<br>" + "Average Score: " + formattedAverage;



if(average >= 90) {
    mathOutput += "<br>" + "Grade: A"
}else if(average >= 80) {
    mathOutput += "<br>" + "Grade: B"
}else if(average >= 70) {
    mathOutput += "<br>" + "Grade: C"
}else if(average >= 60) {
    mathOutput += "<br>" + "Grade: D"
}else {
    mathOutput += "<br>" + "Grade: F"
}

if(total >= (6*100)*.7) {
    mathOutput += "<br>" + "Congratulations, you are passing!"
}else {
    mathOutput += "<br>" + "Unfortunately, you are not passing."
}



// 5. Display the results inside the element with id="mathOutput"
document.getElementById("mathOutput").innerHTML = mathOutput;


// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements


// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value

// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)

//USED IF/ELSE STATEMENTS TO CHECK IF THE AVERAGE SCORE IS A PASS OR FAIL AND GIVE THEM A LETTER GRADE