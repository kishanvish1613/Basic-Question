function isPrime(num) {
    if(num <= 1){
        return false;
    }

    for(let i=2; i*i <= num; i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
}

let n = 200;
let ans = [];
for (let i=2; i<=n; i++) {
    let check = isPrime(i);
    if(check == true){
        ans.push(i)
    }   
}

for(let j=0; j<ans.length; j++){
    console.log(ans[j]);
}
