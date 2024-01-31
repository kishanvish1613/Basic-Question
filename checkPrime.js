function checkPrime(num){
    if(num <= 1){
        return false;
    }

    for(let i=2; i*i <= num; i++){
        if(num % i == 0){
            return false
        }
    }

    return true;
}

let ans = checkPrime(163);
console.log(ans);