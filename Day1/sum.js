const num = document.getElementsByClassName("number");

function sum2Digit(n){
    if (n >= 10 && n <= 99){
        return n%10 + Math.floor(n/10);  
    } else {
        console.log("Invalid");
    }
     
}
function test(name){
    console.log("This prints to the console when you run test");
    let ans = sum2Digit(num);
}

console.log(sum2Digit(29))
console.log(sum2Digit(18))