//----------------------Chapter no.17 - 20----------------------

//---------------------------Q1---------------------------
var emptyarray = [[],[],[]];
console.log(emptyarray);

//---------------------------Q2---------------------------
var multiarray = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
console.log(multiarray);

//---------------------------Q3---------------------------
for(var i=1; i<=10; i++){
    document.write(`${i} <br>`)
}
document.write("<br><br>")

//---------------------------Q4---------------------------
var tableNo = prompt("Enter a number to show its multiplication table")
var tableLength = prompt("Enter length of table")
for(i=1; i<=tableLength; i++){
    document.write(`${tableNo} x ${i} = ${tableNo*i}<br>`);
}
document.write("<br><br>")

//---------------------------Q5---------------------------
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for(i=0; i<fruits.length; i++){
    document.write(`${fruits[i]}<br>`);
}
for(i=0; i<fruits.length; i++){
    document.write(`Element at index ${i} is ${fruits[i]}<br>`);
}
document.write("<br><br>")

//---------------------------Q6---------------------------
document.write("<b>Counting:</b><br>")
for(i=1; i<=15; i++){
    document.write(i + "," );
}
document.write("<br><b>Reverse Counting</b><br>")
for(i=15; i>=1; i--){
    document.write(i + "," );
}
document.write("<br><b>Even Counting</b><br>")
for(i=0; i<=20; i=i+2){
        document.write(i + "," );
}
document.write("<br><b>Odd Counting</b><br>")
for(i=1; i<=20; i=i+2){
        document.write(i + "," );
}
document.write("<br><b>Series:</b><br>")
for(i=2; i<=20; i=i+2){
        document.write(i + "k," );
}
document.write("<br><br>")


//---------------------------Q7---------------------------
var items = ["cake","apple pie","cookie","chips","patties"]
var user = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase()
var match = false

for(i=0; i<=items.length; i++){
    if(user == items[i]){
        document.write(`${user} is found at index ${i}`);
        match = true
        break
    }
}if(!match){
    document.write(`We are sorry ${user} is not available in our bakery`);
}
document.write("<br><br>")

//---------------------------Q8---------------------------
var numberArray = [24,54,78,91,12]
var largestNumber = Math.max(...numberArray)
document.write(`Array items: ${numberArray}<br>The Largest number is ${largestNumber}<br><br>`);

//---------------------------Q9---------------------------
var numberArrayMin = [24,54,78,91,12]
var largestNumber = Math.min(...numberArrayMin)
document.write(`Array items: ${numberArrayMin}<br>The Largest number is ${largestNumber}<br><br>`);

//---------------------------Q10---------------------------
var num = 5
for(i=1; i<=20; i++){
    document.write(`${num*i}, `)
}