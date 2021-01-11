//Q1

//Closure is a function which is write inside a function(parent function), it can use global variable, 
//local variable from a parent function


//Q2

//let allows you to declare variables that are limited in scope to the block, statement or expression in which that is used.
//var defines a variable globally, or locally to an entire function regardless of block scope.   

// Q3

var x = 2, fns = [];

(function(){
    var x = 5;
    for (let i = 0; i < x; i++){
        fns[i] = () => i;
    }
})();

console.log((x * 2) === fns[x*2]());