let a = ['find', 'fun'];
let b = ['excited', 'fun'];

for(let i=0; i<b.length; i++){
    for(let j=0; j<a.length; j++){
        if(b[i] != a[j]){
            a.push(b[i]);
            break;
        }
    }
}

console.log(a);