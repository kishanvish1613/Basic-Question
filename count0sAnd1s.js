function countZerosAndOnes(arr){
    let countZero = 0;
    let countOnes = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            countZero++;
        }else{
            countOnes++;
        }
    }
    console.log('countZero :',countZero);
    console.log('countOnes :',countOnes);
}

function countZerosAndOnes(arr){
    let countZero = 0;
    let countOnes = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            countZero++;
        }else{
            countOnes++;
        }
    }
    let b = [];
    b.push('Zeros: '+countZero, 'Ones: '+countOnes)
    return b;
}

let arr = [1, 1, 0, 1]
let ans = countZerosAndOnes(arr);
console.log(ans);