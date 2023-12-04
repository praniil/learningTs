// interview question easy
var string1 = "HELLO???";
var stringLen = string1.length;
console.log(stringLen);
for (var i = 0; i < string1.length; i++) {
    if (i % 2 == 0) {
        var ustring = string1[i];
        ustring = ustring.toUpperCase();
        console.log(ustring);
    }
    else {
        console.log(string1[i].toLowerCase());
    }
}
