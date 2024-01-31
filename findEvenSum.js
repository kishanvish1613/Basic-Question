function findEvenSum(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        if(i % 2 == 0){
            sum = i + sum;
        }
    }
    return sum;
}

let ans = findEvenSum(10);
console.log(ans);

