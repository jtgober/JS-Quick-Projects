
let CryptoJS = require("crypto-js");
let encryptedPassword = CryptoJS.AES.encrypt('Pa$sword123!', "ups").toString();
console.log(encryptedPassword); // U2FsdGVkX18iI0gLaeQmf2z7Ev82hMynTo1c2TkCCJo=

let decryptedPassword  = CryptoJS.AES.decrypt(encryptedPassword, "ups").toString(CryptoJS.enc.Utf8);
console.log(decryptedPassword);