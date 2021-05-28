// xndir 1
// Given a number. Print “odd” if the number is odd and “even” if it’s even.	


let number = 143
if(number%2 == 1){
    console.log('ODD')
} else {
   console.log('even')
} 



let number = 27
if(number%2 == 1){
    console.log('ODD')
} else {
   console.log('even')
} 



let number = 40
if(number%2 == 1){
    console.log('ODD')
} else {
   console.log('even')
} 


// xndir 2
// Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.

let number = 367
let number1 = number%10
let number2 = (number - number1) / 10%10
let number3 = (number - (number2*10) - number1)/100%10 
if (number1 <= 0) {
    console.log(number +'')
} else if (number1 > 0) {
    console.log(number1 + '' + number3 + '' + number2 + '')
}


let number = 250
let number1 = number%10
let number2 = (number - number1) / 10%10
let number3 = (number - (number2*10) - number1)/100%10 
if (number1 <= 0) {
    console.log(number +'')
} else if (number1 > 0) {
    console.log(number1 + '' + number3 + '' + number2 + '')
}

let number = 1002
let number1 = number%10
let number2 = (number - number1) / 10%10
let number3 = (number - (number2*10) - number1)/100%10
let number4 = (number - (number3 *100) - (number2 *10) - number1 ) / 1000%10
if (number1 <= 0) {
    console.log(number +'')
} else if (number1 > 0) {
    console.log(number1 + '' + number4 + '' + number3 + '' + number2 + '')
}


// xndir 3
// Given five numbers as input. Calculate and print the average of the numbers(without using arrays).

let number1 = 45
let number2 = -12
let number3 = 0
let number4 = 3
let number5 = -15
let average =( number1 + number2 + number3 + number4 + number5) / 5
console.log(average)


let number1 = 7
let number2 = 52
let number3 = -23
let number4 = 9
let number5 = -81
let average =( number1 + number2 + number3 + number4 + number5) / 5
console.log(average)



// xndir 4
// Given three numbers. Sort them by the ascending order.

let number1 = 45;
let number2 = 26;
let number3 = 78;

if (number1 < number2 && number1 < number3)
{
        if (number2 < number3)
        {
            console.log(number1 + ' ' + number2 + ' ' + number3 + ' ');
        }
        else
        {
            console.log(number1 + ' ' + number3 + ' ' + number2 + ' ');
        }
}
else if (number2 < number1 && number2 < number3)
{
        if (number1 < number3)
        {
             console.log(number2 +' '+ number1 + ' '+ number3 + ' ');
        }
        else
        {
             console.log(number2 + ' ' + number3 + ' ' + number1 + ' ');
        }
}
else if (number3 < number1 && number3 < number2)
{
        if (number1 < number2)
        {
            console.log(number3 + ' ' + number1 + ' ' + number2 + ' ');
        }
        else
        {
            console.log(number3 + ' ' + number2 + ' ' + number1 + ' ');
        }
}        


let number1 = -23;
let number2 = -456;
let number3 = 0;

if (number1 < number2 && number1 < number3)
{
        if (number2 < number3)
        {
            console.log(number1 + ' ' + number2 + ' ' + number3 + ' ');
        }
        else
        {
            console.log(number1 + ' ' + number3 + ' ' + number2 + ' ');
        }
}
else if (number2 < number1 && number2 < number3)
{
        if (number1 < number3)
        {
             console.log(number2 +' '+ number1 + ' '+ number3 + ' ');
        }
        else
        {
             console.log(number2 + ' ' + number3 + ' ' + number1 + ' ');
        }
}
else if (number3 < number1 && number3 < number2)
{
        if (number1 < number2)
        {
            console.log(number3 + ' ' + number1 + ' ' + number2 + ' ');
        }
        else
        {
            console.log(number3 + ' ' + number2 + ' ' + number1 + ' ');
        }
}        


// xndir 5
// Given the following code rewrite it using only two if operators. (Hint: use logical operators).


var n = +prompt();

    var i = 0;
    var j = 0;

    if (n % 2 === 0 && ! Math.floor(n / 10)){
            i += 1;
    }

    if (n % 3 === 0 && n % 10 === 1){
            j += 1
    }