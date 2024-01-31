function findFactorial(num){
    let sum = 1;
    for(let i=1; i<=num; i++){
        sum = i * sum;
    }
    return sum;
}

let ans = findFactorial(25);

console.log(ans);

