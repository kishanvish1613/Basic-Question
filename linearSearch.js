function linearSearch(arr, key){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == key){
            console.log(arr[i]);
            return true
        }
    }
    return false;
}


let a = [12, 3, 4, 9, 0];
let ans = linearSearch(a, 1);
console.log(ans);

