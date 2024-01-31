function findMax(val1, val2, val3){
    if(val1 > val2 && val1 > val3){
        return val1;
    }else if(val2 > val3){
        return val2
    }else{
        return val3
    }
}


function findMin(val1, val2, val3){
    if(val1 < val2 && val1 < val3){
        return val1;
    }else if(val2 < val3){
        return val2
    }else{
        return val3;
    }
}

let result = findMin(-10, -11, -50);
console.log(result);