function reverseInterger(num){
    while (num !== 0) {
        let answer = num % 10;
        num = num / 10;
        num = Math.floor(num);
        console.log(answer);
    }
}

reverseInterger(123);
