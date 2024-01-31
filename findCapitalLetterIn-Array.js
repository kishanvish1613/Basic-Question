let arr = ['kishan', 'manisH', 'l', 'a'];

for(let i=0; i<arr.length; i++){
    if(arr[i].match(/[A-Z]/g)){
        console.log(arr[i]);
    }
}