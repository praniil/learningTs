// interview question easy

let  string1 : string = "HELLO???"
let stringLen : number = string1.length;
console.log(stringLen)

for(let i = 0; i < string1.length ; i++) {
    if ( i % 2 == 0) {
        let ustring = string1[i] 
        ustring = ustring.toUpperCase();
        console.log(ustring);
    }
    else{
        console.log(string1[i].toLowerCase());
    }
}