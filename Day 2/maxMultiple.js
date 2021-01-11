function maxMultiple(divisor, bound){
    if(divisor <= 2 || divisor >= 10){
        console.log("Out of divisor");
    } 
    if(bound <= 5 || bound >= 100){
        console.log("Out of divisor");
    }
    if(bound % divisor === 0){
        return bound;
    } 
    const temp = bound - (bound % divisor);
    const maxMuli = temp / divisor;
    return maxMuli * divisor;
}

console.log(maxMultiple(3,10));
