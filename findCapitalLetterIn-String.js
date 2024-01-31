let str = 'kisHaN lol P';

for(let i=0; i<str.length; i++){
    if(str[i].match(/[A-Z]/g)){
        console.log(str[i]);
    }
}